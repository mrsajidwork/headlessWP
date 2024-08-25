/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WORDPRESS_HOSTNAME,
        port: "",
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    includePaths: [ path.join( path.resolve(), 'styles' ) ],
  },
};

export default nextConfig;
