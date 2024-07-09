import { eq } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "app/server/api/trpc";
import { db } from "app/server/db";
import { message, tickets } from "app/server/db/schema";

export const ticketsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        title: z.string(),
        description: z.string(),
        images: z.string(),
        urgencia: z.number(),
        urgenciaSoporte: z.number(),
        participantes: z.string(),
        state: z.string(),
        orgId: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const [respuesta] = await ctx.db
        .insert(tickets)
        .values(input)
        .returning();

      if (!respuesta) {
        throw new Error("Error al crear el ticket");
      }

      await db.insert(message).values({
        userId: input.userId,
        title: input.title,
        description: input.description,
        images: input.images,
        state: "",
        orgId: input.orgId,
        createdAt: new Date(),
        updatedAt: new Date(),
        tipoMessage: "subida",
        ticketId: 1,
      });
    }),

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.tickets.findMany({
      with: { message: true },
    });
  }),

  getByUser: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const channel = await db.query.tickets.findMany({
        where: eq(tickets.userId, input.userId),
        with: { message: true },
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
        userId: z.string(),
        title: z.string(),
        description: z.string(),
        images: z.string(),
        urgencia: z.number(),
        urgenciaSoporte: z.number(),
        participantes: z.string(),
        state: z.string(),
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
