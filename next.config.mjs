/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.it',
        port: '',
        pathname: '/**',
      }
    ],
  
    
  },
  
};

export default nextConfig;
