import { Controller, Get, Post, Patch, Delete, Body, Param, Query, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard, Roles } from "../auth/roles.guard";
import { PrismaService } from "../prisma/prisma.service";

@Controller("questions")
export class QuestionsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async findPublished(@Query("limit") limit?: string) {
    const take = limit ? Math.min(+limit, 50) : 20;
    return this.prisma.question.findMany({
      where: { status: { in: ["answered", "published"] } },
      include: {
        answers: {
          where: { status: "published" },
          include: {
            therapist: { include: { user: { select: { name: true } } } },
          },
          take: 1,
        },
      },
      orderBy: { createdAt: "desc" },
      take,
    });
  }

  @Get("pending")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles("therapist", "admin")
  async pendingForTherapists() {
    return this.prisma.question.findMany({
      where: { status: "pending" },
      include: { client: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  }

  @Get("featured")
  async featured() {
    return this.prisma.question.findMany({
      where: { status: { in: ["answered", "published"] } },
      include: {
        answers: {
          where: { status: "published" },
          include: {
            therapist: {
              select: {
                title: true,
                user: { select: { name: true } },
              },
            },
          },
          take: 1,
        },
      },
      orderBy: { createdAt: "desc" },
      take: 5,
    });
  }

  @Post()
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles("client", "admin")
  async create(@Req() req: any, @Body() body: { title: string; body: string; therapistId?: string }) {
    return this.prisma.question.create({
      data: {
        clientId: req.user.userId,
        therapistId: body.therapistId || null,
        title: body.title,
        body: body.body,
        status: "pending",
      },
    });
  }

  @Post(":id/answer")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles("therapist", "admin")
  async answer(@Req() req: any, @Param("id") id: string, @Body() body: { body: string }) {
    const therapist = await this.prisma.therapist.findUnique({ where: { userId: req.user.userId } });
    if (!therapist) throw new Error("Psikolog profili bulunamadı");

    const answer = await this.prisma.answer.create({
      data: {
        questionId: id,
        therapistId: therapist.id,
        body: body.body,
        status: "published",
      },
    });

    await this.prisma.question.update({
      where: { id },
      data: { status: "answered" },
    });

    return answer;
  }
}

@Controller("admin/questions")
@UseGuards(AuthGuard("jwt"), RolesGuard)
@Roles("admin")
export class AdminQuestionsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  findAll() {
    return this.prisma.question.findMany({
      include: {
        client: { select: { name: true, email: true } },
        answers: {
          include: { therapist: { include: { user: { select: { name: true } } } } },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body: { status?: string; title?: string; body?: string }) {
    return this.prisma.question.update({ where: { id }, data: body });
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.prisma.question.delete({ where: { id } });
  }
}
