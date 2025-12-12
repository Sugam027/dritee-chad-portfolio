import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dristee-chad-portfolio", 
  assetPrefix: "/dristee-chad-portfolio/",
  images: {
    unoptimized: true,       
  },
};

export default nextConfig;
