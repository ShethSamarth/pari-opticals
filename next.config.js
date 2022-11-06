/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.sanity.io",
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "avatars.githubusercontent.com",
    ],
  },
}

module.exports = nextConfig
