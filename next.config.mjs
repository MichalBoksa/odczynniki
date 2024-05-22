/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_JWT_SECRET: process.env.JWT_SECRET,
      },
      
};

export default nextConfig;
