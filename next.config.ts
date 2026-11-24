import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Temporary photography. Swap for real ExcelFast imagery before launch.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
