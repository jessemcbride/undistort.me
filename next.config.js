module.exports = {
  publicRuntimeConfig: {
    siteMetaData: {
      name: "undistort.me",
      url: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
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
};
