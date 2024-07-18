import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Definiowanie __dirname dla modulów ECMAScript
const __dirname = dirname(fileURLToPath(import.meta.url));

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
// Zapisz routes-manifest.json do zmiennej srodowiskowej
const routesManifestPath = resolve(__dirname, '.next', 'routes-manifest.json');
if (fs.existsSync(routesManifestPath)) {
  const routesManifest = fs.readFileSync(routesManifestPath, 'utf-8');
  process.env.ROUTES_MANIFEST = routesManifest;
} else {
  console.warn('routes-manifest.json nie istnieje.');
}

    // Zapisz buildId do pliku
    const buildIdPath = resolve(__dirname, '.next', 'BUILD_ID');
    fs.writeFileSync(buildIdPath, buildId);

    // Ustaw buildId jako zmienna srodowiskowa
    process.env.BUILD_ID = buildId;


      
    return config;
  },
  i18n: {
    locales: ['pl', 'en', 'fr', 'ru', 'de'],
    defaultLocale: 'pl',
  },
  onDemandEntries: {
    // Make sure entries are not getting stuck
    maxInactiveAge: 15 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;