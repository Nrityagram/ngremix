'use client'

import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="hovertext" data-hovertext="+91 80 28466312 / 3 / 4">
        <a href="tel:+918028466312">
          <img src="/img/phone-white2.svg" className="icon sml mob" alt="Phone Icon" />
          <img src="/img/phone-grey.svg" className="icon sml desk" alt="Phone Icon" />
        </a>
      </div>
      <div className="hovertext" data-hovertext="info@nrityagram.org">
        <a href="mailto:info@nrityagram.org">
          <img src="/img/email-white.svg" className="icon sml mob" alt="Email Icon" />
          <img src="/img/email-grey.svg" className="icon sml desk" alt="Email Icon" />
        </a>
      </div>
      <div className="hovertext" data-hovertext="Subscribe to our Newsletter">
        <Link href="/subscribe">
          <img src="/img/newsletter-white.svg" className="icon med mob" alt="Newsletter Icon" />
          <img src="/img/newsletter-grey.svg" className="icon desk" alt="Newsletter Icon" />
        </Link>
      </div>
      <a href="https://www.facebook.com/nrityagram" target="_blank" rel="noopener noreferrer">
        <img src="/img/fb-white.svg" className="icon sml mob" alt="Facebook Icon" />
        <img src="/img/fb-grey.svg" className="icon sml desk" alt="Facebook Icon" />
      </a>
      <a href="https://www.instagram.com/nrityagram/" target="_blank" rel="noopener noreferrer">
        <img src="/img/insta-white.svg" className="icon sml mob" alt="Instagram Icon" />
        <img src="/img/insta-grey.svg" className="icon sml desk" alt="Instagram Icon" />
      </a>
      <a href="https://www.youtube.com/@Nrityagram" target="_blank" rel="noopener noreferrer">
        <img src="/img/youtube-white.svg" className="icon sml mob" alt="Youtube Icon" />
        <img src="/img/youtube-grey.svg" className="icon sml desk" alt="Youtube Icon" />
      </a>
    </aside>
  )
}
