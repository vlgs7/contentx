/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 300,
    domains: [
      'www.notion.so',
      'notion.so',
      'imgur.com',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig
