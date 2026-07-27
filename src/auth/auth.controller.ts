import {
  Controller, Post, Body, HttpCode, UseInterceptors, UploadedFiles, BadRequestException,
} from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { AuthService } from "./auth.service";

const applyStorage = diskStorage({
  destination: "/var/www/uploads",
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = file.originalname.includes(".") ? file.originalname.slice(file.originalname.lastIndexOf(".")) : "";
    cb(null, `apply-${unique}${ext}`);
  },
});

@Controller("auth")
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post("register")
  register(@Body() dto: { name: string; email: string; password: string; role: string }) {
    return this.auth.register(dto);
  }

  @Post("therapist-apply")
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: "licenseDiploma", maxCount: 1 },
        { name: "masterDiploma", maxCount: 1 },
        { name: "cv", maxCount: 1 },
      ],
      { storage: applyStorage, limits: { fileSize: 10 * 1024 * 1024 } },
    ),
  )
  async therapistApply(
    @Body() body: any,
    @UploadedFiles()
    files: {
      licenseDiploma?: Express.Multer.File[];
      masterDiploma?: Express.Multer.File[];
      cv?: Express.Multer.File[];
    },
  ) {
    if (!body.name || !body.email || !body.password) {
      throw new BadRequestException("Ad, e-posta ve şifre zorunludur.");
    }
    if (body.password !== body.passwordConfirm) {
      throw new BadRequestException("Şifreler eşleşmiyor.");
    }
    if (body.membershipAccepted !== "true" && body.membershipAccepted !== true) {
      throw new BadRequestException("Üyelik sözleşmesini kabul etmelisiniz.");
    }
    if (!files?.licenseDiploma?.[0]) {
      throw new BadRequestException("Lisans diploması zorunludur.");
    }

    return this.auth.therapistApply({
      name: body.name,
      email: body.email,
      password: body.password,
      phone: body.phone,
      tcKimlik: body.tcKimlik,
      birthDate: body.birthDate,
      country: body.country,
      city: body.city,
      gender: body.gender,
      linkedinUrl: body.linkedinUrl,
      websiteUrl: body.websiteUrl,
      marketingConsent: body.marketingConsent === "true" || body.marketingConsent === true,
      membershipAccepted: true,
      licenseDiplomaUrl: `/uploads/${files.licenseDiploma[0].filename}`,
      masterDiplomaUrl: files?.masterDiploma?.[0] ? `/uploads/${files.masterDiploma[0].filename}` : null,
      cvUrl: files?.cv?.[0] ? `/uploads/${files.cv[0].filename}` : null,
    });
  }

  @HttpCode(200)
  @Post("login")
  login(@Body() dto: { email: string; password: string }) {
    return this.auth.login(dto.email, dto.password);
  }
}
