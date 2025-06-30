/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Base path and asset prefix (update if deploying to subdirectory)
  // basePath: '/your-subdirectory', // Only if deploying to a subdirectory
  // assetPrefix: '/your-subdirectory/', // Only if deploying to a subdirectory
  
  // Trailing slash for better static hosting compatibility
  trailingSlash: true,
  
  // Disable server-side features that don't work with static export
  experimental: {
    // Disable any experimental features that might cause issues
  }
}

module.exports = nextConfig