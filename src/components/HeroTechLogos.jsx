import { heroGradients, heroTechLogos } from '../data/heroTechLogos'
import './HeroTechLogos.css'

/** Apple-style scattered tech logos with gradient fills. */
export default function HeroTechLogos() {
  return (
    <div className="hero-tech" aria-hidden="true">
      <svg className="hero-tech__defs" width="0" height="0">
        <defs>
          {heroGradients.map(([from, to], i) => (
            <linearGradient
              key={i}
              id={`hero-tech-grad-${i}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {heroTechLogos.map((item) => {
        const Icon = item.Icon
        const gradientId = `hero-tech-grad-${item.gradient % heroGradients.length}`
        const style = {
          '--tech-size': `${item.size}px`,
          '--tech-rotate': `${item.rotate}deg`,
          '--tech-delay': `${item.delay * 0.4}s`,
          top: item.top,
          left: item.left,
          right: item.right,
          bottom: item.bottom,
          ...(item.centerX ? { translate: '-50% 0' } : {}),
        }

        return (
          <div
            key={item.id}
            className={`hero-tech__item hero-tech__item--${item.id}`}
            style={style}
          >
            {item.custom ? (
              <Icon className="hero-tech__icon" gradientId={gradientId} />
            ) : (
              <Icon
                className="hero-tech__icon"
                style={{ fill: `url(#${gradientId})` }}
                aria-hidden="true"
              />
            )}
          </div>
        )
      })}

      {/* Decorative shapes — pinned to corners, away from center */}
      <span className="hero-tech__shape hero-tech__shape--star" style={{ top: '6%', left: '20%', '--r': '-22deg' }} />
      <span className="hero-tech__shape hero-tech__shape--star" style={{ top: '6%', right: '20%', '--r': '18deg' }} />
      <span className="hero-tech__shape hero-tech__shape--squiggle" style={{ bottom: '20%', left: '18%', '--r': '12deg' }} />
      <span className="hero-tech__shape hero-tech__shape--squiggle" style={{ bottom: '20%', right: '18%', '--r': '-8deg' }} />
      <span className="hero-tech__shape hero-tech__shape--dot" style={{ top: '22%', left: '20%' }} />
      <span className="hero-tech__shape hero-tech__shape--dot" style={{ top: '22%', right: '20%' }} />
    </div>
  )
}
