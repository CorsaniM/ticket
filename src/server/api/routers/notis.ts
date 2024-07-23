import { notifications } from 'app/server/db/schema';
import { publicProcedure } from '../trpc';
import { db } from 'app/server/db'
import { desc } from 'drizzle-orm/sql/expressions/select';

export const notificationsRouter = router({
    list: publicProcedure.query(async ({ ctx }) => {
        return db.select()
          .from(notifications)
          .orderBy(desc(notifications.createdAt))
    }),
  });
function router(arg0: { list: import("@trpc/server").TRPCQueryProcedure<{ input: any; output: { id: number; createdAt: string; message: string; }[]; }>; }) {
    throw new Error('Function not implemented.');
}
