import { db } from "@/server/app";
import { settings, translations } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body;

  console.log(body);

  if (!body) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Assuming you have a function to update the translation in your database
    const updateTranslation = await db.update(settings).set(body).returning();

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error updating translation:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
