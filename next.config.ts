import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru", "uz"],
    defaultLocale: "uz",
  },
};

export default nextConfig;
