"use server";

import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/server/db/schema";

export const db = drizzle({ connection: process.env.DATABASE_URL!, schema });
