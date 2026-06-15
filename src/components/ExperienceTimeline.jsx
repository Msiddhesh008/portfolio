import './ExperienceTimeline.css'

/** Vertical experience timeline — shared by home section and resume page. */
export default function ExperienceTimeline({ items, emptyMessage }) {
  const filled = items.filter((item) => item.company?.trim())

  if (filled.length === 0) {
    return emptyMessage ? <p className="experience-timeline__empty section__body">{emptyMessage}</p> : null
  }

  return (
    <div className="experience-timeline">
      {filled.map((item) => (
        <article key={`${item.company}-${item.period}`} className="experience-timeline__item">
          <div className="experience-timeline__header">
            <h3 className="experience-timeline__company">{item.company}</h3>
            <p className="experience-timeline__meta">
              {item.role}
              {item.period ? ` · ${item.period}` : ''}
              {item.location ? ` · ${item.location}` : ''}
            </p>
          </div>

          {item.summary ? <p className="experience-timeline__summary section__body">{item.summary}</p> : null}

          {item.highlights?.length > 0 ? (
            <ul className="experience-timeline__highlights">
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}

          {item.stack?.length > 0 ? (
            <ul className="tag-list experience-timeline__stack">
              {item.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  )
}
