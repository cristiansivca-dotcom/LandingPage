import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'world.openfoodfacts.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'seeklogo.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logovector.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'freepnglogo.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dibeal.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.biernet.nl',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'empresaspolar.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
