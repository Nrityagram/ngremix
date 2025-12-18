'use client'

interface ScrollToTopProps {
  show?: boolean
}

export function ScrollToTop({ show = false }: ScrollToTopProps) {
  if (!show) return null

  return (
    <div id="at-the-top">
      <img src="/img/arrow-up-circle.svg" alt="up arrow icon" className="pixel-size" />
    </div>
  )
}
