/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "uk-UA",
    locales: ["uk-UA", "ru"],
    localeDetection: false,
  },

  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Origin, X-Requested-With, Content-Type, Accept",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,PUT,POST,DELETE",
          },
        ],
      },
    ];
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
      // {
      //   protocol: "https",
      //   hostname: "cdn4.cdn-telegram.org",
      // },
    ],
  },
};

module.exports = nextConfig;
