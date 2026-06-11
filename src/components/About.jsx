import { useInView } from '../hooks/useInView'
import { about, profile } from '../data/portfolio'
import './About.css'

/** About section with clean stat blocks. */
export default function About() {
  const [ref, isInView] = useInView(0.15)

  return (
    <section className="about" id="about">
      <div className={`about__inner ${isInView ? 'about__inner--visible' : ''}`} ref={ref}>
        <div className="about__content">
          <h2 className="about__headline">
            {about.headline[0]}
            <br />
            {about.headline[1]}
          </h2>
          <p className="about__bio">{profile.bio}</p>
          <p className="about__location">{profile.location}</p>
        </div>

        <div className="about__stats">
          {about.stats.map((stat) => (
            <div key={stat.label} className="about__stat">
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
