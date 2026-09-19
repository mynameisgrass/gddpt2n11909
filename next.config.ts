import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "delishglobe.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.vinwonders.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hacoocha.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.huongnghiepaau.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bizweb.dktcdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.xanhsm.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "down-vn.img.susercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
