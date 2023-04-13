/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.github.com',
        pathname: '/*.png',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
