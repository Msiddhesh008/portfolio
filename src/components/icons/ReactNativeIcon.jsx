/** Minimal React Native atom — matches Simple Icons line weight, no bubble outline. */
export default function ReactNativeIcon({ className, gradientId = 'hero-tech-grad-0' }) {
  const paint = `url(#${gradientId})`

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="1.65" fill={paint} />
      <ellipse cx="12" cy="12" rx="10" ry="3.75" fill="none" stroke={paint} strokeWidth="0.8" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.75"
        fill="none"
        stroke={paint}
        strokeWidth="0.8"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.75"
        fill="none"
        stroke={paint}
        strokeWidth="0.8"
        transform="rotate(120 12 12)"
      />
    </svg>
  )
}
