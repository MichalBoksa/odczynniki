import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Definiowanie __dirname dla modulów ECMAScript
const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_JWT_SECRET: process.env.JWT_SECRET,
  },
  // webpack5: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = { fs: false };
    config.optimization.minimize = false;
    return config;
  },
};

export default nextConfig;