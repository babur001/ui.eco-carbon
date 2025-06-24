"use server";

import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const uuidColumn = () =>
  uuid()
    .primaryKey()
    .unique()
    .default(sql`gen_random_uuid()`);

export const translations = pgTable("translations", {
  uuid: uuidColumn(),
  key: text().notNull().unique(),
  value: text()
    .notNull()
    .default(sql`''::text`),
  valueEn: text()
    .notNull()
    .default(sql`''::text`),
  valueRu: text()
    .notNull()
    .default(sql`''::text`),
  created_at: timestamp({ mode: "string" }).defaultNow(),
});

export const settings = pgTable("settings", {
  companyName: text(),
  email: text(),
  tel: text(),

  facebook: text(),
  instagram: text(),
  linkedin: text(),
  telegram: text(),
  youtube: text(),
});

export const users = pgTable("users", {
  uuid: uuidColumn(),
  username: varchar({ length: 255 }).notNull().unique(),
  password: text().notNull().unique(),
});

export const blogs = pgTable("blogs", {
  uuid: uuidColumn(),
  title: text()
    .notNull()
    .default(sql`''::text`),
  titleEn: text()
    .notNull()
    .default(sql`''::text`),
  titleRu: text()
    .notNull()
    .default(sql`''::text`),
  body: text()
    .notNull()
    .default(sql`''::text`),
  bodyEn: text()
    .notNull()
    .default(sql`''::text`),
  bodyRu: text()
    .notNull()
    .default(sql`''::text`),
  image_url: text()
    .notNull()
    .default(sql`''::text`),
  created_at: timestamp({ mode: "string" }).defaultNow(),
});
