/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lp2.hm.com'
      },
      {
        protocol: 'http',
        hostname: 'lp2.hm.com'
      },
      {
        protocol: 'https',
        hostname: 'image.hm.com'
      },
      {
        protocol: 'http',
        hostname: 'image.hm.com'
      }
    ]
  }
}

module.exports = nextConfig
