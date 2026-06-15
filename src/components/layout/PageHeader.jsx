/** Reusable page/section header with consistent typography. */
import './PageHeader.css'
export default function PageHeader({ eyebrow, headline, subhead, align = 'center', className = '' }) {
  return (
    <header className={`page-header page-header--${align} ${className}`.trim()}>
      {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
      {headline ? <h1 className="section__headline">{headline}</h1> : null}
      {subhead ? <p className="section__subhead">{subhead}</p> : null}
    </header>
  )
}
