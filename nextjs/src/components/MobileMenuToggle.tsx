'use client'

import { useState, useEffect } from 'react'

export function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const navDeck = document.querySelector('.nav-deck')
    if (navDeck) {
      if (isOpen) {
        navDeck.classList.add('nav-deck-open')
      } else {
        navDeck.classList.remove('nav-deck-open')
      }
    }
  }, [isOpen])

  return (
    <div className="mobileToggleIcons">
      <img
        src="/img/close-icon.svg"
        className={`icon closeMobileBtn hot-spot ${isOpen ? '' : 'hide'}`}
        alt="Close Icon"
        onClick={() => setIsOpen(false)}
      />
      <img
        src="/img/hamburger-menu-icon.svg"
        className={`icon mobileToggle hot-spot ${isOpen ? 'hide' : ''}`}
        alt="Mobile Menu Toggle Icon"
        onClick={() => setIsOpen(true)}
      />
    </div>
  )
}
