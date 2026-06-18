import { Module } from "@nestjs/common";
import { TherapistMgmtController } from "./therapist-mgmt.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({ controllers: [TherapistMgmtController], providers: [PrismaService] })
export class TherapistMgmtModule {}
