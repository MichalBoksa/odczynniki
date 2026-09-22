/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [{ source: '/sitemap', destination: '/sitemap.xml', permanent: true }];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

export default nextConfig;
