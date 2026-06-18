import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard, Roles } from "../auth/roles.guard";
import { PrismaService } from "../prisma/prisma.service";

@Controller("admin/subscriptions")
@UseGuards(AuthGuard("jwt"), RolesGuard)
@Roles("admin")
export class AdminSubscriptionsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async findAll() {
    const subs = await this.prisma.subscription.findMany({
      include: {
        therapist: {
          include: { user: { select: { name: true, email: true } } },
        },
        payments: { orderBy: { paidAt: "desc" }, take: 3 },
      },
      orderBy: { createdAt: "desc" },
    });
    const now = new Date();
    return subs.map(s => ({
      ...s,
      daysLeft: Math.max(0, Math.ceil((new Date(s.endDate).getTime() - now.getTime()) / 86400000)),
      isExpired: new Date(s.endDate) < now,
    }));
  }

  @Post(":therapistId")
  async createOrRenew(
    @Param("therapistId") therapistId: string,
    @Body() body: { plan?: string; months?: number; amount?: number },
  ) {
    const months = body.months ?? 1;
    const now = new Date();
    const endDate = new Date(now);
    endDate.setMonth(endDate.getMonth() + months);

    const existing = await this.prisma.subscription.findUnique({ where: { therapistId } });
    let sub;
    if (existing) {
      const newEnd = new Date(existing.endDate) > now
        ? new Date(existing.endDate)
        : now;
      newEnd.setMonth(newEnd.getMonth() + months);
      sub = await this.prisma.subscription.update({
        where: { therapistId },
        data: { status: "active", endDate: newEnd, plan: body.plan ?? existing.plan },
      });
    } else {
      sub = await this.prisma.subscription.create({
        data: { therapistId, plan: body.plan ?? "basic", status: "active", startDate: now, endDate },
      });
    }

    if (body.amount) {
      await this.prisma.subscriptionPayment.create({
        data: { subscriptionId: sub.id, amount: body.amount, paidAt: now, description: `${months} aylık abonelik` },
      });
    }
    return sub;
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() body: { status?: string; plan?: string; endDate?: string }) {
    return this.prisma.subscription.update({ where: { id }, data: body as any });
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.prisma.subscription.delete({ where: { id } });
  }
}
