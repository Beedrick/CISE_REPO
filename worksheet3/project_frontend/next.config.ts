import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Ignore ESLint errors during build
  },
  // You can add other config options here
};

export default nextConfig;
