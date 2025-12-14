import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Netlify
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slashes for better compatibility
  trailingSlash: true,
  
  // Asset prefix for CDN (optional)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-cdn-url' : '',
  
  // Optimize for static hosting
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
