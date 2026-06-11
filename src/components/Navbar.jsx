import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { nav, navLinks } from '../data/portfolio'
import MobileMenu from './MobileMenu'
import './Navbar.css'

/** Apple-style frosted glass navigation bar. */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { toggleTheme, isDark } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('nav-menu-open', menuOpen)
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.documentElement.classList.remove('nav-menu-open')
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`nav ${scrolled || menuOpen ? 'nav--scrolled' : ''}`}>
        <nav className="nav__inner" aria-label="Main navigation">
          <Link to="/" className="nav__logo" onClick={closeMenu}>
            {nav.logo}
          </Link>

          <ul className="nav__links nav__links--desktop">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <button
              type="button"
              className="nav__theme-btn"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.2" />
                  <path
                    d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>

            <Link to={nav.ctaHref} className="nav__cta">
              {nav.cta}
            </Link>
          </div>

          <button
            type="button"
            className={`nav__toggle ${menuOpen ? 'nav__toggle--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
    </>
  )
}
