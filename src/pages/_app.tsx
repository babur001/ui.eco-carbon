import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider locale={router.locale} timeZone="Asia/Tashkent" messages={pageProps.messages}>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </NextIntlClientProvider>
  );
}
