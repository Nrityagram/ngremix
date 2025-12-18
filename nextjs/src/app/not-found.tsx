import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <div className="container">
      <div className="wrapper flow">
        <h2 className="center">Sorry, the page you requested was not found.</h2>
        <div className="image-plus shrink-desk">
          <Image
            src="https://res.cloudinary.com/nrityagram/image/upload/v1646930299/DSC00461_Edited-ensemble_c8nbl0.jpg"
            alt="Page not found"
            width={1046}
            height={700}
            sizes="(max-width: 560px) 560px, (max-width: 768px) 768px, 1046px"
          />
        </div>
        <p className="center">
          Explore our beautiful website using the menu above or head back to{' '}
          <Link href="/" className="bodylink">
            home page
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
