'use client'

import { Banner } from './Banner'
import { SanityContent } from './SanityContent'
import { urlFor } from '@/lib/sanity'
import type { SanityPage as SanityPageType } from '@/types'

interface SanityPageProps {
  page: SanityPageType
}

export function SanityPage({ page }: SanityPageProps) {
  // Process masthead images
  let mastheadImages = null
  if (page.mastheadImageDesk) {
    const deskImage = urlFor(page.mastheadImageDesk).width(1600).height(876).url()

    let tabImage = deskImage
    let mobImage = deskImage

    if (page.mastheadImageSources && page.mastheadImagesScreenTypes) {
      const screenTypes = page.mastheadImagesScreenTypes
      const sources = page.mastheadImageSources

      const tabIndex = screenTypes.indexOf('tablet')
      const mobIndex = screenTypes.indexOf('mobile')

      if (tabIndex >= 0 && sources[tabIndex]) {
        tabImage = urlFor(sources[tabIndex]).width(768).height(1024).url()
      }
      if (mobIndex >= 0 && sources[mobIndex]) {
        mobImage = urlFor(sources[mobIndex]).width(425).height(768).url()
      }

      // Fallback: if no tablet, use mobile; if no mobile, use tablet
      if (tabIndex < 0 && mobIndex >= 0) {
        tabImage = mobImage
      }
      if (mobIndex < 0 && tabIndex >= 0) {
        mobImage = tabImage
      }
    }

    mastheadImages = {
      desk: deskImage,
      tab: tabImage,
      mob: mobImage,
    }
  }

  // Process credits
  let credits = {
    desk: page.mastheadImageDeskCredit || '',
    tab: page.mastheadImageDeskCredit || '',
    mob: page.mastheadImageDeskCredit || '',
  }

  if (page.mastheadImagesCredit && page.mastheadImagesScreenTypes) {
    const screenTypes = page.mastheadImagesScreenTypes
    const creditArray = page.mastheadImagesCredit

    const tabIndex = screenTypes.indexOf('tablet')
    const mobIndex = screenTypes.indexOf('mobile')

    if (tabIndex >= 0) {
      credits.tab = creditArray[tabIndex] || credits.tab
    }
    if (mobIndex >= 0) {
      credits.mob = creditArray[mobIndex] || credits.mob
    }
  }

  return (
    <>
      {mastheadImages && (
        <Banner
          images={mastheadImages}
          title={page.title}
          alt={page.mastheadImageDeskAlt || page.title}
          credit={credits.desk}
          creditTab={credits.tab}
          creditMob={credits.mob}
        />
      )}
      {page.contentBlocks && <SanityContent contentBlocks={page.contentBlocks} />}
    </>
  )
}
