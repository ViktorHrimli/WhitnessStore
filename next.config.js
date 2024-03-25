/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "uk-UA",
    locales: ["uk-UA", "ru"],
    localeDetection: false,
  },

  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "whitness-store.online",
      },
      {
        protocol: "https",
        hostname: "cdn4.cdn-telegram.org",
      },
    ],
  },
};

module.exports = nextConfig;
