import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard, Roles } from "../auth/roles.guard";
import { PrismaService } from "../prisma/prisma.service";

@Controller("admin/blog")
@UseGuards(AuthGuard("jwt"), RolesGuard)
@Roles("admin")
export class AdminBlogController {
  constructor(private prisma: PrismaService) {}

  @Get()
  findAll(@Query("status") status?: string) {
    return this.prisma.blogPost.findMany({
      where: status ? { status } : undefined,
      include: { author: { select: { name: true, role: true } } },
      orderBy: { createdAt: "desc" },
    });
  }

  /** GET /admin/blog/pending — psikologların onay bekleyen yazıları */
  @Get("pending")
  findPending() {
    return this.prisma.blogPost.findMany({
      where: { status: "pending" },
      include: { author: { select: { id: true, name: true, role: true } } },
      orderBy: { createdAt: "desc" },
    });
  }

  @Post()
  async create(@Body() dto: any) {
    const slug = dto.slug || dto.title?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 80) + "-" + Date.now();
    return this.prisma.blogPost.create({
      data: { ...dto, slug, status: dto.status ?? "published", publishedAt: new Date() },
    });
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: any) {
    return this.prisma.blogPost.update({ where: { id }, data: dto });
  }

  /** PATCH /admin/blog/:id/approve — yazıyı onayla */
  @Patch(":id/approve")
  async approve(@Param("id") id: string) {
    return this.prisma.blogPost.update({
      where: { id },
      data: { status: "published", publishedAt: new Date() },
    });
  }

  /** PATCH /admin/blog/:id/reject — yazıyı reddet */
  @Patch(":id/reject")
  async reject(@Param("id") id: string) {
    return this.prisma.blogPost.update({
      where: { id },
      data: { status: "draft" },
    });
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.prisma.blogPost.delete({ where: { id } });
  }
}
