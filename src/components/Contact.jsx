import { useInView } from '../hooks/useInView'
import { contact, profile, socialLinks } from '../data/portfolio'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
}

/** Contact section — clean CTA like Apple footer promos. */
export default function Contact() {
  const [ref, isInView] = useInView(0.2)

  return (
    <section className="contact" id="contact">
      <div className={`contact__inner ${isInView ? 'contact__inner--visible' : ''}`} ref={ref}>
        <h2 className="contact__headline">
          {contact.headline[0]}
          <br />
          {contact.headline[1]}
        </h2>
        <p className="contact__subhead">{contact.subhead}</p>

        <a href={`mailto:${profile.email}`} className="contact__email">
          {profile.email} <span aria-hidden="true">›</span>
        </a>

        <div className="contact__social">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon]
            if (!Icon) return null
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="contact__social-link"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
