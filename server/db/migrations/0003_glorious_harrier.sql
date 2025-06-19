ALTER TABLE "blogs" ALTER COLUMN "title" SET DEFAULT ''::text;--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "body" SET DEFAULT ''::text;--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "image_url" SET DEFAULT ''::text;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "titleEn" text DEFAULT ''::text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "titleRu" text DEFAULT ''::text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "bodyEn" text DEFAULT ''::text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "bodyRu" text DEFAULT ''::text NOT NULL;