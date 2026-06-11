import type { ReactNode } from 'react'
import { useMagnetic } from '@/hooks/useMagnetic'
import { cn } from '@/lib/utils'

interface MagneticProps {
  children: ReactNode
  strength?: number
  className?: string
}

/** Har qanday elementni magnit effekt bilan o'rovchi konteyner */
export function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
  const ref = useMagnetic<HTMLDivElement>(strength)
  return (
    <div ref={ref} className={cn('inline-block will-change-transform', className)}>
      {children}
    </div>
  )
}
