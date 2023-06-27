/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // reactStrictMode: true,
    domains: ["source.unsplash.com", "127.0.0.1", "plus.unsplash.com", "images.unsplash.com", process.env.API_URL],
  },
  env: {
    API_URL: process.env.API_URL,
    WEB_URL: process.env.WEB_URL,
  },
}

module.exports = nextConfig