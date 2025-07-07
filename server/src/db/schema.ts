import {
  bigint,
  mysqlEnum,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const isActive = ["active", "inactive"] as const;
export const isActiveEnum = mysqlEnum("isActive", isActive);

export const users = mysqlTable("users", {
  id: bigint("id", {mode: "number"}).autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  phone: varchar("phone", { length: 15 }).notNull(),
  isActive: isActiveEnum.default("inactive"),
  department: varchar("department", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("update_at").defaultNow().onUpdateNow(),
});