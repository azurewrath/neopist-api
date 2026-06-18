import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { TherapistsModule } from "./therapists/therapists.module";
import { TestModule } from "./test/test.module";
import { BlogModule } from "./blog/blog.module";
import { AdminModule } from "./admin/admin.module";
import { AppointmentsModule } from "./appointments/appointments.module";
import { TherapistMgmtModule } from "./therapist-mgmt/therapist-mgmt.module";
import { ReviewsModule } from "./reviews/reviews.module";
import { MoodModule } from "./mood/mood.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    TherapistsModule,
    TestModule,
    BlogModule,
    AdminModule,
    AppointmentsModule,
    TherapistMgmtModule,
    ReviewsModule,
    MoodModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
