import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Magnetic } from '@/components/fx/Magnetic'
import { PROFILE } from '@/data/resume'
import { isCoarsePointer, prefersReducedMotion } from '@/lib/utils'

function Chars({ text }: { text: string }) {
  return (
    <span aria-label={text} role="text">
      {text.split('').map((c, i) => (
        <span key={i} aria-hidden className="char inline-block will-change-transform">
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </span>
  )
}

interface HeroProps {
  ready: boolean
}

export function Hero({ ready }: HeroProps) {
  const rootRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ready) return
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(['.char', '[data-hero-fade]'], { autoAlpha: 1, yPercent: 0, y: 0 })
        return
      }
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      tl.fromTo(
        '.char',
        { yPercent: 110, rotateX: -60, autoAlpha: 0 },
        { yPercent: 0, rotateX: 0, autoAlpha: 1, duration: 1.3, stagger: 0.04 },
        0.05
      ).fromTo(
        '[data-hero-fade]',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 },
        '-=0.6'
      )
    }, rootRef)
    return () => ctx.revert()
  }, [ready])

  useEffect(() => {
    const root = rootRef.current
    const inner = innerRef.current
    if (!root || !inner || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.to(inner, {
        scale: 0.94,
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: { trigger: root, start: 'top top', end: 'bottom 20%', scrub: 0.8 },
      })
    }, root)

    let cleanupMouse: (() => void) | undefined
    if (!isCoarsePointer()) {
      const layers = Array.from(root.querySelectorAll<HTMLElement>('[data-depth]'))
      const setters = layers.map((el) => ({
        x: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3' }),
        y: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3' }),
        depth: Number(el.dataset.depth ?? 0.5),
      }))
      const onMove = (e: MouseEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5
        const ny = e.clientY / window.innerHeight - 0.5
        setters.forEach((s) => {
          s.x(nx * 38 * s.depth)
          s.y(ny * 38 * 0.65 * s.depth)
        })
      }
      window.addEventListener('mousemove', onMove)
      cleanupMouse = () => window.removeEventListener('mousemove', onMove)
    }

    return () => {
      ctx.revert()
      cleanupMouse?.()
    }
  }, [])

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 text-center sm:px-10"
    >
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div
        aria-hidden
        data-depth="0.25"
        className="absolute left-[12%] top-[18%] size-[28vmax] rounded-full bg-accent/12 blur-[50px] [animation:pulse-glow_9s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        data-depth="0.4"
        className="absolute bottom-[10%] right-[8%] size-[24vmax] rounded-full bg-accent-2/12 blur-[50px] [animation:pulse-glow_11s_ease-in-out_infinite_reverse]"
      />

      <div ref={innerRef} className="relative z-10 flex flex-col items-center will-change-transform">
        <p
          data-hero-fade
          data-depth="0.18"
          className="glass mb-8 rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.32em] text-muted opacity-0"
        >
          <span className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle [animation:pulse-glow_2.4s_ease-in-out_infinite]" />
          Available for work · {PROFILE.location}
        </p>

        <h1
          data-depth="0.1"
          className="hero-title font-display font-bold [perspective:900px]"
        >
          <span className="block overflow-hidden pb-1">
            <Chars text={PROFILE.name} />
          </span>
          <span className="hero-serif hero-surname block overflow-hidden pb-2 text-accent">
            <Chars text={PROFILE.surname} />
          </span>
        </h1>

        <p
          data-hero-fade
          data-depth="0.16"
          className="mt-7 max-w-xl text-balance text-base text-muted opacity-0 sm:text-lg"
        >
          <span className="serif-accent text-foreground/90">Frontend developer</span> crafting
          dramatic digital experiences with precision engineering and motion design.
        </p>

        <div data-hero-fade className="mt-10 flex flex-wrap items-center justify-center gap-4 opacity-0">
          <Magnetic strength={0.35}>
            <Button asChild size="lg">
              <a href="#projects">View projects</a>
            </Button>
          </Magnetic>
          <Magnetic strength={0.35}>
            <Button asChild variant="ghost" size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
          </Magnetic>
        </div>
      </div>

      <div
        data-hero-fade
        className="absolute bottom-9 z-10 flex flex-col items-center gap-3 text-[0.68rem] uppercase tracking-[0.3em] text-muted opacity-0"
      >
        <span className="relative h-9 w-[22px] rounded-full border border-muted/60">
          <span className="absolute left-1/2 top-[7px] h-[7px] w-[3px] -translate-x-1/2 rounded-full bg-accent [animation:scroll-dot_1.9s_ease-in-out_infinite]" />
        </span>
        Scroll
        <ArrowDown className="size-3.5 text-accent" aria-hidden />
      </div>
    </section>
  )
}
