import { db } from "@/server/app";
import { translations } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { uuid } from "drizzle-orm/pg-core/columns/uuid";
import { get } from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { uuid, field, value } = req.body;

  if (!uuid || !field || value === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Assuming you have a function to update the translation in your database
    const updateTranslation = await db
      .update(translations)
      .set({ [field]: value })
      .where(eq(translations.uuid, uuid));

    // For demonstration purposes, we will just log the update
    console.log(`Updated translation ${uuid}: set ${field} to ${value}`);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error updating translation:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
