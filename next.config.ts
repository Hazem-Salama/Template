// next.config.ts - Corrected for Next.js 15
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove swcMinify - it's enabled by default in Next.js 15
  // Ensure proper asset handling
  assetPrefix: '',
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  }
};

export default nextConfig;