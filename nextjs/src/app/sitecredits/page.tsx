import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site Credits',
  description: 'Credits for the Nrityagram website.',
}

export default function SiteCreditsPage() {
  return (
    <div className="container">
      <div className="wrapper flow">
        <h1 className="center">Site Credits</h1>
        <p>
          This website was designed and developed with love for Nrityagram, a one-of-a-kind
          collective of artistes, where dance is a way of life.
        </p>

        <h2>Design & Development</h2>
        <p>
          <a href="mailto:amrita@nrityagram.org" className="bodylink">
            Amrita Chanda
          </a>
        </p>

        <h2>Photography</h2>
        <p>
          We are grateful to all the photographers who have contributed their beautiful images to
          our website. Credits are provided alongside each image.
        </p>

        <h2>Technology</h2>
        <ul className="basic">
          <li>Built with Next.js</li>
          <li>Content managed with Sanity CMS</li>
          <li>Images hosted on Cloudinary</li>
        </ul>

        <h2>Contact</h2>
        <p>
          For questions about this website, please contact{' '}
          <a href="mailto:amrita@nrityagram.org" className="bodylink">
            amrita@nrityagram.org
          </a>
        </p>
      </div>
    </div>
  )
}
