import { createTRPCRouter, publicProcedure } from "../trpc";

export const usersRouter = createTRPCRouter({
  current: publicProcedure.query(async ({ ctx }) => {
    return {
      user: ctx.db,
    };
  }),
});
