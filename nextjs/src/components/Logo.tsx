'use client'

import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 263"
        className="logo-svg"
        aria-label="Nrityagram Logo"
      >
        <g fill="currentColor">
          <path d="M0 262.5V0h36.7l89.5 175.5V0h33.3v262.5h-36.7L33.3 87v175.5H0z" />
          <path d="M187.5 262.5V0h73.3c26.7 0 45.8 5.4 57.5 16.2 11.7 10.8 17.5 27.9 17.5 51.3 0 17.5-3.8 31.7-11.2 42.5-7.5 10.8-18.7 17.9-33.7 21.2l52.5 131.3h-37.5l-48.7-125h-35v125h-34.7zm34.7-156.2h35c13.3 0 23.3-3.3 30-10s10-16.7 10-30c0-13.3-3.3-23.3-10-30s-16.7-10-30-10h-35v80z" />
          <path d="M362.5 262.5V0h34.7v262.5h-34.7z" />
          <path d="M450 31.2V0h137.5v31.2h-51.2v231.3h-35V31.2H450z" />
          <path d="M600 262.5V137.5L537.5 0h37.5l43.7 100L662.5 0H700l-62.5 137.5v125H600z" />
          <path d="M712.5 262.5l62.5-262.5h50l62.5 262.5h-35l-15-62.5h-75l-15 62.5h-35zm62.5-93.8h56.2l-28.7-118.7-27.5 118.7z" />
          <path d="M925 262.5v-131.3h-50V100h50V68.8C925 22.9 945 0 985 0h35v31.2h-30c-16.7 0-25 8.3-25 25v43.8h55V131h-55v131.5h-40z" />
        </g>
      </svg>
    </Link>
  )
}
