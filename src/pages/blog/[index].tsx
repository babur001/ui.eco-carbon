import React from "react";
import Layout from "@/component/Layout";
import { db } from "@/server/app";
import { blogs } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { GetStaticPaths, GetStaticProps } from "next";
import { get } from "lodash";
import { minutesToSeconds } from "@/utils/minutes-to-seconds";
import { useRouter } from "next/router";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const uuid = get(context, "params.index", "") as string;
  const locale = get(context, "locale", "en");

  const [post] = await db.select().from(blogs).where(eq(blogs.uuid, uuid)).limit(1);

  return {
    props: {
      post,
    },
    revalidate: minutesToSeconds(5),
  };
};

function BlogsPage({ post }: { post: typeof blogs.$inferSelect }) {
  const router = useRouter();
  const lang = capitalizeFirstLetter(router.locale || "en");

  return (
    <Layout>
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <div className="relative w-full aspect-video overflow-hidden bg-gray-100 rounded-lg group">
                <img
                  alt="Autonomous Software Maintenance Has Arrived"
                  loading="lazy"
                  className="object-cover duration-500 group-hover:scale-105"
                  src={post.image_url}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                />
              </div>

              <h2 className="text-2xl font-bold md:text-3xl">{get(post, `title${lang}`)}</h2>

              <article dangerouslySetInnerHTML={{ __html: get(post, `body${lang}`, "-") }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogsPage;
