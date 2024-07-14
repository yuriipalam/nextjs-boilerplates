/** @type {import("next").NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: false, // it's true by default, but it renders the page twice
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;
