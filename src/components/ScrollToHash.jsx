import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to hash anchors when navigating between routes. */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [pathname, hash])

  return null
}
