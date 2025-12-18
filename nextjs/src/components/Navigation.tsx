'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationItems, navigationItemsSecondRow } from '@/lib/navigation'
import type { NavigationItem, NavigationSubItem } from '@/types'

interface NavItemProps {
  item: NavigationItem
  pathname: string
  isMobile?: boolean
}

function NavSubItem({ item, pathname }: { item: NavigationSubItem; pathname: string }) {
  const isActive = pathname === item.href || pathname.startsWith(item.href.split('#')[0])

  return (
    <li data-dropdown-lvl2={item.children ? true : undefined}>
      {item.children ? (
        <div className="nav-item-lvl2" data-dropdown-link>
          <div className="nav-item-name-lvl2">
            <Link href={item.href} className={isActive ? 'sublist-item-active' : ''}>
              {item.name}
            </Link>
          </div>
          <ul className="nav-sublist-lvl2">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link href={child.href}>{child.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link href={item.href} className={isActive ? 'sublist-item-active' : ''}>
          {item.name}
        </Link>
      )}
    </li>
  )
}

function NavItem({ item, pathname, isMobile }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isActive = item.href !== '#' && (pathname === item.href || pathname.startsWith(item.href.split('#')[0]))
  const hasActiveChild = item.children?.some(
    (child) => pathname === child.href || pathname.startsWith(child.href.split('#')[0])
  )

  if (!item.children) {
    return (
      <li className={item.name === 'Newsletter' ? 'desk-only' : ''}>
        <div className="nav-item">
          <span className={`nav-item-name ${isActive ? 'active' : ''}`}>
            <Link href={item.href}>{item.name}</Link>
          </span>
        </div>
      </li>
    )
  }

  const checkboxId = `item-${item.name.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <li data-dropdown>
      <div className="nav-item" data-dropdown-link>
        <label
          className={`nav-item-name item-chevron ${hasActiveChild ? 'active' : ''} ${item.name === 'Support' ? 'large-font' : ''}`}
          htmlFor={checkboxId}
        >
          {item.name}
        </label>
        <input
          type="checkbox"
          id={checkboxId}
          name={checkboxId}
          className="m-menu-checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <ul className="nav-sublist">
          {item.children.map((child) => (
            <NavSubItem key={child.href} item={child} pathname={pathname} />
          ))}
        </ul>
      </div>
    </li>
  )
}

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="nav-deck">
      <ul className="nav-list">
        {navigationItems.map((item) => (
          <NavItem key={item.name} item={item} pathname={pathname} />
        ))}
      </ul>
      <ul className="nav-list">
        {navigationItemsSecondRow.map((item) => (
          <NavItem key={item.name} item={item} pathname={pathname} />
        ))}
      </ul>
      <div className="sticky-bottom-nav">
        <div className="outline-button">
          <Link href="/subscribe" className="redtext no-decoration">
            Subscribe to our Newsletter
          </Link>
        </div>
        <div className="sm-icon-row">
          <a href="tel:+918028466312">
            <img src="/img/phone-red.svg" className="icon mob-ht" alt="Phone Icon" />
          </a>
          <a href="mailto:info@nrityagram.org">
            <img src="/img/email-red.svg" className="icon mob-ht" alt="Email Icon" />
          </a>
          <a href="https://www.facebook.com/nrityagram" target="_blank" rel="noopener noreferrer">
            <img src="/img/fb-red.svg" className="icon mob-ht" alt="Facebook Icon" />
          </a>
          <a href="https://www.instagram.com/nrityagram/" target="_blank" rel="noopener noreferrer">
            <img src="/img/insta-red.svg" className="icon mob-ht" alt="Instagram Icon" />
          </a>
          <a href="https://www.youtube.com/@Nrityagram" target="_blank" rel="noopener noreferrer">
            <img src="/img/youtube-red.svg" className="icon mob-ht" alt="Youtube Icon" />
          </a>
        </div>
      </div>
    </div>
  )
}
