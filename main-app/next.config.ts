import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://multi-zone-blog-app.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
