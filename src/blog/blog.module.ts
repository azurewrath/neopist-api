import { Module } from "@nestjs/common";
import { BlogController } from "./blog.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({ controllers: [BlogController], providers: [PrismaService] })
export class BlogModule {}