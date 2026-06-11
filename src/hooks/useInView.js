import { useEffect, useRef, useState } from 'react'

/** Observes element visibility for scroll-triggered animations. */
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView]
}
