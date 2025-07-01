import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/blog/:path*',
  //       destination: 'https://multi-zone-blog-app.vercel.app/blog/:path*',
  //       //destination: 'http://localhost:3001/blog/:path*', // Local development URL for the blog zone  
  //     },
  //   ];
  // },
};

export default nextConfig;
