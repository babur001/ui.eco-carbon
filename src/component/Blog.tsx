import { useTranslations } from "next-intl";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { blogs } from "@/server/db/schema";
import { ChevronRight } from "lucide-react";
import { useIsClient } from "./useIsClient";

function Blog({ posts }: { posts: (typeof blogs.$inferSelect)[] }) {
  const { isClient } = useIsClient();
  const t = useTranslations();

  if (!isClient) return null;

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-5">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">{t("Blog")}</h2>
        <p className="mt-1 text-gray-600">{t("Kompaniyamizdagi so'ngi yangiliklar")}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          return (
            <Link href={`/blog/${post.uuid}`}>
              <BlogCard title={post.title} desc={post.body} img={post.image_url} createdAt={post.created_at!} />
            </Link>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href={`/blog`}
        >
          {t("Barchasi")}
          <ChevronRight strokeWidth={1.5} size={16} />
        </Link>
      </div>
    </div>
  );
}

export default Blog;
