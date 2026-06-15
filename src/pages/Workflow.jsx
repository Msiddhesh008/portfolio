import { useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import { usePageTitle } from '../hooks/usePageTitle'
import PageHeader from '../components/layout/PageHeader'
import WorkflowTree from '../components/WorkflowTree'
import { workflowSection, workflows } from '../data/portfolio'
import './Workflow.css'

function WorkflowSection({ workflow, index }) {
  const [ref, isInView] = useInView(0.08)
  const theme = workflow.theme || 'rn'

  return (
    <article
      id={workflow.slug}
      ref={ref}
      className={`workflow-section workflow-section--${theme} scroll-reveal ${isInView ? 'scroll-reveal--visible' : ''}`}
      style={{ '--stagger': `${index * 100}ms` }}
    >
      <header className="workflow-section__header">
        <div className="workflow-section__brand">
          <span className="workflow-section__mark" aria-hidden="true" />
          <h2 className="workflow-section__title">{workflow.title}</h2>
        </div>
        {workflow.intro ? (
          <p className="workflow-section__intro section__subhead">{workflow.intro}</p>
        ) : null}
      </header>

      <WorkflowTree steps={workflow.steps} variant={theme} visible={isInView} />
    </article>
  )
}

/** Development workflow trees per technology. */
export default function Workflow() {
  usePageTitle('Workflow')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page workflow-page">
      <div className="workflow-page__inner section__inner section__inner--wide">
        <PageHeader headline={workflowSection.headline} subhead={workflowSection.subhead} />

        <nav className="workflow-page__nav" aria-label="Workflow sections">
          {workflows.map((workflow) => (
            <a
              key={workflow.slug}
              href={`#${workflow.slug}`}
              className={`workflow-page__nav-link workflow-page__nav-link--${workflow.theme}`}
            >
              {workflow.title}
            </a>
          ))}
        </nav>

        <div className="workflow-page__sections">
          {workflows.map((workflow, index) => (
            <WorkflowSection key={workflow.slug} workflow={workflow} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
