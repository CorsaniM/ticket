import { eq } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "app/server/api/trpc";
import { db } from "app/server/db";
import { images, message, tickets } from "app/server/db/schema";

export const ticketsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        title: z.string(),
        description: z.string(),
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
        state: "",
        orgId: input.orgId,
        createdAt: new Date(),
        updatedAt: new Date(),
        tipoMessage: "subida",
        ticketId: respuesta.id,
      });

      await db.insert(images).values({
        url: "",
        ticketId: respuesta.id,
      });
    }),

  list: publicProcedure.query(async ({ ctx }) => {
    const ticketsWithRelations = await ctx.db.query.tickets.findMany({
      with: {
        message: true,
        images: true,
        participantes: true,
      },
    });

    return ticketsWithRelations;
  }),

  getByUser: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const ticketsWithRelations = await ctx.db.query.tickets.findMany({
        where: eq(tickets.userId, input.userId),
        with: {
          message: true,
          images: true,
          participantes: true,
        },
      });

      return ticketsWithRelations;
    }),

  getByOrg: publicProcedure
    .input(
      z.object({
        orgId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const ticketWithRelations = await ctx.db.query.tickets.findFirst({
        where: eq(tickets.orgId, input.orgId),
        with: {
          message: true,
          images: true,
          participantes: true,
        },
      });

      return ticketWithRelations;
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        userId: z.string(),
        title: z.string(),
        description: z.string(),
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
    .query(async ({ input, ctx }) => {
      const ticketWithRelations = await ctx.db.query.tickets.findFirst({
        where: eq(tickets.id, input.id),
        with: {
          message: true,
          images: true,
          participantes: true,
        },
      });

      return ticketWithRelations;
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
