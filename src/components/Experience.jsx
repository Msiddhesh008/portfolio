import { useInView } from '../hooks/useInView'
import { experience, experienceSection } from '../data/portfolio'
import ExperienceTimeline from './ExperienceTimeline'
import './Experience.css'

/** Work history timeline on the home page. */
export default function Experience() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section className="experience section" id="experience">
      <div
        className={`experience__inner section__inner scroll-reveal ${isInView ? 'scroll-reveal--visible' : ''}`}
        ref={ref}
      >
        <header className="experience__header">
          <h2 className="section__headline">{experienceSection.headline}</h2>
          <p className="section__subhead">{experienceSection.subhead}</p>
        </header>

        <ExperienceTimeline items={experience} emptyMessage={experienceSection.emptyMessage} />
      </div>
    </section>
  )
}
