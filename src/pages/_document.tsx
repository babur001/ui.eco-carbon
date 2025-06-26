import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ecocarbonservices.uz/" />
        <meta property="og:title" content='"Eсo Сarbon Services" MCHJ | ecocarbonservice' />
        <meta
          property="og:description"
          content='"Eсo Сarbon Services" MCHJ O‘zbekiston gaz infratuzilmasida ekologik xavfsizlikni ta’minlash va iqlim o‘zgarishiga qarshi kurashish bo‘yicha yetakchi kompaniyalardan biridir. Biz xalqaro hamkorlik va ilg‘or texnologiyalar yordamida gaz sizib chiqishini aniqlash, tuzatish va emissiyalarni kamaytirish bo‘yicha samarali echimlar taklif qilamiz.'
        />
        <meta property="og:image" content="https://ecocarbonservices.uz/eco-bg.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.ecocarbonservices.uz/" />
        <meta property="twitter:title" content='"Eсo Сarbon Services" MCHJ | ecocarbonservice' />
        <meta
          property="twitter:description"
          content='"Eсo Сarbon Services" MCHJ O‘zbekiston gaz infratuzilmasida ekologik xavfsizlikni ta’minlash va iqlim o‘zgarishiga qarshi kurashish bo‘yicha yetakchi kompaniyalardan biridir. Biz xalqaro hamkorlik va ilg‘or texnologiyalar yordamida gaz sizib chiqishini aniqlash, tuzatish va emissiyalarni kamaytirish bo‘yicha samarali echimlar taklif qilamiz.'
        />
        <meta property="twitter:image" content="https://ecocarbonservices.uz/eco-bg.png" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
