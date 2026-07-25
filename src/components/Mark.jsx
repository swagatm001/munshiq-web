export default function Mark({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" role="img" aria-label="Munshi mark">
      <rect x="4.5" y="4.5" width="25" height="25" rx="5" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <line x1="10" y1="11.5" x2="24" y2="11.5" stroke="currentColor" strokeWidth="1.7" opacity="0.42" strokeLinecap="round" />
      <line x1="10" y1="16.5" x2="24" y2="16.5" stroke="currentColor" strokeWidth="1.7" opacity="0.42" strokeLinecap="round" />
      <line x1="2" y1="23" x2="32" y2="23" stroke="var(--thread)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="23.5" cy="23" r="3.6" fill="var(--thread)" />
      <circle cx="23.5" cy="23" r="1.35" fill="var(--paper)" />
    </svg>
  )
}
