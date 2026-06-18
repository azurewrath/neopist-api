import { Controller, Get, Post, Delete, Param, Body, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard, Roles } from "../auth/roles.guard";
import { PrismaService } from "../prisma/prisma.service";

@Controller("admin/notifications")
@UseGuards(AuthGuard("jwt"), RolesGuard)
@Roles("admin")
export class AdminNotificationsController {
  constructor(private prisma: PrismaService) {}

  /** GET /admin/notifications — son gönderilen duyurular */
  @Get()
  async findAll() {
    return this.prisma.siteSetting.findMany({
      where: { key: { startsWith: "notification_" } },
      orderBy: { updatedAt: "desc" },
    });
  }

  /** POST /admin/notifications — duyuru gönder (SiteSetting'de sakla, frontend'de göster) */
  @Post()
  async send(@Body() body: { title: string; message: string; target: "all" | "clients" | "therapists" }) {
    const key = `notification_${Date.now()}`;
    return this.prisma.siteSetting.create({
      data: {
        key,
        value: {
          title: body.title,
          message: body.message,
          target: body.target ?? "all",
          sentAt: new Date().toISOString(),
        },
      },
    });
  }

  @Delete(":key")
  async remove(@Param("key") key: string) {
    return this.prisma.siteSetting.delete({ where: { key } });
  }
}
