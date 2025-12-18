import { Metadata } from 'next'
import { siteMetadata } from '@/lib/metadata'

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

export default function HomePage() {
  return (
    <div className="banner-container" id="banner-container">
      <div className="vanilla-slideshow">
        <div className="vanilla-slide">
          <picture>
            <source
              media="(max-width: 425px)"
              srcSet="https://res.cloudinary.com/nrityagram/image/upload/w_425,h_768/v1700000000/banner-mobile.jpg"
            />
            <source
              media="(max-width: 768px)"
              srcSet="https://res.cloudinary.com/nrityagram/image/upload/w_768,h_1024/v1700000000/banner-tablet.jpg"
            />
            <img
              src="https://res.cloudinary.com/nrityagram/image/upload/w_1600,h_876/v1700000000/banner-desk.jpg"
              alt="Nrityagram Dancers"
              className="banner-image"
            />
          </picture>
        </div>
      </div>
      <div className="banner-content">
        <div className="banner-tagline">
          <h1>Nrityagram</h1>
          <p>A one-of-a-kind collective of artistes, where dance is a way of life</p>
        </div>
      </div>
    </div>
  )
}
