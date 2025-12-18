import { MetadataRoute } from 'next'
import { getPages } from '@/lib/sanity'
import type { SanityPage } from '@/types'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nrityagram.org'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/visit',
    '/donate',
    '/subscribe',
    '/privacy',
    '/termsconditions',
    '/sitecredits',
  ]

  const staticSitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic pages from Sanity
  try {
    const sanityPages = await getPages()
    const dynamicSitemap = sanityPages
      .filter((page: SanityPage) => page.slug)
      .map((page: SanityPage) => ({
        url: `${baseUrl}/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))

    return [...staticSitemap, ...dynamicSitemap]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return staticSitemap
  }
}
