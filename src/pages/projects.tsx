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
import { useTranslations } from "next-intl";

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

export default function Projects({ settings }: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = useTranslations();

  return (
    <Layout className={geistSans.className}>
      <div className="mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">{t("Proektlarimiz")}</h2>
      </div>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-6 [&>iframe]:min-h-[350px] [&>iframe]:w-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/Yi7Rjs2RzJA?si=y2Kfqkoiwanh5Za2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div className="col-span-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold">Led advanced gas leak detection and repair program</h3>
          <p className="text-xl leading-10">
            Eco carbon-services led advanced gas leak detection and repair program has already found and repaired over 52,000 individual leaks on Uzbekistan’s
            gas distribution system avoiding emissions of almost 8 million tCO2e per year.
          </p>
        </div>
      </div>

      <div className="h-[100px]" />

      <ContactSection settings={settings} />
    </Layout>
  );
}
