import { Controller, Get, Post, Body, UseGuards, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PrismaService } from "../prisma/prisma.service";

@Controller("test")
export class TestController {
  constructor(private prisma: PrismaService) {}

  @Get("questions")
  async getQuestions() {
    return this.prisma.testQuestion.findMany({
      where: { isActive: true },
      include: { answers: { orderBy: { sortOrder: "asc" } } },
      orderBy: { sortOrder: "asc" },
    });
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("submit")
  async submit(@Req() req: any, @Body() dto: { answers: any; preferences: any }) {
    const result = await this.prisma.clientTestResult.create({
      data: {
        userId: req.user.userId,
        answers: dto.answers,
        preferences: dto.preferences,
      },
    });

    // Simple matching: find therapists matching specialty
    const wantedSpecialty = dto.preferences?.specialty;
    if (wantedSpecialty) {
      const therapists = await this.prisma.therapist.findMany({
        where: {
          isActive: true,
          isVerified: true,
          specialties: { some: { specialty: wantedSpecialty } },
        },
      });
      for (const t of therapists) {
        await this.prisma.therapistMatch.upsert({
          where: { userId_therapistId: { userId: req.user.userId, therapistId: t.id } },
          create: { userId: req.user.userId, therapistId: t.id, matchScore: Math.floor(Math.random() * 20 + 80) },
          update: { matchScore: Math.floor(Math.random() * 20 + 80) },
        });
      }
    }

    return result;
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("matches")
  async getMatches(@Req() req: any) {
    return this.prisma.therapistMatch.findMany({
      where: { userId: req.user.userId },
      include: {
        therapist: {
          include: {
            user: { select: { name: true } },
            specialties: true,
            reviews: true,
          },
        },
      },
      orderBy: { matchScore: "desc" },
    });
  }
}