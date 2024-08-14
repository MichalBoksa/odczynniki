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
};

export default nextConfig;