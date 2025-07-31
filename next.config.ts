import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/glTF-Assets',
  assetPrefix: '/glTF-Assets/',
  //trailingSlash: true,
};

export default nextConfig;
