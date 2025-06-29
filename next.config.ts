// next.config.ts - Updated for Netlify deployment
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features for static export
  experimental: {
    // Remove any experimental server features
  },
  // Optimize build
  swcMinify: true,
  // Handle static export properly
  distDir: '.next',
  // Ensure proper asset handling
  assetPrefix: undefined,
  // TypeScript configuration
  typescript: {
    // Allow production builds to successfully complete even if there are type errors
    ignoreBuildErrors: false,
  },
  eslint: {
    // Allow production builds to successfully complete even if there are ESLint errors
    ignoreDuringBuilds: false,
  }
};

export default nextConfig;