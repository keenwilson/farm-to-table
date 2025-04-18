/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  generateBuildId: async () => 'build',
  images: {
    unoptimized: true,
    domains: ['main.d3iu0xoznse3pk.amplifyapp.com'], // Add your Amplify domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['sharp'],
    outputFileTracingIncludes: {
      '/**': ['./public/**/*']
    }
  }
}

module.exports = nextConfig