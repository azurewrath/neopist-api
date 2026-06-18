import {
  Controller, Get, Patch, Post, Body, Req,
  UseGuards, UseInterceptors, UploadedFile, BadRequestException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service";

const uploadStorage = diskStorage({
  destination: "/var/www/uploads",
  filename: (_req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `avatar-${unique}${extname(file.originalname)}`);
  },
});

const coverStorage = diskStorage({
  destination: "/var/www/uploads",
  filename: (_req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `cover-${unique}${extname(file.originalname)}`);
  },
});

@UseGuards(AuthGuard("jwt"))
@Controller("users")
export class UsersController {
  constructor(private prisma: PrismaService) {}

  @Get("me")
  async me(@Req() req: any) {
    return this.prisma.user.findUnique({
      where: { id: req.user.userId },
      select: { id: true, name: true, email: true, role: true, avatarUrl: true, coverUrl: true, goal: true },
    });
  }

  /** PATCH /users/me — profil güncelle */
  @Patch("me")
  async updateMe(@Req() req: any, @Body() body: { name?: string; email?: string; goal?: string }) {
    const data: any = {};
    if (body.name?.trim()) data.name = body.name.trim();
    if (body.email?.trim()) {
      const exists = await this.prisma.user.findFirst({
        where: { email: body.email.trim(), NOT: { id: req.user.userId } },
      });
      if (exists) throw new BadRequestException("Bu e-posta zaten kullanımda");
      data.email = body.email.trim();
    }
    if (body.goal !== undefined) data.goal = body.goal;
    if (!Object.keys(data).length) throw new BadRequestException("Güncellenecek alan yok");
    return this.prisma.user.update({
      where: { id: req.user.userId },
      data,
      select: { id: true, name: true, email: true, role: true, avatarUrl: true, coverUrl: true, goal: true },
    });
  }

  /** POST /users/me/avatar — profil fotoğrafı yükle */
  @Post("me/avatar")
  @UseInterceptors(FileInterceptor("file", { storage: uploadStorage }))
  async uploadAvatar(@Req() req: any, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException("Dosya bulunamadı");
    const avatarUrl = `/uploads/${file.filename}`;
    await this.prisma.user.update({ where: { id: req.user.userId }, data: { avatarUrl } });
    return { avatarUrl };
  }

  /** POST /users/me/cover — kapak fotoğrafı yükle */
  @Post("me/cover")
  @UseInterceptors(FileInterceptor("file", { storage: coverStorage }))
  async uploadCover(@Req() req: any, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException("Dosya bulunamadı");
    const coverUrl = `/uploads/${file.filename}`;
    await this.prisma.user.update({ where: { id: req.user.userId }, data: { coverUrl } });
    return { coverUrl };
  }

  /** PATCH /users/me/password — şifre değiştir */
  @Patch("me/password")
  async changePassword(
    @Req() req: any,
    @Body() body: { currentPassword: string; newPassword: string },
  ) {
    if (!body.currentPassword || !body.newPassword)
      throw new BadRequestException("Mevcut ve yeni şifre zorunludur");
    if (body.newPassword.length < 6)
      throw new BadRequestException("Yeni şifre en az 6 karakter olmalıdır");

    const user = await this.prisma.user.findUnique({ where: { id: req.user.userId } });
    if (!user) throw new BadRequestException("Kullanıcı bulunamadı");

    const valid = await bcrypt.compare(body.currentPassword, user.passwordHash);
    if (!valid) throw new BadRequestException("Mevcut şifre hatalı");

    const hashed = await bcrypt.hash(body.newPassword, 10);
    await this.prisma.user.update({ where: { id: req.user.userId }, data: { passwordHash: hashed } });
    return { message: "Şifre başarıyla güncellendi" };
  }
}
