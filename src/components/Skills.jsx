import { useInView } from '../hooks/useInView'
import { skills, skillsSection } from '../data/portfolio'
import './Skills.css'

/** Skills listed in a simple Apple-style grid. */
export default function Skills() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section className="skills" id="skills">
      <div className={`skills__inner ${isInView ? 'skills__inner--visible' : ''}`} ref={ref}>
        <header className="skills__header">
          <h2 className="skills__headline">{skillsSection.headline}</h2>
          <p className="skills__subhead">{skillsSection.subhead}</p>
        </header>

        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skills__card">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
