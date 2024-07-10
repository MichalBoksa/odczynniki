import { resolve } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  experimental: {
    appDir: true,

      workerThreads: false,
      cpus: 1,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_JWT_SECRET: process.env.JWT_SECRET,
  },
  webpack5: true,

webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  config.resolve.fallback = { fs: false };
  config.optimization.minimize = false;
  return config;
},
i18n: {
  locales:['pl','en','fr','ru','de'],
  defaultLocale: 'pl',
},
onDemandEntries: {
  // Make sure entries are not getting stuck
  maxInactiveAge: 15 * 1000,
  pagesBufferLength: 2,
}
}
export default nextConfig;