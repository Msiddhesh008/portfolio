import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { navLinks } from '../data/portfolio'
import './MobileMenu.css'

/** Mobile menu portaled to body — reliable backdrop-filter on iOS. */
export default function MobileMenu({ open, onClose, isDark, onToggleTheme }) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <div className={`nav-mobile ${open ? 'nav-mobile--open' : ''}`} aria-hidden={!open}>
      <div className="nav-mobile__blur" onClick={onClose} aria-hidden="true" />

      <nav className="nav-mobile__panel" aria-label="Mobile navigation">
        <ul className="nav-mobile__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href} onClick={onClose} tabIndex={open ? 0 : -1}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="nav-mobile__theme"
              onClick={onToggleTheme}
              tabIndex={open ? 0 : -1}
            >
              {isDark ? 'Light mode' : 'Dark mode'}
            </button>
          </li>
        </ul>
      </nav>
    </div>,
    document.body,
  )
}
