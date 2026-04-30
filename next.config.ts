import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      { source: "/lee-hill-labs-index", destination: "/presentation/index.html" },
      { source: "/lee-hill-labs-slides", destination: "/presentation/slides.html" },
    ];
  },
};

export default nextConfig;
