import fs from "node:fs/promises";
import { eq } from "drizzle-orm";
import { db } from "../app";
import { translations } from "./schema";
import path from "node:path";

const seed = async () => {
  const translationsUz = JSON.parse(await fs.readFile(path.resolve(process.cwd(), "src/translations/uz.json"), "utf-8"));
  const translationsRu = JSON.parse(await fs.readFile(path.resolve(process.cwd(), "src/translations/ru.json"), "utf-8"));
  const translationsEn = JSON.parse(await fs.readFile(path.resolve(process.cwd(), "src/translations/en.json"), "utf-8"));

  Object.entries(translationsUz).forEach(([key, t]) => {
    db.insert(translations)
      .values({
        key: key,
        value: t as string,
        valueEn: translationsEn[key],
        valueRu: translationsRu[key],
      })
      .execute();
  });
};

seed();
