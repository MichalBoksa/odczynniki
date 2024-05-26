/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_JWT_SECRET: process.env.JWT_SECRET,
      },
      
};

export default nextConfig;
