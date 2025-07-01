import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://blog-app.vercel.app/:path*',
      },
      {
        source: '/admin/:path*',
        destination: 'https://admin-app.vercel.app/:path*',
      }
    ];
  }
};

export default nextConfig;
