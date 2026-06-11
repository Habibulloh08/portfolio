import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label: string
  children: ReactNode
  className?: string
  align?: 'left' | 'center'
}

/** Bo'lim sarlavhasi — label + katta title, data-reveal orqali animatsiyalanadi */
export function SectionHeading({ label, children, className, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <p
        data-reveal
        className="section-label mb-5 inline-flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.34em] text-accent"
      >
        <span className="inline-block h-px w-10 bg-gradient-to-r from-accent to-transparent" />
        {label}
        {align === 'center' && (
          <span className="inline-block h-px w-10 bg-gradient-to-l from-accent to-transparent" />
        )}
      </p>
      <h2
        data-reveal
        className="section-title text-shadow font-display font-bold tracking-tight text-foreground"
      >
        {children}
      </h2>
    </div>
  )
}
