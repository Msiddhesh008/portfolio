import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectVisual from '../components/ProjectVisual'
import {
  getAdjacentProjects,
  getProjectBySlug,
  profile,
  projectDetail,
  site,
} from '../data/portfolio'
import './ProjectDetail.css'

/** Apple-style project learn-more page. */
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const index = project ? project.id - 1 : 0
  const { prev, next } = getAdjacentProjects(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — ${profile.name}`
    }
    return () => {
      document.title = site.title
    }
  }, [project])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const { detail } = project

  return (
    <article className="project-detail">
      <header className="project-detail__hero">
        <div className="project-detail__hero-bg" aria-hidden="true" />
        <div className="project-detail__hero-inner">
          <Link to="/#work" className="project-detail__back">
            <span aria-hidden="true">‹</span> All projects
          </Link>
          <p className="project-detail__eyebrow">
            {detail.client} · {project.year}
          </p>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__subtitle">{project.subtitle}</p>
          <div className="project-detail__meta">
            <span>{detail.role}</span>
            <span className="project-detail__meta-dot" aria-hidden="true" />
            <span>{detail.duration}</span>
          </div>
        </div>
      </header>

      <div className="project-detail__visual">
        <ProjectVisual project={project} index={index} visible />
      </div>

      <div className="project-detail__body">
        <section className="project-detail__section">
          <h2 className="project-detail__headline">Overview</h2>
          <p className="project-detail__copy">{detail.overview}</p>
        </section>

        <section className="project-detail__highlights" aria-label="Project highlights">
          {detail.highlights.map((item) => (
            <div key={item.label} className="project-detail__stat">
              <span className="project-detail__stat-value">{item.value}</span>
              <span className="project-detail__stat-label">{item.label}</span>
            </div>
          ))}
        </section>

        <section className="project-detail__section project-detail__section--split">
          <div>
            <h2 className="project-detail__headline">Challenge</h2>
            <p className="project-detail__copy">{detail.challenge}</p>
          </div>
          <div>
            <h2 className="project-detail__headline">Solution</h2>
            <p className="project-detail__copy">{detail.solution}</p>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="project-detail__headline">Key features</h2>
          <ul className="project-detail__list">
            {detail.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="project-detail__section">
          <h2 className="project-detail__headline">Outcomes</h2>
          <ul className="project-detail__list project-detail__list--outcomes">
            {detail.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section className="project-detail__section">
          <h2 className="project-detail__headline">Stack</h2>
          <ul className="project-detail__tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </section>

        <section className="project-detail__cta">
          <p className="project-detail__cta-text">{projectDetail.ctaText}</p>
          <Link to="/#contact" className="project-detail__cta-link">
            {projectDetail.ctaLink} <span aria-hidden="true">›</span>
          </Link>
        </section>

        <nav className="project-detail__nav" aria-label="Project navigation">
          {prev ? (
            <Link to={`/projects/${prev.slug}`} className="project-detail__nav-link">
              <span className="project-detail__nav-label">Previous</span>
              <span className="project-detail__nav-title">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="project-detail__nav-link project-detail__nav-link--next"
            >
              <span className="project-detail__nav-label">Next</span>
              <span className="project-detail__nav-title">{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  )
}
