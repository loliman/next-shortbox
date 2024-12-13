import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [{
          protocol: 'https',
          hostname: 'www.comicguide.de',
          port: '',
          pathname: '/pics/large/**',
      }]
  }
};

export default nextConfig;
