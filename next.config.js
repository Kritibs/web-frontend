/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: ["seniorproject-mvp.herokuapp.com","10.28.164.119"]
  },
};

module.exports = nextConfig;


//production

  // remotePatterns: [
  //   {
  //     protocol: "https",
  //     hostname: "seniorproject-mvp.herokuapp.com",
  //   },
  // ],
