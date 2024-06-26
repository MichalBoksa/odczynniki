import { resolve } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_JWT_SECRET: process.env.JWT_SECRET,
  },
  webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false };
//     return config;
//   },
// };
webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  config.resolve.fallback = { fs: false };
  config.plugins.push(new webpack.DefinePlugin({
    'process.env.BUILD_ID': JSON.stringify(buildId),
  }));
  return config;
},
onDemandEntries: {
  // Make sure entries are not getting stuck
  maxInactiveAge: 15 * 1000,
  pagesBufferLength: 2,
}
}
export default nextConfig;