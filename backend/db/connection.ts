import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema/user";
import dotenv from "dotenv";

dotenv.config();
export let db: ReturnType<typeof drizzle<typeof schema>>;
export const startDb = async () => {
  try {
    const pool = new Pool({
      connectionString: process.env.DB_URL,
    });
    await pool.query("SELECT 1");
    console.log("Database Connection Established!");

    db = drizzle(pool, { schema });

  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); 
  }
};