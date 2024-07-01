import { eq } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "app/server/api/trpc";
import { db } from "app/server/db";
import { tickets } from "app/server/db/schema";

export const ticketsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        user: z.string(),
        name: z.string(),
        description: z.string(),
        images: z.string(),
        state: z.string(),
        orgId: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(tickets).values(input);
    }),

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.tickets.findMany();
  }),

  getByUser: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const channel = await db.query.tickets.findMany({
        where: eq(tickets.user, input.userId),
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
      const channel = await db.query.tickets.findFirst({
        where: eq(tickets.orgId, input.OrgId),
      });

      return channel;
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        user: z.string(),
        name: z.string(),
        description: z.string(),
        images: z.string(),
        state: z.string(),
        relevance: z.string(),
        orgId: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await db.update(tickets).set(input).where(eq(tickets.id, input.id));
    }),

  get: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const channel = await db.query.tickets.findFirst({
        where: eq(tickets.id, input.id),
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
      await db.delete(tickets).where(eq(tickets.id, input.id));
    }),
});
