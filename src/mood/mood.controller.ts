import { Controller, Get, Post, Body, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PrismaService } from "../prisma/prisma.service";

@UseGuards(AuthGuard("jwt"))
@Controller("mood")
export class MoodController {
  constructor(private prisma: PrismaService) {}

  /** POST /mood — bugünün ruh halini kaydet (upsert) */
  @Post()
  async saveMood(@Req() req: any, @Body() body: { score: number }) {
    const { userId } = req.user;
    if (!body.score || body.score < 1 || body.score > 5) {
      throw new Error("score 1-5 arasında olmalıdır");
    }
    const date = new Date().toISOString().slice(0, 10);
    return this.prisma.moodEntry.upsert({
      where: { userId_date: { userId, date } },
      create: { userId, score: body.score, date },
      update: { score: body.score },
    });
  }

  /** GET /mood/week — son 7 günün ruh hali */
  @Get("week")
  async getWeek(@Req() req: any) {
    const { userId } = req.user;
    const now = new Date();
    const dates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(now);
      d.setDate(d.getDate() - (6 - i));
      return d.toISOString().slice(0, 10);
    });
    return this.prisma.moodEntry.findMany({
      where: { userId, date: { in: dates } },
      orderBy: { date: "asc" },
    });
  }
}
