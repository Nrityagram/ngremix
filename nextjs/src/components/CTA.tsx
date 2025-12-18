'use client'

import Link from 'next/link'
import Image from 'next/image'

interface CTAProps {
  show?: boolean
}

export function CTADesk({ show = true }: CTAProps) {
  if (!show) return null

  return (
    <Link href="/virtual-steps" className="cta-desk">
      <Image
        src="https://res.cloudinary.com/nrityagram/image/upload/v1748004445/virtual-steps-cta_yp7fcg.png"
        alt="Virtual Steps CTA picture"
        width={200}
        height={200}
      />
      <div className="cta-textbox">
        <div className="cta-line-lrg">Virtual Steps</div>
        <div className="cta-line-sml">New Batch Starts on 5 July 2025</div>
        <div className="cta-line-sml">Registration Closed</div>
      </div>
    </Link>
  )
}

export function CTAMobile({ show = true }: CTAProps) {
  if (!show) return null

  return (
    <Link href="/virtual-steps" className="cta-mobile">
      <div className="cta-line-lrg">
        <span className="whitetext">Virtual Steps</span>
      </div>
      <div className="cta-line-sml">New Batch starts on 5 July 2025 • Registration Closed</div>
      <div className="cta-arrow">
        <img src="/img/cta-arrow-circle-right.svg" alt="" />
      </div>
    </Link>
  )
}
