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
  const lang = get(req, "body.lang", "en") satisfies TLanguages;

  if (availableLanguages.includes(lang)) {
    const translations = (await import(`@/translations/${lang}.json`)).default;
    return res.status(200).json({ translations: JSON.stringify(translations) });
  }

  res.status(400).json({ errorMessage: `Language not found in ${JSON.stringify(availableLanguages)}` });
}
