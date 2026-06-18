import { Controller, Get, Param, Query } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Controller("therapists")
export class TherapistsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async findAll(@Query("specialty") specialty?: string, @Query("search") search?: string) {
    const where: any = { isActive: true, isVerified: true };
    if (specialty) where.specialties = { some: { specialty } };
    if (search) {
      where.user = { name: { contains: search, mode: "insensitive" } };
    }
    return this.prisma.therapist.findMany({
      where,
      include: {
        user: { select: { id: true, name: true, avatarUrl: true } },
        specialties: true,
        educations: true,
        reviews: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.prisma.therapist.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, avatarUrl: true } },
        specialties: true,
        educations: true,
        appointments: { take: 10, orderBy: { startTime: "asc" } },
        reviews: { include: { client: { select: { name: true } } } },
      },
    });
  }
}