import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
 images: {
    unoptimized: true, // disable image optimization for static export
  }, 
};

export default nextConfig;
