import { Module } from "@nestjs/common";
import { QuestionsController, AdminQuestionsController } from "./questions.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [QuestionsController, AdminQuestionsController],
  providers: [PrismaService],
})
export class QuestionsModule {}
