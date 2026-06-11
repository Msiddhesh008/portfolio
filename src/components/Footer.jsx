import { Link } from 'react-router-dom'
import { navLinks, profile } from '../data/portfolio'
import './Footer.css'

/** Minimal Apple-style footer. */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          Copyright &copy; {year} {profile.name}. All rights reserved.
        </p>
        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
