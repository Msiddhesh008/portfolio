import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import { notFound } from '../data/portfolio'
import './NotFound.css'

/** 404 page for unknown routes. */
export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <div className="page not-found">
      <div className="not-found__inner">
        <PageHeader headline={notFound.headline} subhead={notFound.subhead} />
        <Link to="/" className="text-link">
          {notFound.backLabel} <span aria-hidden="true">›</span>
        </Link>
      </div>
    </div>
  )
}
