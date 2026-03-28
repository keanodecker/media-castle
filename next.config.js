/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'horizons-cdn.hostinger.com',
      },
    ],
  },
};

module.exports = nextConfig;
