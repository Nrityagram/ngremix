'use client'

import Link from 'next/link'

interface FooterProps {
  showScrollToTop?: boolean
}

export function Footer({ showScrollToTop = false }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="tagline">
        Nrityagram is a one-of-a-kind collective of artistes, where dance is a way of life
      </div>
      <div className="rowstack wide">
        <div className="columnstack bottom-border">
          <span>
            <a href="mailto:info@nrityagram.org">
              <img src="/img/email-white.svg" className="icon sml-vsml" alt="email icon" />
              info@nrityagram.org
            </a>
          </span>
          <span>
            <a href="tel:+918028466312">
              <img src="/img/phone-white.svg" className="icon sml-vsml" alt="phone icon" />
              +91 80 28466312 / 3 / 4
            </a>
          </span>
        </div>
        <Link href="/subscribe">
          <img src="/img/newsletter-white.svg" className="icon sml" alt="newsletter icon" />
          <b>SUBSCRIBE</b> to our Newsletter
        </Link>
      </div>
      <div className="rowstack">
        <div>Nrityagram, Hessaraghatta Post, Kodihalli Village, Bangalore 560088 India</div>
        <div>
          <b>
            <Link href="/visit" className="bodylink">
              VISIT
            </Link>
          </b>
          : 10am - 2pm | Friday, Saturday and Sunday
        </div>
        <div>
          <b>CLOSED</b>: Mondays, National, State and other School Holidays | Call to Confirm
        </div>
      </div>
      <div className="rowstack close">
        <div>
          <Link href="/privacy">Privacy Policy</Link> |{' '}
          <Link href="/termsconditions">Terms & Conditions</Link> |{' '}
          <Link href="/sitecredits">Site Credits</Link>
        </div>
        <div>© {currentYear} Nrityagram | All Rights Reserved</div>
      </div>
      <div className="rowstack smalltext">
        Nrityagram is a Project of Odissi Dance Centre, a Public Charitable Trust | Registration #
        E 7242 MUMBAI dated 23/07/1979
      </div>
      {showScrollToTop && (
        <div id="go-to-top" onClick={handleScrollToTop}>
          <img src="/img/arrow-up-circle.svg" alt="up arrow icon" />
        </div>
      )}
    </footer>
  )
}
