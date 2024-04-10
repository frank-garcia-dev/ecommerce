// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'fakeapidata.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
}
module.exports = nextConfig