import { Controller, Get, Patch, Body, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard, Roles } from "../auth/roles.guard";
import { PrismaService } from "../prisma/prisma.service";

@Controller("admin/therapists")
@UseGuards(AuthGuard("jwt"), RolesGuard)
@Roles("admin")
export class AdminTherapistsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  findAll() {
    return this.prisma.therapist.findMany({
      include: {
        user: {
          select: {
            id: true, name: true, email: true, phone: true, city: true,
            tcKimlik: true, birthDate: true, gender: true, country: true,
          },
        },
        specialties: true,
        certificates: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  @Patch(":id/verify")
  async verify(@Param("id") id: string, @Body() dto: { isVerified: boolean }) {
    return this.prisma.therapist.update({ where: { id }, data: { isVerified: dto.isVerified } });
  }

  @Patch(":id/title")
  async approveTitle(@Param("id") id: string, @Body() dto: { approve: boolean; title?: string }) {
    if (dto.approve) {
      const t = await this.prisma.therapist.findUnique({ where: { id } });
      return this.prisma.therapist.update({
        where: { id },
        data: {
          title: dto.title || t?.titlePending || t?.title,
          titlePending: null,
        },
      });
    }
    return this.prisma.therapist.update({ where: { id }, data: { titlePending: null } });
  }

  @Patch(":id/certificate/:certId")
  async reviewCertificate(
    @Param("certId") certId: string,
    @Body() dto: { status: string },
  ) {
    return this.prisma.therapistCertificate.update({ where: { id: certId }, data: { status: dto.status } });
  }
}
