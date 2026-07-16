import { neon } from "@neondatabase/serverless";

const neondatabase = process.env.DATABASE_URL as string;

const sql = neon(neondatabase);

export { sql };
