import { createPortal } from 'react-dom'
import './NavBackdrop.css'

/** Frosted glass layer portaled to body — reliable backdrop-filter on hosted Safari. */
export default function NavBackdrop({ visible }) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <div
      className={`nav-backdrop ${visible ? 'nav-backdrop--visible' : ''}`}
      aria-hidden="true"
    />,
    document.body,
  )
}
