'use client'

import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { MobileMenuToggle } from './MobileMenuToggle'

interface HeaderProps {
  noBanner?: boolean
}

export function Header({ noBanner = false }: HeaderProps) {
  return (
    <header className={`primary-header ${noBanner ? 'solidbg' : ''}`}>
      <div className="wrapper headwrap">
        <div className="primary-header__inner">
          <span className="logo">
            <Logo />
          </span>
          <Navigation />
          <MobileMenuToggle />
        </div>
      </div>
    </header>
  )
}
