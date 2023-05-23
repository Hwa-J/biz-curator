/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-ebnatural.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  async rewrites() {
    return [
      {
        source: '/:reqType*.html', // Old url with .html
        destination: '/:reqType*', // Redirect without .html
      },
      // {
      //   source: '/:details*.html', // Old url with .html
      //   destination: '/:details*', // Redirect without .html
      // },
    ];
  },
};

module.exports = nextConfig;
