/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensures next-mdx-remote uses the app’s React/jsx-runtime (avoids “older version of React” during prerender with Turbopack).
  transpilePackages: ['next-mdx-remote'],
  reactStrictMode: true,
  // LAN / phone dev testing: allows webpack-hmr from your machine’s network IP (update if DHCP changes).
  allowedDevOrigins: ['192.168.0.125'],
  async redirects() {
    // Newsletter issues are canonical; some legacy blog slugs redirect 1:1.
    // Permanent redirects in Next.js use 308 when `permanent: true`.
    return [
      {
        source: '/blog/digital-spring-cleaning-a-month-of-grit-and-growth',
        destination: '/newsletter/digital-spring-cleaning-a-month-of-grit-and-growth',
        permanent: true,
      },
      {
        source: '/blog/digital-spring-cleaning-deepening-our-grit-journey',
        destination: '/newsletter/digital-spring-cleaning-deepening-our-grit-journey',
        permanent: true,
      },
      {
        source: '/blog/digital-sustainability-that-wont-burn-you-out',
        destination: '/newsletter/digital-sustainability-that-wont-burn-you-out',
        permanent: true,
      },
      {
        source: '/blog/error-proofing-your-automation',
        destination: '/newsletter/error-proofing-your-automation',
        permanent: true,
      },
      {
        source: '/blog/lunar-new-year-2025',
        destination: '/newsletter/lunar-new-year-2025',
        permanent: true,
      },
      {
        source: '/blog/mindful-automation-systems',
        destination: '/newsletter/mindful-automation-systems',
        permanent: true,
      },
      {
        source: '/blog/monthly-grit-framework-for-your-digital-spring-cleaning',
        destination: '/newsletter/monthly-grit-framework-for-your-digital-spring-cleaning',
        permanent: true,
      },
      {
        source: '/blog/monthly-grit-reflection-worksheet',
        destination: '/newsletter/monthly-grit-reflection-worksheet',
        permanent: true,
      },
      // Explicit exception: keep blog canonical.
      // {
      //   source: '/blog/on-elon-musk-and-dates',
      //   destination: '/newsletter/on-elon-musk-and-dates',
      //   permanent: true,
      // },
      {
        source: '/blog/sawdust-and-sacred-stones',
        destination: '/newsletter/sawdust-and-sacred-stones',
        permanent: true,
      },
      {
        source: '/blog/tech-is-just-a-tool',
        destination: '/newsletter/tech-is-just-a-tool',
        permanent: true,
      },
      {
        source: '/blog/the-you-framework',
        destination: '/newsletter/the-you-framework',
        permanent: true,
      },
    ]
  },
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
}

module.exports = nextConfig