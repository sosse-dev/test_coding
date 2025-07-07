import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql2 from "mysql2/promise";
import * as schema from "../db/schema";

const poolConnection = mysql2.createPool(process.env.DATABASE_URL!);

const db = drizzle(poolConnection, {
  schema,
  mode: "default",
});

export { db };
export type Database = typeof db;
