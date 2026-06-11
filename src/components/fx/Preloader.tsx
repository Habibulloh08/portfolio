import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { PROFILE } from '@/data/resume'

interface PreloaderProps {
  onComplete: () => void
}

/** Kinematik preloader: 0→100 hisoblagich va ism reveal */
export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const counter = { v: 0 }
    const tween = gsap.to(counter, {
      v: 100,
      duration: 2.1,
      ease: 'power2.inOut',
      onUpdate: () => setCount(Math.round(counter.v)),
      onComplete: () => {
        window.setTimeout(onComplete, 420)
      },
    })
    return () => {
      tween.kill()
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-background"
      exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] } }}
    >
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-display text-[clamp(1.6rem,4.5vw,3rem)] font-bold tracking-tight"
        >
          {PROFILE.name} {PROFILE.surname}
          <span className="gradient-text">.</span>
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
          className="mt-1 text-sm uppercase tracking-[0.4em] text-muted"
        >
          Portfolio
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex items-end justify-between px-8 sm:px-14">
        <div className="h-px flex-1 self-center overflow-hidden bg-glass-border">
          <div
            className="h-full bg-gradient-to-r from-accent via-accent-2 to-accent-3 transition-transform duration-100 ease-linear"
            style={{ transform: `scaleX(${count / 100})`, transformOrigin: 'left' }}
          />
        </div>
        <span className="ml-8 font-display text-6xl font-bold tabular-nums text-foreground/90 sm:text-7xl">
          {count}
          <span className="text-2xl text-muted">%</span>
        </span>
      </div>
    </motion.div>
  )
}
