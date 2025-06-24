import { Geist } from "next/font/google";
import WorkWithUs from "@/component/WorkWithUs";
import Hero from "@/component/Hero";
import AboutUs from "@/component/AboutUs";
import Services from "@/component/Services";
import Team from "@/component/Team";
import ContactSection from "@/component/ContactSection";
import Blog from "@/component/Blog";
import UzbekistanMap from "@/component/Map";
import Layout from "@/component/Layout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import { get } from "lodash";
import { db } from "@/server/app";
import { blogs, settings as settingsSchema } from "@/server/db/schema";
import Partners from "@/component/Partners";
import { minutesToSeconds } from "@/utils/minutes-to-seconds";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

interface IHomeProps {
  messages: Record<string, string | Record<string, string>>;
  posts: (typeof blogs.$inferSelect)[];
  settings: typeof settingsSchema.$inferSelect;
}

export const getStaticProps: GetStaticProps<IHomeProps> = async (context) => {
  const lang = context.locale;

  const [posts, [settingsData], translations] = await Promise.all([
    db.select().from(blogs).limit(3),
    db.select().from(settingsSchema).limit(1),
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
      posts,
      messages: JSON.parse(get(translations, "data.translations", {})),
      settings: settingsData,
    },
    revalidate: minutesToSeconds(3),
  };
};

export default function Home({ posts, settings }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout className={geistSans.className}>
      <Hero />
      <AboutUs />
      <WorkWithUs />
      <Services />
      <Team />
      <Partners />
      <UzbekistanMap />
      <Blog posts={posts} />

      <ContactSection settings={settings} />
    </Layout>
  );
}
