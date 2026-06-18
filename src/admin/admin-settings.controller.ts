import { Controller, Get, Put, Body, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard, Roles } from "../auth/roles.guard";
import { PrismaService } from "../prisma/prisma.service";

@Controller("admin/settings")
@UseGuards(AuthGuard("jwt"), RolesGuard)
@Roles("admin")
export class AdminSettingsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  findAll() {
    return this.prisma.siteSetting.findMany();
  }

  @Put(":key")
  async upsert(@Param("key") key: string, @Body() dto: { value: any }) {
    return this.prisma.siteSetting.upsert({
      where: { key },
      create: { key, value: dto.value },
      update: { value: dto.value },
    });
  }
}