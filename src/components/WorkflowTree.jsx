import { useInView } from '../hooks/useInView'
import './WorkflowTree.css'

function WorkflowSubnode({ substep, parentIndex, subIndex, variant, visible }) {
  return (
    <li
      className={`workflow-tree__subnode scroll-reveal ${visible ? 'scroll-reveal--visible' : ''}`}
      style={{ '--stagger': `${(parentIndex - 1) * 60 + subIndex * 40 + 30}ms` }}
    >
      <span className={`workflow-tree__dot workflow-tree__dot--sub workflow-tree__dot--${variant}`} aria-hidden="true" />
      <div className="workflow-tree__copy">
        <h4 className="workflow-tree__step-title workflow-tree__step-title--sub">{substep.title}</h4>
        {substep.description ? (
          <p className="workflow-tree__step-desc">{substep.description}</p>
        ) : null}
      </div>
    </li>
  )
}

function WorkflowNode({ step, index, total, variant, baseVisible }) {
  const stepNumber = index + 1
  const isLast = index === total - 1
  const hasSubsteps = step.substeps?.length > 0
  const [ref, isInView] = useInView(0.08)
  const visible = baseVisible || isInView

  return (
    <li
      ref={ref}
      className={`workflow-tree__node workflow-tree__node--${variant} scroll-reveal ${visible ? 'scroll-reveal--visible' : ''}`}
      style={{ '--stagger': `${index * 60}ms` }}
    >
      <div className="workflow-tree__node-row">
        <div className="workflow-tree__rail-col" aria-hidden="true">
          <div className={`workflow-tree__badge workflow-tree__badge--${variant}`}>
            <span>{stepNumber}</span>
          </div>
          {!isLast ? <div className="workflow-tree__connector" /> : null}
        </div>

        <div className="workflow-tree__content-col">
          <div className="workflow-tree__copy">
            <h3 className="workflow-tree__step-title">{step.title}</h3>
            {step.description ? (
              <p className="workflow-tree__step-desc">{step.description}</p>
            ) : null}
          </div>

          {hasSubsteps ? (
            <ul className="workflow-tree__branch" aria-label={`Sub-steps for step ${stepNumber}`}>
              {step.substeps.map((substep, subIndex) => (
                <WorkflowSubnode
                  key={substep.title}
                  substep={substep}
                  parentIndex={stepNumber}
                  subIndex={subIndex}
                  variant={variant}
                  visible={visible}
                />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </li>
  )
}

/** Vertical flow tree — minimal Apple-style typography. */
export default function WorkflowTree({ steps, variant = 'rn', visible = false }) {
  if (!steps?.length) {
    return <p className="workflow-tree__empty section__body">Workflow steps coming soon.</p>
  }

  return (
    <ol className="workflow-tree" aria-label="Workflow steps">
      {steps.map((step, index) => (
        <WorkflowNode
          key={step.title}
          step={step}
          index={index}
          total={steps.length}
          variant={variant}
          baseVisible={visible}
        />
      ))}
    </ol>
  )
}
