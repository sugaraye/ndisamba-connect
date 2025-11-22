// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Exclure complètement le webhook du build
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

module.exports = nextConfig