import { db } from "@/server/app";
import { translations } from "@/server/db/schema";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { get } from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "node:path";

type INextLanguagesResponseBody = {
  translations?: string;
  errorMessage?: string;
};

const availableLanguages = ["en", "ru", "uz"] as const;

type TLanguages = (typeof availableLanguages)[number];

export default async function handler(req: NextApiRequest, res: NextApiResponse<INextLanguagesResponseBody>) {
  const lang = get(req, "body.lang", "en") as TLanguages;
  const translationsAll = await db.select().from(translations);

  const translate_transformed = translationsAll.reduce((acc, curr) => {
    const activeValue = (() => {
      if (lang === "en") return "valueEn";
      if (lang === "ru") return "valueRu";
      return "value";
    })();

    acc[curr.key] = curr[activeValue];

    return acc;
  }, {} as Record<string, string>);

  if (availableLanguages.includes(lang)) {
    return res.status(200).json({ translations: JSON.stringify(translate_transformed) });
  }

  res.status(400).json({ errorMessage: `Language not found in ${JSON.stringify(availableLanguages)}` });
}
