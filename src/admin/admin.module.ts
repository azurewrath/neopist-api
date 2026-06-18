import { Module } from "@nestjs/common";
import { AdminTherapistsController } from "./admin-therapists.controller";
import { AdminClientsController } from "./admin-clients.controller";
import { AdminBlogController } from "./admin-blog.controller";
import { AdminBannersController } from "./admin-banners.controller";
import { AdminSettingsController } from "./admin-settings.controller";
import { AdminReviewsController } from "./admin-reviews.controller";
import { AdminSubscriptionsController } from "./admin-subscriptions.controller";
import { AdminNotificationsController } from "./admin-notifications.controller";
import { AdminStatsController } from "./admin-stats.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [
    AdminTherapistsController,
    AdminClientsController,
    AdminBlogController,
    AdminBannersController,
    AdminSettingsController,
    AdminReviewsController,
    AdminSubscriptionsController,
    AdminNotificationsController,
    AdminStatsController,
  ],
  providers: [PrismaService],
})
export class AdminModule {}
