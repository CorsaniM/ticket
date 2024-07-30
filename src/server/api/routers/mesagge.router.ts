import { eq } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "app/server/api/trpc";
import { db } from "app/server/db";
import { message } from "app/server/db/schema";

export const messageRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        description: z.string(),
        tipoMessage: z.string(),
        title: z.string(),
        ticketId: z.number(),
        images: z.string(),
        state: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
        orgId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(message).values(input);
    }),

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.message.findMany();
  }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        state: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await db.update(message).set(input).where(eq(message.id, input.id));
    }),

  get: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const channel = await db.query.message.findFirst({
        where: eq(message.id, input.id),
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
      await db.delete(message).where(eq(message.id, input.id));
    }),
});
