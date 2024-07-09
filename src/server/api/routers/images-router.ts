import { eq } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "app/server/api/trpc";
import { db } from "app/server/db";
import { images } from "app/server/db/schema";

export const imagesRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        id: z.number(),
        ticketId: z.number(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(images).values(input);
    }),

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.images.findMany();
  }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        ticketId: z.number(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await db.update(images).set(input).where(eq(images.id, input.id));
    }),

  get: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const channel = await db.query.images.findFirst({
        where: eq(images.id, input.id),
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
      await db.delete(images).where(eq(images.id, input.id));
    }),
});
