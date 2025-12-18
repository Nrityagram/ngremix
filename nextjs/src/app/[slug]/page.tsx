import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPageBySlug } from '@/lib/sanity'
import { SanityPage } from '@/components'
import { siteMetadata } from '@/lib/metadata'

// Force dynamic rendering - don't try to pre-render at build time
export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const page = await getPageBySlug(slug)

    if (!page) {
      return {
        title: 'Page Not Found',
      }
    }

    return {
      title: page.title,
      description: siteMetadata.description,
    }
  } catch {
    return {
      title: 'Page Not Found',
    }
  }
}

export default async function DynamicPage({ params }: PageProps) {
  try {
    const { slug } = await params
    const page = await getPageBySlug(slug)

    if (!page) {
      notFound()
    }

    return <SanityPage page={page} />
  } catch {
    notFound()
  }
}
