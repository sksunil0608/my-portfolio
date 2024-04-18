/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
}


export default nextConfig;
