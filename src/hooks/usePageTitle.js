import { useEffect } from 'react'
import { profile, site } from '../data/portfolio'

/** Sets document title for a page and resets on unmount. */
export function usePageTitle(pageTitle) {
  useEffect(() => {
    document.title = `${pageTitle} — ${profile.name}`
    return () => {
      document.title = site.title
    }
  }, [pageTitle])
}
