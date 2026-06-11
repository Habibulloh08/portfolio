import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isCoarsePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Mobil / past quvvatli qurilmalar uchun yengil 3D profil */
export const isLowPowerDevice = () => {
  if (typeof window === 'undefined') return false
  if (prefersReducedMotion()) return true
  if (window.matchMedia('(max-width: 768px)').matches) return true
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return true
  return false
}
