import { Module } from "@nestjs/common";
import { TherapistsController } from "./therapists.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({ controllers: [TherapistsController], providers: [PrismaService] })
export class TherapistsModule {}