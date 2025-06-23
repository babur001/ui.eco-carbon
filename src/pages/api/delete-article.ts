import { db } from "@/server/app";
import { blogs } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { uuid } = req.body;

  if (!uuid) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const deletedArticle = await db.delete(blogs).where(eq(blogs.uuid, uuid));

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error deleting article:", error);
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
}
