/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['main.d3iu0xoznse3pk.amplifyapp.com'],
  }
}

module.exports = nextConfig