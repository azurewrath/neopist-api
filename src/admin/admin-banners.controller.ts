import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard, Roles } from "../auth/roles.guard";
import { PrismaService } from "../prisma/prisma.service";

@Controller("admin/banners")
@UseGuards(AuthGuard("jwt"), RolesGuard)
@Roles("admin")
export class AdminBannersController {
  constructor(private prisma: PrismaService) {}

  @Get()
  findAll() {
    return this.prisma.banner.findMany({ orderBy: { sortOrder: "asc" } });
  }

  @Post()
  create(@Body() dto: any) {
    return this.prisma.banner.create({ data: dto });
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: any) {
    return this.prisma.banner.update({ where: { id }, data: dto });
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.prisma.banner.delete({ where: { id } });
  }
}