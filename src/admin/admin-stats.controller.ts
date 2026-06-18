import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard, Roles } from "../auth/roles.guard";
import { PrismaService } from "../prisma/prisma.service";

@Controller("admin/stats")
@UseGuards(AuthGuard("jwt"), RolesGuard)
@Roles("admin")
export class AdminStatsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getStats() {
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);

    const [
      totalClients,
      totalTherapists,
      totalAppointments,
      completedAppointments,
      thisMonthAppointments,
      lastMonthAppointments,
      newClientsThisMonth,
      newClientsLastMonth,
      totalReviews,
      publishedBlogPosts,
      activeSubscriptions,
      totalRevenue,
      recentAppointments,
    ] = await Promise.all([
      this.prisma.user.count({ where: { role: "client" } }),
      this.prisma.therapist.count(),
      this.prisma.appointment.count(),
      this.prisma.appointment.count({ where: { status: "confirmed", startTime: { lt: now } } }),
      this.prisma.appointment.count({ where: { createdAt: { gte: monthStart } } }),
      this.prisma.appointment.count({ where: { createdAt: { gte: lastMonthStart, lt: monthStart } } }),
      this.prisma.user.count({ where: { role: "client", createdAt: { gte: monthStart } } }),
      this.prisma.user.count({ where: { role: "client", createdAt: { gte: lastMonthStart, lt: monthStart } } }),
      this.prisma.review.count(),
      this.prisma.blogPost.count({ where: { status: "published" } }),
      this.prisma.subscription.count({ where: { status: "active", endDate: { gt: now } } }),
      this.prisma.subscriptionPayment.aggregate({ _sum: { amount: true } }),
      this.prisma.appointment.findMany({
        where: { status: { not: "cancelled" } },
        include: {
          client: { select: { name: true } },
          therapist: { include: { user: { select: { name: true } } } },
        },
        orderBy: { startTime: "desc" },
        take: 10,
      }),
    ]);

    // Son 6 ayın randevu sayısı
    const monthly = await Promise.all(
      Array.from({ length: 6 }, (_, i) => {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const end = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
        return this.prisma.appointment.count({
          where: { createdAt: { gte: d, lt: end } },
        }).then(count => ({
          month: d.toLocaleDateString("tr-TR", { month: "short", year: "2-digit" }),
          count,
        }));
      }),
    );

    return {
      totals: {
        clients: totalClients,
        therapists: totalTherapists,
        appointments: totalAppointments,
        completedAppointments,
        reviews: totalReviews,
        publishedBlogPosts,
        activeSubscriptions,
        totalRevenue: totalRevenue._sum.amount ?? 0,
      },
      trends: {
        appointmentsThisMonth: thisMonthAppointments,
        appointmentsLastMonth: lastMonthAppointments,
        newClientsThisMonth,
        newClientsLastMonth,
      },
      monthly: monthly.reverse(),
      recentAppointments,
    };
  }
}
