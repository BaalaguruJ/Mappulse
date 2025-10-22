import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable("Users", {
  user_id: text("user_id")
    .primaryKey()
    .default(sql`gen_random_uuid()`), // automatically generate UUID
  username: varchar("username", { length: 50 }).notNull().unique(),
  mobile: varchar("mobile", { length: 15 }).notNull().unique(),
  password: text("password").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow()
});
