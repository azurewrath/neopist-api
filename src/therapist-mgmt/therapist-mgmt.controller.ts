import {
  Controller, Get, Patch, Post, Delete, Body, Param, Req,
  UseGuards, UseInterceptors, UploadedFile, BadRequestException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { PrismaService } from "../prisma/prisma.service";

const avatarStorage = diskStorage({
  destination: "/var/www/uploads",
  filename: (_req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `avatar-${unique}${extname(file.originalname)}`);
  },
});

const certStorage = diskStorage({
  destination: "/var/www/uploads",
  filename: (_req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `cert-${unique}${extname(file.originalname)}`);
  },
});

@UseGuards(AuthGuard("jwt"))
@Controller("therapist")
export class TherapistMgmtController {
  constructor(private prisma: PrismaService) {}

  // ── Profile ────────────────────────────────────────────────────────

  @Get("me")
  async getMe(@Req() req: any) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({
      where: { userId },
      include: {
        user: { select: { id: true, name: true, email: true, avatarUrl: true } },
        specialties: true,
        educations: true,
        certificates: { orderBy: { createdAt: "desc" } },
        reviews: {
          include: { client: { select: { name: true } } },
          orderBy: { createdAt: "desc" },
          take: 20,
        },
      },
    });
    return th;
  }

  @Patch("me")
  async updateMe(@Req() req: any, @Body() body: any) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) throw new BadRequestException("Terapist profili bulunamadı");

    const data: Record<string, any> = {};
    if (body.title      !== undefined) data.title           = body.title;
    if (body.about      !== undefined) data.about           = body.about;
    if (body.experienceYears !== undefined) data.experienceYears = Number(body.experienceYears);
    if (body.sessionPrice    !== undefined) data.sessionPrice    = Number(body.sessionPrice);

    if (Array.isArray(body.specialties)) {
      await this.prisma.therapistSpecialty.deleteMany({ where: { therapistId: th.id } });
      if (body.specialties.length > 0) {
        data.specialties = {
          create: body.specialties.map((s: string) => ({ specialty: s })),
        };
      }
    }

    if (body.name?.trim()) {
      await this.prisma.user.update({ where: { id: userId }, data: { name: body.name.trim() } });
    }

    return this.prisma.therapist.update({
      where: { id: th.id },
      data,
      include: {
        user: { select: { id: true, name: true, email: true, avatarUrl: true } },
        specialties: true,
      },
    });
  }

  @Post("me/avatar")
  @UseInterceptors(FileInterceptor("file", { storage: avatarStorage }))
  async uploadAvatar(@Req() req: any, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException("Dosya bulunamadı");
    const { userId } = req.user;
    const avatarUrl = `/uploads/${file.filename}`;
    await this.prisma.user.update({ where: { id: userId }, data: { avatarUrl } });
    return { avatarUrl };
  }

  // ── Certificates ───────────────────────────────────────────────────

  /** GET /therapist/me/certificates */
  @Get("me/certificates")
  async getCertificates(@Req() req: any) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) return [];
    return this.prisma.therapistCertificate.findMany({
      where: { therapistId: th.id },
      orderBy: { createdAt: "asc" },
    });
  }

  /** POST /therapist/me/certificates — sertifika ekle */
  @Post("me/certificates")
  @UseInterceptors(FileInterceptor("file", { storage: certStorage }))
  async addCertificate(
    @Req() req: any,
    @Body() body: { title: string; year?: string },
    @UploadedFile() file?: Express.Multer.File,
  ) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) throw new BadRequestException("Terapist profili bulunamadı");
    if (!body.title?.trim()) throw new BadRequestException("Sertifika başlığı zorunludur");

    return this.prisma.therapistCertificate.create({
      data: {
        therapistId: th.id,
        title: body.title.trim(),
        year: body.year ? Number(body.year) : null,
        fileUrl: file ? `/uploads/${file.filename}` : null,
        fileName: file?.originalname ?? null,
        status: "approved",
      },
    });
  }

  /** DELETE /therapist/me/certificates/:id */
  @Delete("me/certificates/:id")
  async deleteCertificate(@Req() req: any, @Param("id") id: string) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) throw new BadRequestException("Terapist profili bulunamadı");
    return this.prisma.therapistCertificate.deleteMany({
      where: { id, therapistId: th.id },
    });
  }

  // ── Availability ───────────────────────────────────────────────────

  @Get("me/availability")
  async getAvailability(@Req() req: any) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) throw new BadRequestException("Terapist profili bulunamadı");
    const today = new Date().toISOString().slice(0, 10);
    return this.prisma.therapistAvailability.findMany({
      where: { therapistId: th.id, date: { gte: today } },
      orderBy: [{ date: "asc" }, { hour: "asc" }],
    });
  }

  @Post("me/availability")
  async addAvailability(@Req() req: any, @Body() body: { date: string; hours: number[] }) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) throw new BadRequestException("Terapist profili bulunamadı");
    if (!body.date || !Array.isArray(body.hours) || body.hours.length === 0)
      throw new BadRequestException("date ve hours[] zorunludur");

    const created: any[] = [];
    for (const hour of body.hours) {
      const exists = await this.prisma.therapistAvailability.findUnique({
        where: { therapistId_date_hour: { therapistId: th.id, date: body.date, hour } },
      });
      if (!exists) {
        const row = await this.prisma.therapistAvailability.create({
          data: { therapistId: th.id, date: body.date, hour },
        });
        created.push(row);
      }
    }
    return { created: created.length, rows: created };
  }

  @Delete("me/availability")
  async removeAvailability(@Req() req: any, @Body() body: { date: string; hour: number }) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) throw new BadRequestException("Terapist profili bulunamadı");
    return this.prisma.therapistAvailability.deleteMany({
      where: { therapistId: th.id, date: body.date, hour: body.hour },
    });
  }

  @Post("me/availability/batch")
  async batchAddAvailability(@Req() req: any, @Body() body: { dates: string[]; hours: number[] }) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) throw new BadRequestException("Terapist profili bulunamadı");
    if (!Array.isArray(body.dates) || !Array.isArray(body.hours))
      throw new BadRequestException("dates[] ve hours[] zorunludur");

    let count = 0;
    for (const date of body.dates) {
      for (const hour of body.hours) {
        const exists = await this.prisma.therapistAvailability.findUnique({
          where: { therapistId_date_hour: { therapistId: th.id, date, hour } },
        });
        if (!exists) {
          await this.prisma.therapistAvailability.create({ data: { therapistId: th.id, date, hour } });
          count++;
        }
      }
    }
    return { count };
  }

  @Post("me/availability/batch-remove")
  async batchRemoveAvailability(@Req() req: any, @Body() body: { dates: string[]; hours: number[] }) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) throw new BadRequestException("Terapist profili bulunamadı");
    const result = await this.prisma.therapistAvailability.deleteMany({
      where: { therapistId: th.id, date: { in: body.dates }, hour: { in: body.hours } },
    });
    return { count: result.count };
  }

  // ── Dashboard ──────────────────────────────────────────────────────

  /** GET /therapist/dashboard — özet istatistikler + son randevular */
  @Get("dashboard")
  async getDashboard(@Req() req: any) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({
      where: { userId },
      select: { id: true, sessionPrice: true },
    });
    if (!th) return { recentAppts: [], completed: 0, totalClients: 0, reviews: [], completedThisMonth: 0, sessionPrice: 0 };

    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const [all, reviews] = await Promise.all([
      this.prisma.appointment.findMany({
        where: { therapistId: th.id },
        include: { client: { select: { id: true, name: true, avatarUrl: true } } },
        orderBy: { startTime: "desc" },
        take: 50,
      }),
      this.prisma.review.findMany({
        where: { therapistId: th.id },
        include: { client: { select: { name: true } } },
        orderBy: { createdAt: "desc" },
        take: 10,
      }),
    ]);

    const completed = all.filter(a => a.status === "confirmed" && new Date(a.startTime) < now).length;
    const completedThisMonth = all.filter(a =>
      a.status === "confirmed" &&
      new Date(a.startTime) < now &&
      new Date(a.startTime) >= monthStart,
    ).length;
    const uniqueClients = new Set(all.map(a => a.clientId)).size;

    return {
      recentAppts: all.slice(0, 20),
      completed,
      completedThisMonth,
      totalClients: uniqueClients,
      sessionPrice: th.sessionPrice,
      reviews,
    };
  }

  // ── Client Notes ───────────────────────────────────────────────────

  /** GET /therapist/notes — tüm danışan notları */
  @Get("notes")
  async getNotes(@Req() req: any) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) return [];
    return this.prisma.clientNote.findMany({
      where: { therapistId: th.id },
      select: { clientId: true, content: true, updatedAt: true },
    });
  }

  /** PUT /therapist/notes/:clientId — danışan notu kaydet */
  @Post("notes/:clientId")
  async saveNote(@Req() req: any, @Param("clientId") clientId: string, @Body() body: { content: string }) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) throw new BadRequestException("Terapist profili bulunamadı");

    return this.prisma.clientNote.upsert({
      where: { therapistId_clientId: { therapistId: th.id, clientId } },
      create: { therapistId: th.id, clientId, content: body.content ?? "" },
      update: { content: body.content ?? "" },
    });
  }

  // ── Sessions ───────────────────────────────────────────────────────

  /** GET /therapist/sessions — aylık seans dökümü */
  @Get("sessions")
  async getSessions(@Req() req: any) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) return { totalSessions: 0, totalCompleted: 0, uniqueClients: 0, monthly: [] };

    const all = await this.prisma.appointment.findMany({
      where: { therapistId: th.id, status: { not: "cancelled" } },
      include: { client: { select: { id: true, name: true, avatarUrl: true } } },
      orderBy: { startTime: "desc" },
    });

    const now = new Date();
    const completed = all.filter(a => new Date(a.startTime) < now);
    const uniqueClients = new Set(all.map(a => a.clientId)).size;

    const monthMap = new Map<string, any[]>();
    all.forEach(a => {
      const key = new Date(a.startTime).toLocaleDateString("tr-TR", { year: "numeric", month: "long" });
      if (!monthMap.has(key)) monthMap.set(key, []);
      monthMap.get(key)!.push(a);
    });

    const monthly = [...monthMap.entries()].map(([month, sessions]) => ({
      month,
      count: sessions.length,
      sessions,
    }));

    return { totalSessions: all.length, totalCompleted: completed.length, uniqueClients, monthly };
  }

  /** PATCH /therapist/clients/:appointmentId — seans notu kaydet */
  @Patch("clients/:appointmentId")
  async saveApptNote(
    @Req() req: any,
    @Param("appointmentId") appointmentId: string,
    @Body() body: { notes: string },
  ) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) throw new BadRequestException("Terapist profili bulunamadı");
    return this.prisma.appointment.update({
      where: { id: appointmentId, therapistId: th.id },
      data: { notes: body.notes },
    });
  }

  /** POST /therapist/me/cover — kapak fotoğrafı yükle */
  @Post("me/cover")
  @UseInterceptors(FileInterceptor("file", { storage: avatarStorage }))
  async uploadCover(@Req() req: any, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException("Dosya bulunamadı");
    const { userId } = req.user;
    const coverUrl = `/uploads/${file.filename}`;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) throw new BadRequestException("Terapist profili bulunamadı");
    await this.prisma.therapist.update({ where: { id: th.id }, data: { coverUrl } });
    return { coverUrl };
  }

  /** GET /therapist/subscription — abonelik durumu */
  @Get("subscription")
  async getSubscription(@Req() req: any) {
    const { userId } = req.user;
    const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
    if (!th) return null;

    const sub = await this.prisma.subscription.findUnique({
      where: { therapistId: th.id },
      include: { payments: { orderBy: { paidAt: "desc" } } },
    });
    if (!sub) return null;

    const now = new Date();
    const daysLeft = Math.max(0, Math.ceil((new Date(sub.endDate).getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    const isExpired = new Date(sub.endDate) < now;

    return { ...sub, daysLeft, isExpired, status: isExpired ? "expired" : sub.status };
  }
}
