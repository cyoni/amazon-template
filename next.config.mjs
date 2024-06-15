/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
