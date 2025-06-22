CREATE TABLE "translations" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"key" text NOT NULL,
	"value" text DEFAULT ''::text NOT NULL,
	"valueEn" text DEFAULT ''::text NOT NULL,
	"valueRu" text DEFAULT ''::text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "translations_uuid_unique" UNIQUE("uuid"),
	CONSTRAINT "translations_key_unique" UNIQUE("key")
);
