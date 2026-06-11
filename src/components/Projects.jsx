import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { projects, projectsSection } from '../data/portfolio'
import ProjectVisual from './ProjectVisual'
import './Projects.css'

function ProjectTile({ project, index }) {
  const [ref, isInView] = useInView(0.1)

  return (
    <article
      ref={ref}
      className={`project-tile ${isInView ? 'project-tile--visible' : ''}`}
      style={{ '--stagger': `${index * 100}ms` }}
    >
      <div className="project-tile__content">
        <h2 className="project-tile__title">{project.title}</h2>
        <p className="project-tile__subtitle">{project.subtitle}</p>
        <div className="project-tile__links">
          <Link to={`/projects/${project.slug}`} className="project-tile__link">
            {projectsSection.learnMore} <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>

      <ProjectVisual project={project} index={index} visible={isInView} />

      <div className="project-tile__details">
        <p>{project.description}</p>
        <ul className="project-tile__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

/** Apple-style promo tiles for featured work. */
export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="projects__inner">
        {projects.map((project, index) => (
          <ProjectTile key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
