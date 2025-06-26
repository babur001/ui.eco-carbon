import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/styles/globals.css";
import "@/styles/rich-text-editor.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>"Eсo Сarbon Services" MCHJ | ecocarbonservice</title>
        <meta name="title" content='"Eсo Сarbon Services" MCHJ | ecocarbonservice' />
        <meta
          name="description"
          content='"Eсo Сarbon Services" MCHJ O‘zbekiston gaz infratuzilmasida ekologik xavfsizlikni ta’minlash va iqlim o‘zgarishiga qarshi kurashish bo‘yicha yetakchi kompaniyalardan biridir. Biz xalqaro hamkorlik va ilg‘or texnologiyalar yordamida gaz sizib chiqishini aniqlash, tuzatish va emissiyalarni kamaytirish bo‘yicha samarali echimlar taklif qilamiz.'
        />
      </Head>
      <TooltipProvider>
        <NextIntlClientProvider locale={router.locale} timeZone="Asia/Tashkent" messages={pageProps.messages}>
          <Component {...pageProps} />
          <Toaster position="top-center" />
        </NextIntlClientProvider>
      </TooltipProvider>
    </>
  );
}
