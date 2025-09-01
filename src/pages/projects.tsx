import { Geist } from "next/font/google";
import ContactSection from "@/component/ContactSection";
import Layout from "@/component/Layout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import { get } from "lodash";
import { db } from "@/server/app";
import { settings as settingsSchema } from "@/server/db/schema";
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

export default function Projects({
  settings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = useTranslations();

  return (
    <Layout className={geistSans.className}>
      <div className="mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          {t("Proektlarimiz")}
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-10 px-3">
        <div className="col-span-12 md:col-span-6 [&>iframe]:min-h-[350px] [&>iframe]:w-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/Yi7Rjs2RzJA?si=y2Kfqkoiwanh5Za2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold">{t(`project-1-title`)}</h3>
          <p className="text-xl leading-10">{t(`project-1-desc`)}</p>
        </div>
      </div>

      <div className="h-[100px]" />

      <div className="grid grid-cols-12 gap-10 px-3">
        <div className="col-span-12 md:col-span-6 [&>video]:min-h-[350px] [&>video]:max-h-[350px]  [&>video]:w-full rounded-lg overflow-hidden">
          <video controls src="/project-2.mp4" />
        </div>

        <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold">{t(`project-2-title`)}</h3>
          <p className="text-xl leading-10">{t(`project-2-desc`)}</p>
        </div>
      </div>

      <div className="h-[100px]" />

      <div className="grid grid-cols-12 gap-10 px-3">
        <div className="col-span-12 md:col-span-6 [&>video]:min-h-[350px] [&>video]:max-h-[350px]  [&>video]:w-full rounded-lg overflow-hidden">
          <video controls src="/project-3.mp4" />
        </div>

        <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold">{t(`project-3-title`)}</h3>
          <p className="text-xl leading-10">{t(`project-3-desc`)}</p>
        </div>
      </div>

      <div className="h-[100px]" />

      <ContactSection settings={settings} />
    </Layout>
  );
}
