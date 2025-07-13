import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    locales: ["en", "km"],
    defaultLocale: "en",
  },
};

export default nextConfig;
