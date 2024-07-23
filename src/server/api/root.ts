import { createCallerFactory, createTRPCRouter } from "app/server/api/trpc";
import { messageRouter } from "./routers/mesagge.router";
import { ticketsRouter } from "./routers/tickets-router";
import { usersRouter } from "./routers/user";
import { imagesRouter } from "./routers/images-router";
import { notificationsRouter } from "./routers/notis";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */

export const appRouter = createTRPCRouter({
  tickets: ticketsRouter,
  message: messageRouter,
  users: usersRouter,
  images: imagesRouter,
});


// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
