// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `clerk_${name}`);

export const tickets = createTable(
  "tickets",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    user: text("user").notNull(),
    name: text("name", { length: 256 }),
    description: text("description"),
    images: text("images"),
    state: text("name", { length: 256 }),
    orgId: text("orgId", { length: 256 }),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: int("updatedAt", { mode: "timestamp" }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const message = createTable(
  "message", 
  {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  user: text("user").notNull(),
  description: text("description"),
  images: text("images"),
  state: int("state", { mode: "boolean" }).default(false),
  orgId: text("orgId", { length: 256 }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" }),
});
