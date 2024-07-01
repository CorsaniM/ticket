import { eq } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "app/server/api/trpc";
import { db } from "app/server/db";
import { notification } from "app/server/db/schema";


export const notificationRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        user: z.string(),
        title: z.string(),
        description: z.string(),
        state: z.boolean(),
        orgId: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(notification).values(input);
    }),

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.notification.findMany();
  }),

  getByUser: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const channel = await db.query.notification.findMany({
        where: eq(notification.user, input.userId),
      });

      return channel;
    }),

  getByOrg: publicProcedure
    .input(
      z.object({
        OrgId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const channel = await db.query.notification.findFirst({
        where: eq(notification.orgId, input.OrgId),
      });

      return channel;
    }),


  get: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const channel = await ctx.db.query.notification.findFirst({
        where: eq(notification.id, input.id),
      });

      return channel;
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      await db.delete(notification).where(eq(notification.id, input.id));
    }),
});

export { notification };
