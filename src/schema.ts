import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const allowedUserTable = pgTable('allowed_user_table', {
	id: serial('id').primaryKey(),
	email: text('email').notNull().unique(),
	name: text('name').notNull(),
	createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export type InsertUser = typeof allowedUserTable.$inferInsert;
export type SelectUser = typeof allowedUserTable.$inferSelect;
