import {
  Controller, Get, Post, Patch, Delete, Param, Body, Req, UseGuards, BadRequestException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PrismaService } from "../prisma/prisma.service";

@Controller("reviews")
export class ReviewsController {
  constructor(private prisma: PrismaService) {}

  /** POST /reviews — yorum gönder (sadece danışan, randevusu olmalı) */
  @UseGuards(AuthGuard("jwt"))
  @Post()
  async create(
    @Req() req: any,
    @Body() body: { therapistId: string; rating: number; comment?: string; isAnonymous?: boolean },
  ) {
    const clientId = req.user.userId;
    if (req.user.role !== "client") throw new BadRequestException("Sadece danışanlar yorum yapabilir");
    if (!body.therapistId || !body.rating) throw new BadRequestException("therapistId ve rating zorunludur");
    if (body.rating < 1 || body.rating > 5) throw new BadRequestException("Rating 1-5 arasında olmalıdır");

    // Randevu kontrolü — en az 1 geçmiş randevu olmalı
    const appt = await this.prisma.appointment.findFirst({
      where: {
        clientId,
        therapistId: body.therapistId,
        status: { not: "cancelled" },
        startTime: { lte: new Date() },
      },
    });
    if (!appt) throw new BadRequestException("Bu psikolog ile tamamlanmış randevunuz olmalı");

    // Daha önce yorum yapıldı mı?
    const existing = await this.prisma.review.findFirst({
      where: { clientId, therapistId: body.therapistId },
    });
    if (existing) throw new BadRequestException("Bu psikolog için zaten yorum yaptınız");

    return this.prisma.review.create({
      data: {
        clientId,
        therapistId: body.therapistId,
        rating: body.rating,
        comment: body.comment?.trim() || null,
        isAnonymous: body.isAnonymous ?? false,
      },
      include: { client: { select: { name: true } } },
    });
  }

  /** PATCH /reviews/:id — yorumu güncelle */
  @UseGuards(AuthGuard("jwt"))
  @Patch(":id")
  async update(
    @Req() req: any,
    @Param("id") id: string,
    @Body() body: { rating?: number; comment?: string; isAnonymous?: boolean },
  ) {
    const clientId = req.user.userId;
    const review = await this.prisma.review.findFirst({ where: { id, clientId } });
    if (!review) throw new BadRequestException("Yorum bulunamadı veya yetkiniz yok");
    if (body.rating && (body.rating < 1 || body.rating > 5))
      throw new BadRequestException("Rating 1-5 arasında olmalıdır");

    return this.prisma.review.update({
      where: { id },
      data: {
        ...(body.rating    !== undefined && { rating: body.rating }),
        ...(body.comment   !== undefined && { comment: body.comment.trim() }),
        ...(body.isAnonymous !== undefined && { isAnonymous: body.isAnonymous }),
      },
      include: { client: { select: { name: true } } },
    });
  }

  /** DELETE /reviews/:id — yorumu sil */
  @UseGuards(AuthGuard("jwt"))
  @Delete(":id")
  async remove(@Req() req: any, @Param("id") id: string) {
    const clientId = req.user.userId;
    const review = await this.prisma.review.findFirst({ where: { id, clientId } });
    if (!review) throw new BadRequestException("Yorum bulunamadı veya yetkiniz yok");
    return this.prisma.review.delete({ where: { id } });
  }

  /** GET /reviews/my/:therapistId — danışanın bu psikolog için yorumu */
  @UseGuards(AuthGuard("jwt"))
  @Get("my/:therapistId")
  async getMyReview(@Req() req: any, @Param("therapistId") therapistId: string) {
    const clientId = req.user.userId;
    return this.prisma.review.findFirst({ where: { clientId, therapistId } }) ?? null;
  }
}
