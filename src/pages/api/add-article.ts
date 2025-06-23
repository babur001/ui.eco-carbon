import { db } from "@/server/app";
import { blogs } from "@/server/db/schema";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { title, image, content, titleRu, titleEn, contentRu, contentEn } = req.body;

  if (!title || !image || !content) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Assuming you have a function to update the translation in your database
    const [newArticle] = await db
      .insert(blogs)
      .values({
        image_url: image,
        title,
        titleRu,
        titleEn,
        body: content,
        bodyRu: contentRu,
        bodyEn: contentEn,
      })
      .returning();

    return res.status(200).json({ success: true, newArticle });
  } catch (error) {
    console.error("Error updating translation:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
