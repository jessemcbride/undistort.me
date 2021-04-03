const withPWA = require("next-pwa");

const nextConfig = {
  publicRuntimeConfig: {
    siteMetaData: {
      name: "undistort.me",
      url:
        process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
      title: "undistort.me",
      description: "The cognitive behavioral therapy toolkit",
      twitterHandle: "undistortme",
      socialPreview: "/images/preview.png",
    },
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
};

module.exports = withPWA(nextConfig);
