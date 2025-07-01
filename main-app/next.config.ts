import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://multi-zone-blog-app.vercel.app/:path*',
        //destination: 'http://localhost:3001/:path*',
      },
      {
        source: '/admin/:path*',
        destination: 'https://multi-zone-admin-app.vercel.app/:path*',
        //destination: 'http://localhost:3002/:path*',
      }
    ];
  }
};

export default nextConfig;
