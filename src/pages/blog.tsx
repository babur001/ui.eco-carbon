import BlogCard from "@/component/BlogCard";
import Layout from "@/component/Layout";
import { useTranslations } from "next-intl";
import { blogs, blogs as blogsSchema } from "@/server/db/schema";
import { db } from "@/server/app";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import { get } from "lodash";
import Link from "next/link";
import { minutesToSeconds } from "@/utils/minutes-to-seconds";
import { useIsClient } from "@/component/useIsClient";
import { useRouter } from "next/router";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";

interface IBlogsProps {
  blogs: (typeof blogsSchema.$inferSelect)[];
  messages: Record<string, string | Record<string, string>>;
}

export const getStaticProps: GetStaticProps<IBlogsProps> = async (context) => {
  const lang = context.locale;

  const [posts, translations] = await Promise.all([
    db.select().from(blogs),
    axios({
      url: `${process.env.API_URL}/api/translations`,
      method: "GET",
      data: {
        lang,
      },
    }),
  ]);

  return {
    props: {
      blogs: posts,
      messages: JSON.parse(get(translations, "data.translations", {})),
    },
    revalidate: minutesToSeconds(5),
  };
};

export default function Blogs({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = useTranslations();
  const { isClient } = useIsClient();

  const router = useRouter();
  const lang = capitalizeFirstLetter(router.locale || "en");

  if (!isClient) return null;

  return (
    <Layout>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-5">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">{t("Blog")}</h2>
          <p className="mt-1 text-gray-600">{t("Kompaniyamizdagi so'ngi yangiliklar")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => {
            return (
              <Link href={`/blog/${blog.uuid}`}>
                <BlogCard title={get(blog, `title${lang}`, "-")} desc={get(blog, `body${lang}`, "-")} img={blog.image_url} createdAt={blog.created_at!} />
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
