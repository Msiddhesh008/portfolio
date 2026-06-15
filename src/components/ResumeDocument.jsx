import { about, profile, resume, resumeSection } from '../data/portfolio'
import './ResumeDocument.css'

/** Modern A4 resume — gradient sidebar, WYSIWYG for PDF export. */
export default function ResumeDocument({ documentRef }) {
  const filledExperience = resume.experience.filter((item) => item.company?.trim())
  const filledEducation = resume.education.filter((entry) => entry.school?.trim())
  const yearsStat = about.stats.find((s) => s.label.toLowerCase().includes('year'))

  return (
    <article ref={documentRef} className="resume-document" aria-label="Resume document">
      <div className="resume-document__layout">
        <aside className="resume-document__sidebar">
          <div className="resume-document__sidebar-mesh" aria-hidden="true" />
          <div className="resume-document__sidebar-inner">
            <header className="resume-document__profile">
              <h1 className="resume-document__name">{profile.name}</h1>
              <p className="resume-document__role">{profile.role}</p>
              {yearsStat ? (
                <p className="resume-document__badge">
                  {yearsStat.value} {yearsStat.label}
                </p>
              ) : null}
            </header>

            <div className="resume-document__sidebar-block">
              <h2 className="resume-document__sidebar-label">Contact</h2>
              <p className="resume-document__sidebar-text">{profile.email}</p>
              <p className="resume-document__sidebar-text">{profile.location}</p>
            </div>

            <div className="resume-document__sidebar-block">
              <h2 className="resume-document__sidebar-label">{resumeSection.labels.skills}</h2>
              <div className="resume-document__skill-groups">
                {resume.skills.map((group) => (
                  <div key={group.category} className="resume-document__skill-group">
                    <p className="resume-document__skill-cat">{group.category}</p>
                    <div className="resume-document__pills">
                      {group.items.map((item) => (
                        <span key={item} className="resume-document__pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="resume-document__main">
          {resume.summary ? (
            <section className="resume-document__section">
              <h2 className="resume-document__heading">{resumeSection.labels.summary}</h2>
              <p className="resume-document__text">{resume.summary}</p>
            </section>
          ) : null}

          <section className="resume-document__section">
            <h2 className="resume-document__heading">{resumeSection.labels.experience}</h2>
            {filledExperience.length > 0 ? (
              <div className="resume-document__jobs">
                {filledExperience.map((job) => (
                  <article key={`${job.company}-${job.period}`} className="resume-document__job">
                    <div className="resume-document__job-head">
                      <div>
                        <h3 className="resume-document__company">{job.company}</h3>
                        <p className="resume-document__job-title">
                          {job.role}
                          {job.location ? ` · ${job.location}` : ''}
                        </p>
                      </div>
                      {job.period ? (
                        <span className="resume-document__period">{job.period}</span>
                      ) : null}
                    </div>
                    {job.summary ? <p className="resume-document__text">{job.summary}</p> : null}
                    {job.highlights?.length > 0 ? (
                      <ul className="resume-document__list">
                        {job.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                    {job.stack?.length > 0 ? (
                      <div className="resume-document__tags">
                        {job.stack.map((tech) => (
                          <span key={tech} className="resume-document__tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {job.projects?.length > 0 ? (
                      <div className="resume-document__job-projects">
                        {job.projects.map((project) => (
                          <div key={project.title} className="resume-document__nested-project">
                            <p className="resume-document__project-name">{project.title}</p>
                            <p className="resume-document__project-desc">{project.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : (
              <p className="resume-document__text resume-document__muted">
                {resumeSection.emptyExperience}
              </p>
            )}
          </section>

          {resume.projects?.length > 0 ? (
            <section className="resume-document__section">
              <h2 className="resume-document__heading">{resumeSection.labels.projects}</h2>
              <div className="resume-document__projects">
                {resume.projects.map((project) => (
                  <article key={project.title} className="resume-document__project-card">
                    <div className="resume-document__project-head">
                      <h3 className="resume-document__project-title">{project.title}</h3>
                      {project.year ? (
                        <span className="resume-document__project-year">{project.year}</span>
                      ) : null}
                    </div>
                    {project.company ? (
                      <p className="resume-document__project-company">{project.company}</p>
                    ) : null}
                    <p className="resume-document__text">{project.description}</p>
                    {project.stack?.length > 0 ? (
                      <div className="resume-document__tags">
                        {project.stack.map((tech) => (
                          <span key={tech} className="resume-document__tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {filledEducation.length > 0 ? (
            <section className="resume-document__section">
              <h2 className="resume-document__heading">{resumeSection.labels.education}</h2>
              <div className="resume-document__education">
                {filledEducation.map((entry) => (
                  <article key={`${entry.school}-${entry.period}`} className="resume-document__job">
                    <div className="resume-document__job-head">
                      <div>
                        <h3 className="resume-document__company">{entry.school}</h3>
                        <p className="resume-document__job-title">{entry.degree}</p>
                      </div>
                      {entry.period ? (
                        <span className="resume-document__period">{entry.period}</span>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </main>
      </div>
    </article>
  )
}
