import {
  Controller, Get, Post, Patch, Delete, Param, Body, Req, UseGuards, BadRequestException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PrismaService } from "../prisma/prisma.service";

@Controller("blog")
export class BlogController {
  constructor(private prisma: PrismaService) {}

  /** GET /blog — herkese açık yayınlı yazılar */
  @Get()
  findAll() {
    return this.prisma.blogPost.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
      include: { author: { select: { id: true, name: true, avatarUrl: true } } },
    });
  }

  /** GET /blog/mine — giriş yapan psikoloğun tüm yazıları */
  @UseGuards(AuthGuard("jwt"))
  @Get("mine")
  async findMine(@Req() req: any) {
    return this.prisma.blogPost.findMany({
      where: { authorId: req.user.userId },
      orderBy: { createdAt: "desc" },
    });
  }

  /** GET /blog/:slug — tekil yazı (herkese açık) */
  @Get(":slug")
  findBySlug(@Param("slug") slug: string) {
    return this.prisma.blogPost.findUnique({
      where: { slug },
      include: { author: { select: { id: true, name: true, avatarUrl: true } } },
    });
  }

  /** POST /blog — yeni yazı oluştur */
  @UseGuards(AuthGuard("jwt"))
  @Post()
  async create(@Req() req: any, @Body() body: { title: string; content?: string; excerpt?: string; coverImage?: string; status?: string }) {
    if (!body.title?.trim()) throw new BadRequestException("Başlık zorunludur");
    const slug = this.makeSlug(body.title) + "-" + Date.now();
    const status = body.status === "published" ? "published" : "draft";
    return this.prisma.blogPost.create({
      data: {
        title: body.title.trim(),
        slug,
        content: body.content || null,
        excerpt: body.excerpt || null,
        coverImage: body.coverImage || null,
        authorId: req.user.userId,
        status,
        publishedAt: status === "published" ? new Date() : null,
      },
    });
  }

  /** PATCH /blog/:id — yazıyı güncelle */
  @UseGuards(AuthGuard("jwt"))
  @Patch(":id")
  async update(@Req() req: any, @Param("id") id: string, @Body() body: any) {
    const post = await this.prisma.blogPost.findFirst({ where: { id, authorId: req.user.userId } });
    if (!post) throw new BadRequestException("Yazı bulunamadı veya yetkiniz yok");
    const data: any = {};
    if (body.title !== undefined)    data.title   = body.title.trim();
    if (body.content !== undefined)  data.content = body.content;
    if (body.excerpt !== undefined)  data.excerpt = body.excerpt;
    if (body.coverImage !== undefined) data.coverImage = body.coverImage;
    if (body.status !== undefined) {
      data.status = body.status;
      if (body.status === "published" && !post.publishedAt) data.publishedAt = new Date();
    }
    return this.prisma.blogPost.update({ where: { id }, data });
  }

  /** DELETE /blog/:id — yazıyı sil */
  @UseGuards(AuthGuard("jwt"))
  @Delete(":id")
  async remove(@Req() req: any, @Param("id") id: string) {
    const post = await this.prisma.blogPost.findFirst({ where: { id, authorId: req.user.userId } });
    if (!post) throw new BadRequestException("Yazı bulunamadı veya yetkiniz yok");
    return this.prisma.blogPost.delete({ where: { id } });
  }

  private makeSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
      .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim().replace(/\s+/g, "-").slice(0, 60);
  }
}
