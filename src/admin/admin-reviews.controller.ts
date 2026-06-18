import { Controller, Get, Delete, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard, Roles } from "../auth/roles.guard";
import { PrismaService } from "../prisma/prisma.service";

@Controller("admin/reviews")
@UseGuards(AuthGuard("jwt"), RolesGuard)
@Roles("admin")
export class AdminReviewsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  findAll() {
    return this.prisma.review.findMany({
      include: {
        client: { select: { id: true, name: true, email: true } },
        therapist: {
          include: { user: { select: { name: true } } },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.prisma.review.delete({ where: { id } });
  }
}
