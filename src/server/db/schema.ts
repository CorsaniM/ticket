// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
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
    userId: text("userId").notNull(),
    title: text("title", { length: 256 }),
    description: text("description"),
    urgencia: int("urgencia"),
    urgenciaSoporte: int("urgenciaSoporte"),
    participantes: text("participantes"),
    state: text("state", { length: 256 }),
    orgId: text("orgId", { length: 256 }),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: int("updatedAt", { mode: "timestamp" }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.title),
  }),
);

export const ticketsRelations = relations(tickets, ({ many }) => ({
  message: many(message),
  images: many(images),
  participantes: many(participants),
}));

export const message = createTable("message", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  userId: text("userId").notNull(),
  tipoMessage: text("tipoMessage"),
  title: text("title"),
  ticketId: int("ticketId")
    .references(() => tickets.id)
    .notNull(),
  description: text("description"),
  images: text("images"),
  state: text("state"),
  orgId: text("orgId", { length: 256 }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" }),
});

export const images = createTable("images", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  ticketId: int("ticketId")
    .references(() => tickets.id)
    .notNull(),
  url: text("url"),
});

export const participants = createTable("participants", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  userId: text("userId"),
  ticketId: int("ticketId")
    .references(() => tickets.id)
    .notNull(),
});

export const messageRelations = relations(message, ({ one }) => ({
  ticket: one(tickets, {
    fields: [message.ticketId],
    references: [tickets.id],
  }),
}));

export const imagesRelations = relations(images, ({ one }) => ({
  ticket: one(tickets, { fields: [images.ticketId], references: [tickets.id] }),
}));

export const participantsRelations = relations(participants, ({ one }) => ({
  ticket: one(tickets, {
    fields: [participants.ticketId],
    references: [tickets.id],
  }),
}));
