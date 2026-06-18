import { Controller, Get, Delete, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard, Roles } from "../auth/roles.guard";
import { PrismaService } from "../prisma/prisma.service";

@Controller("admin/clients")
@UseGuards(AuthGuard("jwt"), RolesGuard)
@Roles("admin")
export class AdminClientsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  findAll() {
    return this.prisma.user.findMany({
      where: { role: "client" },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
        createdAt: true,
        _count: {
          select: {
            appointments: true,
            testResults: true,
            reviews: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
