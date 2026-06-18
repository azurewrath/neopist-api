import { Controller, Get, Post, Patch, Param, Body, UseGuards, Req, BadRequestException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PrismaService } from "../prisma/prisma.service";

@Controller("appointments")
export class AppointmentsController {
  constructor(private prisma: PrismaService) {}

  /** GET /appointments/slots/:therapistId — public */
  @Get("slots/:therapistId")
  async getSlots(@Param("therapistId") therapistId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().slice(0, 10);

    const [avails, appts] = await Promise.all([
      this.prisma.therapistAvailability.findMany({
        where: { therapistId, date: { gte: todayStr } },
        orderBy: [{ date: "asc" }, { hour: "asc" }],
      }),
      this.prisma.appointment.findMany({
        where: { therapistId, status: { not: "cancelled" }, startTime: { gte: today } },
        select: { startTime: true },
      }),
    ]);

    const booked = new Set(
      appts.map((a) => {
        const d = a.startTime.toISOString().slice(0, 10);
        const h = a.startTime.getUTCHours();
        return `${d}-${h}`;
      }),
    );

    const grouped: Record<string, number[]> = {};
    for (const av of avails) {
      if (!booked.has(`${av.date}-${av.hour}`)) {
        if (!grouped[av.date]) grouped[av.date] = [];
        grouped[av.date].push(av.hour);
      }
    }

    return Object.entries(grouped)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, hours]) => ({ date, hours: hours.sort((a, b) => a - b) }));
  }

  /** POST /appointments — auth required */
  @UseGuards(AuthGuard("jwt"))
  @Post()
  async create(@Req() req: any, @Body() body: { therapistId: string; date: string; time: string }) {
    const clientId = req.user.userId;
    if (!body.therapistId || !body.date || !body.time)
      throw new BadRequestException("therapistId, date ve time zorunludur");

    const [h] = body.time.split(":").map(Number);
    const startTime = new Date(`${body.date}T${String(h).padStart(2, "0")}:00:00.000Z`);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

    const slot = await this.prisma.therapistAvailability.findFirst({
      where: { therapistId: body.therapistId, date: body.date, hour: h },
    });
    if (!slot) throw new BadRequestException("Bu slot müsait değil");

    const existing = await this.prisma.appointment.findFirst({
      where: { therapistId: body.therapistId, startTime, status: { not: "cancelled" } },
    });
    if (existing) throw new BadRequestException("Bu saat zaten dolu");

    const therapist = await this.prisma.therapist.findUnique({
      where: { id: body.therapistId },
      select: { sessionPrice: true },
    });

    return this.prisma.appointment.create({
      data: { clientId, therapistId: body.therapistId, startTime, endTime, status: "pending", price: therapist?.sessionPrice },
      include: { therapist: { include: { user: { select: { name: true } } } } },
    });
  }

  /** GET /appointments/mine — auth required */
  @UseGuards(AuthGuard("jwt"))
  @Get("mine")
  async mine(@Req() req: any) {
    const { userId, role } = req.user;
    if (role === "therapist") {
      const th = await this.prisma.therapist.findUnique({ where: { userId }, select: { id: true } });
      if (!th) return [];
      return this.prisma.appointment.findMany({
        where: { therapistId: th.id },
        include: { client: { select: { id: true, name: true, avatarUrl: true } } },
        orderBy: { startTime: "desc" },
      });
    }
    return this.prisma.appointment.findMany({
      where: { clientId: userId },
      include: { therapist: { include: { user: { select: { id: true, name: true, avatarUrl: true } } } } },
      orderBy: { startTime: "desc" },
    });
  }

  /** PATCH /appointments/:id/note — danışanın kişisel notu */
  @UseGuards(AuthGuard("jwt"))
  @Patch(":id/note")
  async saveClientNote(
    @Req() req: any,
    @Param("id") id: string,
    @Body() body: { clientNote: string },
  ) {
    const { userId } = req.user;
    const appt = await this.prisma.appointment.findFirst({
      where: { id, clientId: userId },
    });
    if (!appt) throw new BadRequestException("Randevu bulunamadı");
    return this.prisma.appointment.update({
      where: { id },
      data: { clientNote: body.clientNote ?? "" },
      select: { id: true, clientNote: true },
    });
  }
}
