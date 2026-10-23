import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/monito",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
