/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.beehiiv.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
};

module.exports = nextConfig; 