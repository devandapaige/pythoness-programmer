/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensures next-mdx-remote uses the app’s React/jsx-runtime (avoids “older version of React” during prerender with Turbopack).
  transpilePackages: ['next-mdx-remote'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.beehiiv.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
};

module.exports = nextConfig; 