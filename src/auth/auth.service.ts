import { Injectable, UnauthorizedException, ConflictException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(dto: { name: string; email: string; password: string; role: string }) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) throw new ConflictException("Bu e-posta zaten kayıtlı.");

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        passwordHash,
        role: dto.role,
      },
    });

    if (dto.role === "therapist") {
      await this.prisma.therapist.create({
        data: { userId: user.id, sessionPrice: 1500 },
      });
    }

    const token = this.jwt.sign({ sub: user.id, role: user.role });
    return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
  }

  async therapistApply(dto: {
    name: string;
    email: string;
    password: string;
    phone?: string;
    tcKimlik?: string;
    birthDate?: string;
    country?: string;
    city?: string;
    gender?: string;
    linkedinUrl?: string;
    websiteUrl?: string;
    marketingConsent: boolean;
    membershipAccepted: boolean;
    licenseDiplomaUrl: string;
    masterDiplomaUrl?: string | null;
    cvUrl?: string | null;
  }) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) throw new ConflictException("Bu e-posta zaten kayıtlı.");

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        passwordHash,
        role: "therapist",
        phone: dto.phone || null,
        tcKimlik: dto.tcKimlik || null,
        birthDate: dto.birthDate ? new Date(dto.birthDate) : null,
        country: dto.country || null,
        city: dto.city || null,
        gender: dto.gender || null,
        marketingConsent: dto.marketingConsent,
        membershipAccepted: dto.membershipAccepted,
      },
    });

    await this.prisma.therapist.create({
      data: {
        userId: user.id,
        isVerified: false,
        sessionPrice: 1500,
        linkedinUrl: dto.linkedinUrl || null,
        websiteUrl: dto.websiteUrl || null,
        licenseDiplomaUrl: dto.licenseDiplomaUrl,
        masterDiplomaUrl: dto.masterDiplomaUrl || null,
        cvUrl: dto.cvUrl || null,
      },
    });

    const token = this.jwt.sign({ sub: user.id, role: user.role });
    return {
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
      message: "Başvurunuz alındı. Onay sonrası profilinizi tamamlayabilirsiniz.",
    };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException("E-posta veya şifre hatalı.");

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) throw new UnauthorizedException("E-posta veya şifre hatalı.");

    const token = this.jwt.sign({ sub: user.id, role: user.role });
    return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
  }
}
