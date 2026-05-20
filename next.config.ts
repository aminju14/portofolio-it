import type { NextConfig } from "next";

const nextConfig: NextConfig & { allowedDevOrigins?: string[] } = {
  /* config options here */
  allowedDevOrigins: ['192.168.18.17'],
};

export default nextConfig;
