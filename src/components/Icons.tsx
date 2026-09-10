type IconProps = {
  size?: number
  className?: string
}

export function IconChevron({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconSearch({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconUser({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="2" />
      <path d="M5 19c1.2-3.2 3.6-4.8 7-4.8S17.8 15.8 19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconLock({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function IconArrow({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconPiggy({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M8 18c0-5 3.2-8.5 8.4-8.5 3.4 0 5.6 1.2 7.2 3.2 2.4-.2 4.4 1.6 4.4 4 0 1.2-.4 2.2-1.2 3 .8.8 1.2 1.8 1.2 3 0 2.6-2.4 4.6-5.6 4.6H12.4C9 27.3 6.6 25 6.6 22c0-1.4.6-2.6 1.4-3.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="20.5" cy="16.2" r="1" fill="currentColor" />
      <path d="M11 12.2V9.6a2.2 2.2 0 0 1 2.2-2.2h1.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function IconCard({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect x="5" y="9" width="22" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 14h22" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 20h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconLoan({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M16 7v18M10 12c1.6-2 3.6-3 6-3s4.4 1 6 3M10 20c1.6 2 3.6 3 6 3s4.4-1 6-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconShield({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M16 6l10 4v7c0 6.2-4.2 10.2-10 12-5.8-1.8-10-5.8-10-12v-7l10-4z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function IconRemesa({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect x="4" y="10" width="24" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 15h24" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="21" cy="20" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconGlobe({ size = 28, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 6c3 3.2 3 16.8 0 20M16 6c-3 3.2-3 16.8 0 20M6 16h20M8.5 11h15M8.5 21h15" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconMenu({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconClose({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export const actionIcons = {
  cuenta: IconPiggy,
  tarjeta: IconCard,
  prestamo: IconLoan,
  seguro: IconShield,
  remesa: IconRemesa,
  exterior: IconGlobe,
}
