/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.28.164.119",
      },
    ],
  },
};

module.exports = nextConfig;
