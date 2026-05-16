import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    'preview-chat-f2c02272-69d1-431e-9747-3ce20b94e13e.space.z.ai',
    '.space.z.ai',
    'localhost',
  ],
};

export default nextConfig;
