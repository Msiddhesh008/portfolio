import { Link } from 'react-router-dom'
import { hero, profile } from '../data/portfolio'
import HeroTechLogos from './HeroTechLogos'
import './Hero.css'

/** Apple-style hero — headline, subhead, and text links. */
export default function Hero() {
  const [firstName, ...rest] = profile.name.split(' ')
  const lastName = rest.join(' ')

  return (
    <section className="hero" id="hero">
      <div className="hero__ambient" aria-hidden="true">
        <div className="hero__mesh" />
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
        <div className="hero__arc" />
        <HeroTechLogos />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">{profile.role}</p>
        <h1 className="hero__title" data-title-style={hero.titleStyle}>
          <span className="hero__title-wrap">
            <span className="hero__title-layer hero__title-layer--cyan" aria-hidden="true">
              {profile.name}
            </span>
            <span className="hero__title-layer hero__title-layer--orange" aria-hidden="true">
              {profile.name}
            </span>
            <span className="hero__title-layer hero__title-layer--main">
              <span className="hero__title-part">{firstName}</span>
              {lastName && (
                <span className="hero__title-part hero__title-part--bright"> {lastName}</span>
              )}
            </span>
          </span>
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <Link to="/#work" className="hero__link">
            {hero.ctaWork} <span aria-hidden="true">›</span>
          </Link>
          <Link to="/#contact" className="hero__link">
            {hero.ctaContact} <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
