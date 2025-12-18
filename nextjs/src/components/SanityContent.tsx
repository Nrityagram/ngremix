'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { SanityContentBlock, SanityBlockContent, SanityBlockChild, SanityMarkDef } from '@/types'

interface SanityContentProps {
  contentBlocks: SanityContentBlock[]
}

function getBgClass(bgcolour?: string): string {
  switch (bgcolour) {
    case 'Brick Red':
      return 'primary-bg'
    case 'NG Red':
      return 'secondary-bg'
    case 'Salmon Pink':
      return 'accent-bg'
    default:
      return ''
  }
}

function renderText(child: SanityBlockChild, markDefs?: SanityMarkDef[]): React.ReactNode {
  if (!child.text) return null

  let content: React.ReactNode = child.text

  if (child.marks && child.marks.length > 0) {
    child.marks.forEach((mark) => {
      if (mark === 'strong') {
        content = <strong key={child._key}>{content}</strong>
      } else if (mark === 'em') {
        content = <em key={child._key}>{content}</em>
      } else if (mark === 'underline') {
        content = <u key={child._key}>{content}</u>
      } else {
        // Check if mark is a link reference
        const markDef = markDefs?.find((m) => m._key === mark)
        if (markDef) {
          if (markDef._type === 'link' && markDef.href) {
            content = (
              <a key={child._key} href={markDef.href} className="bodylink" target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            )
          } else if (markDef._type === 'intlink' && markDef.slug?.current) {
            content = (
              <Link key={child._key} href={`/${markDef.slug.current}`} className="bodylink">
                {content}
              </Link>
            )
          }
        }
      }
    })
  }

  return content
}

function renderBlock(block: SanityBlockContent): React.ReactNode {
  if (block._type === 'block') {
    const children = block.children?.map((child) => renderText(child, block.markDefs))

    switch (block.style) {
      case 'h1':
        return <h1 key={block._key}>{children}</h1>
      case 'h2':
        return <h2 key={block._key}>{children}</h2>
      case 'h3':
        return <h3 key={block._key}>{children}</h3>
      case 'h4':
        return <h4 key={block._key}>{children}</h4>
      case 'blockquote':
        return <blockquote key={block._key}>{children}</blockquote>
      default:
        if (block.listItem === 'bullet') {
          return <li key={block._key}>{children}</li>
        } else if (block.listItem === 'number') {
          return <li key={block._key}>{children}</li>
        }
        return <p key={block._key}>{children}</p>
    }
  }

  if (block._type === 'image') {
    return (
      <div key={block._key} className="image-plus">
        <Image
          src={`https://cdn.sanity.io/images/a81875ul/production/${block._key}`}
          alt=""
          width={800}
          height={600}
          style={{ objectFit: 'cover' }}
        />
      </div>
    )
  }

  if (block._type === 'pictureCards' && block.cards) {
    return (
      <div key={block._key} className="even-columns">
        {block.cards.map((card, idx) => (
          <div key={idx} className={idx % 2 === 0 ? 'left-column' : 'right-column'}>
            <div className="image-plus card">
              <div className="card-title">{card.cardTitle}</div>
              {card.cardSubtitle && <div className="card-subtitle">{card.cardSubtitle}</div>}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (block._type === 'redButton') {
    const href = block.slug?.current ? `/${block.slug.current}` : '#'
    return (
      <div key={block._key} className="red-button-wrapper">
        <Link href={href} className="red-button">
          Click Here
        </Link>
      </div>
    )
  }

  return null
}

export function SanityContent({ contentBlocks }: SanityContentProps) {
  return (
    <>
      {contentBlocks.map((block, index) => {
        const bgClass = getBgClass(block.bgColour)
        const anchorId = block.anchorId

        return (
          <div key={index} id={anchorId || undefined} className={`container ${bgClass}`}>
            <div className="wrapper flow">
              {block.content?.map((content) => renderBlock(content))}
            </div>
          </div>
        )
      })}
    </>
  )
}
