import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { UsersController } from "./users.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  imports: [MulterModule.register()],
  controllers: [UsersController],
  providers: [PrismaService],
})
export class UsersModule {}
