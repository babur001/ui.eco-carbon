import { Geist } from "next/font/google";
import Services from "@/component/Services";
import ContactSection from "@/component/ContactSection";
import Layout from "@/component/Layout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import { get } from "lodash";
import { db } from "@/server/app";
import { settings as settingsSchema } from "@/server/db/schema";
import { minutesToSeconds } from "@/utils/minutes-to-seconds";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

interface IHomeProps {
  messages: Record<string, string | Record<string, string>>;
  settings: typeof settingsSchema.$inferSelect;
}

export const getStaticProps: GetStaticProps<IHomeProps> = async (context) => {
  const lang = context.locale;

  const [[settingsData], translations] = await Promise.all([
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
      messages: JSON.parse(get(translations, "data.translations", {})),
      settings: settingsData,
    },
    revalidate: minutesToSeconds(3),
  };
};

export default function Home({ settings }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout className={geistSans.className}>
      <Services />
      <ContactSection settings={settings} />
    </Layout>
  );
}
