import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/nrityagram/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/artists/surupa/:path*', destination: '/surupa', permanent: true },
      { source: '/artists/bijayini/:path*', destination: '/bijayini', permanent: true },
      { source: '/artists/pavithra/:path*', destination: '/pavithra', permanent: true },
      { source: '/artists/lynne/:path*', destination: '/lynne', permanent: true },
      { source: '/artists/protima/:path*', destination: '/protima', permanent: true },
      { source: '/artists/anoushka/:path*', destination: '/anoushka', permanent: true },
      { source: '/village/spaces/:path*', destination: '/space', permanent: true },
      { source: '/village/visit/:path*', destination: '/visit', permanent: true },
      { source: '/soul/gurukul/:path*', destination: '/gurukula', permanent: true },
      { source: '/soul/ensemble/:path*', destination: '/ensemble', permanent: true },
      { source: '/soul/history/:path*', destination: '/history', permanent: true },
      { source: '/wisdom/workshops/:path*', destination: '/danceunlimited', permanent: true },
      { source: '/passion/perform/:path*', destination: '/repertoire', permanent: true },
      { source: '/passion/outreach/:path*', destination: '/village-outreach', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/friends/:path*', destination: '/friendsofng', permanent: true },
      { source: '/odissi/', destination: '/about', permanent: true },
    ]
  },
}

export default nextConfig
