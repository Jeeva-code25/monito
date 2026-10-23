import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"]
  },
  output: "export",
};

export default nextConfig;
