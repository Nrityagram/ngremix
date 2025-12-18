'use client'

import Image from 'next/image'

interface BannerImage {
  desk: string
  tab?: string
  mob?: string
}

interface BannerProps {
  images: BannerImage
  title: string
  alt: string
  credit?: string
  creditTab?: string
  creditMob?: string
}

export function Banner({ images, title, alt, credit, creditTab, creditMob }: BannerProps) {
  return (
    <div id="banner-container">
      <div className="banner-image">
        <picture>
          {images.mob && (
            <source media="(max-width: 425px)" srcSet={images.mob} />
          )}
          {images.tab && (
            <source media="(max-width: 768px)" srcSet={images.tab} />
          )}
          <Image
            src={images.desk}
            alt={alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </picture>
      </div>
      {credit && (
        <div
          className="banner-image-credit"
          data-image-credit-desk={credit}
          data-image-credit-tab={creditTab || credit}
          data-image-credit-mob={creditMob || credit}
        />
      )}
      <div className="banner-title">{title}</div>
    </div>
  )
}
