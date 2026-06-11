import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GraduationCap, Award } from 'lucide-react'
import { SectionHeading } from '@/components/fx/SectionHeading'
import { PROFILE, STATS, EDUCATION } from '@/data/resume'
import { prefersReducedMotion } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const rootRef = useRef<HTMLElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      /* Portret karta — mask reveal + parallax */
      gsap.fromTo(
        portraitRef.current,
        { clipPath: 'inset(12% 12% 12% 12% round 28px)', scale: 1.08 },
        {
          clipPath: 'inset(0% 0% 0% 0% round 28px)',
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: portraitRef.current, start: 'top 90%', end: 'top 35%', scrub: 0.8 },
        }
      )

      /* Statistik hisoblagichlar */
      gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((el) => {
        const target = Number(el.dataset.counter)
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v))
          },
        })
      })

      /* SVG chiziq — scroll bilan chiziladi */
      const path = pathRef.current
      if (path) {
        const len = path.getTotalLength()
        gsap.fromTo(
          path,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: { trigger: rootRef.current, start: 'top 75%', end: 'bottom 55%', scrub: 1 },
          }
        )
      }
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} id="about" className="relative px-5 py-32 sm:px-10 lg:px-20">
      {/* Dekorativ animatsiyali SVG yo'l */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-0 top-10 h-full w-full opacity-40"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          ref={pathRef}
          d="M-50 120 C 250 40, 420 260, 640 180 S 1050 80, 1280 220"
          stroke="url(#about-grad)"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient id="about-grad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--accent)" />
            <stop offset="0.5" stopColor="var(--accent-2)" />
            <stop offset="1" stopColor="var(--accent-3)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Portret karta */}
        <div ref={portraitRef} className="relative mx-auto w-full max-w-sm will-change-transform">
          <div className="glass relative aspect-[3/4] overflow-hidden rounded-[28px] p-8">
            <div className="grid-bg absolute inset-0" aria-hidden />
            <div
              aria-hidden
              className="absolute -right-16 -top-16 size-56 rounded-full bg-accent-2/25 blur-[70px]"
            />
            <div
              aria-hidden
              className="absolute -bottom-16 -left-16 size-56 rounded-full bg-accent/20 blur-[70px]"
            />
            <div className="relative flex h-full flex-col justify-between">
              <span className="gradient-text font-display text-7xl font-bold">HK</span>
              <div>
                <p className="font-display text-2xl font-semibold">{PROFILE.role}</p>
                <p className="mt-1 text-sm text-muted">{PROFILE.location}</p>
              </div>
            </div>
          </div>
          <div
            aria-hidden
            className="glass absolute -right-5 top-8 rounded-2xl px-4 py-3 font-display text-sm [animation:float-y_5s_ease-in-out_infinite]"
          >
            React · Vue · TS
          </div>
          <div
            aria-hidden
            className="glass absolute -left-5 bottom-12 rounded-2xl px-4 py-3 font-display text-sm [animation:float-y_6s_ease-in-out_infinite_reverse]"
          >
            Clean Architecture
          </div>
        </div>

        {/* Matn */}
        <div>
          <SectionHeading label="01 — About">
            Engineering complex systems with a{' '}
            <span className="serif-accent gradient-text">clean architecture</span> mindset
          </SectionHeading>

          <p data-reveal className="mt-7 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
            {PROFILE.summary}
          </p>

          {/* Statistika */}
          <div data-reveal className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-bold">
                  <span className="gradient-text">
                    <span data-counter={s.value}>0</span>
                    {s.suffix}
                  </span>
                </p>
                <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Ta'lim + sertifikat */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div data-reveal className="glass rounded-2xl p-5">
              <GraduationCap className="mb-3 size-5 text-accent" aria-hidden />
              <h3 className="font-display text-sm font-semibold">Education</h3>
              <p className="mt-1.5 text-sm text-muted">{EDUCATION.course}</p>
              <p className="mt-1 text-xs text-muted/70">{EDUCATION.period}</p>
            </div>
            <div data-reveal className="glass rounded-2xl p-5">
              <Award className="mb-3 size-5 text-accent-2" aria-hidden />
              <h3 className="font-display text-sm font-semibold">Certificate</h3>
              <p className="mt-1.5 text-sm text-muted">{EDUCATION.certificate}</p>
              <p className="mt-1 text-xs text-muted/70">{EDUCATION.certDate}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
