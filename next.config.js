/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:['static.nike.com'],
    unoptimized: true,
  }
}

module.exports = nextConfig
