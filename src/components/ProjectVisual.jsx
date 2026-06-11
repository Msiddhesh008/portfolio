import './ProjectVisual.css'

const ARCH_VARIANTS = ['arch-dark', 'arch-blue', 'arch-warm', 'arch-green']

/** Apple-style project visual with curved arch and device mockup. */
export default function ProjectVisual({ project, index, visible = false }) {
  const archClass = ARCH_VARIANTS[index % ARCH_VARIANTS.length]

  return (
    <div className={`project-visual project-visual--${project.layout}`}>
      <div
        className={`project-visual__arch project-visual__arch--${archClass} ${visible ? 'project-visual__arch--visible' : ''}`}
        aria-hidden="true"
      />
      <div className="project-visual__glow" aria-hidden="true" />
      <div className={`project-visual__image-wrap ${visible ? 'project-visual__image-wrap--visible' : ''}`}>
        <img
          src={project.image}
          alt=""
          className="project-visual__image"
          loading="lazy"
          draggable="false"
        />
      </div>
    </div>
  )
}
