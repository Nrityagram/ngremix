'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ImageCardProps {
  href: string
  src: string
  alt: string
  title: string
  credit?: string
  sizes?: string
}

export function ImageCard({ href, src, alt, title, credit, sizes = '(max-width: 768px) 100vw, 50vw' }: ImageCardProps) {
  return (
    <Link href={href} className="image-plus card">
      <div className="card-image-wrapper">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{ objectFit: 'cover' }}
        />
      </div>
      {credit && <div className="credit" data-image-credit={credit} />}
      <div className="card-title">{title}</div>
    </Link>
  )
}
