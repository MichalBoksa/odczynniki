/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_JWT_SECRET: process.env.JWT_SECRET,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/news/:slug',
        destination: 'http://localhost:3002/api/news/:slug', // Proxy to Backend
      },
      {
        source: '/api/newsEng/:slug',
        destination: 'http://localhost:3002/api/newsEng/:slug', // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
