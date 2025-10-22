import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema/user";
import dotenv from "dotenv";

dotenv.config();

// This type will be the Drizzle instance
export let db: ReturnType<typeof drizzle<typeof schema>>;

/**
 * Connects to the database, initializes the Drizzle instance,
 * and verifies the connection.
 */
export const startDb = async () => {
  try {
    const pool = new Pool({
      connectionString: process.env.DB_URL, // Make sure DB_URL is in your .env file
    });

    // Test the connection
    await pool.query("SELECT 1");
    console.log("Database Connection Established!");

    // Initialize the 'db' export with the schema
    db = drizzle(pool, { schema });

  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the app if DB connection fails
  }
};