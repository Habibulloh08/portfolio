import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence } from 'framer-motion'
import { Preloader } from '@/components/fx/Preloader'
import { CustomCursor } from '@/components/fx/CustomCursor'
import { Letterbox } from '@/components/fx/Letterbox'
import { Nav } from '@/components/layout/Nav'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { scrollState } from '@/state'
import { prefersReducedMotion } from '@/lib/utils'

const Scene3D = lazy(() => import('@/components/three/Scene3D'))

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [ready, setReady] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.3, smoothWheel: true, anchors: true })
    lenisRef.current = lenis
    lenis.stop()

    lenis.on('scroll', (l: Lenis) => {
      scrollState.progress = l.progress || 0
      scrollState.velocity = l.velocity || 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${l.progress || 0})`
      }
      ScrollTrigger.update()
    })

    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!ready) return

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set('[data-reveal]', { autoAlpha: 1 })
        return
      }

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: 60,
            x: i % 2 === 0 ? -45 : 45,
            rotateX: 8,
            transformPerspective: 900,
          },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            rotateX: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('section[id]').forEach((sec) => {
        if (sec.id === 'hero') return
        gsap.fromTo(
          sec,
          { scale: 1 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sec,
              start: 'top 95%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        )
      })
    })

    requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => ctx.revert()
  }, [ready])

  const handlePreloadDone = useCallback(() => {
    setReady(true)
    lenisRef.current?.start()
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [])

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-lg focus:bg-background focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <AnimatePresence>{!ready && <Preloader onComplete={handlePreloadDone} />}</AnimatePresence>

      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <Letterbox />
      <div className="noise-overlay" aria-hidden />
      <CustomCursor />

      <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-foreground/5">
        <div
          ref={progressRef}
          className="h-full origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3 will-change-transform"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <Nav />

      <main className="content-scrim relative z-10">
        <Hero ready={ready} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
