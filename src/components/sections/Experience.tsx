import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/fx/SectionHeading'
import { EXPERIENCE } from '@/data/resume'
import { prefersReducedMotion } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

/** Gorizontal scroll bo'lim — sahifa pin qilinib, kartalar yon tomonga suriladi */
export function Experience() {
  const rootRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      const track = trackRef.current!
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} id="experience" className="relative overflow-hidden">
      <div className="flex min-h-svh flex-col justify-center py-20">
        <div className="px-5 sm:px-10 lg:px-20">
          <SectionHeading label="02 — Experience">
            Where I've <span className="serif-accent gradient-text">worked</span>
          </SectionHeading>
          <p data-reveal className="mt-4 text-sm uppercase tracking-[0.28em] text-muted">
            Scroll to travel the timeline →
          </p>
        </div>

        <div ref={trackRef} className="mt-14 flex w-max gap-7 px-5 will-change-transform sm:px-10 lg:px-20">
          {EXPERIENCE.map((job, idx) => (
            <article
              key={job.company}
              className="glass group relative w-[86vw] shrink-0 overflow-hidden rounded-3xl p-7 transition-colors duration-500 hover:border-accent/30 sm:w-[560px] sm:p-9"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[7rem] font-bold opacity-[0.06]"
              >
                0{idx + 1}
              </span>
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${job.accent}, transparent)`,
                }}
              />
              <header className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">{job.company}</h3>
                  <p className="mt-1 font-medium" style={{ color: job.accent }}>
                    {job.role}
                  </p>
                </div>
                <div className="text-right font-display text-sm">
                  <p>{job.period}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-muted">
                    <MapPin className="size-3" aria-hidden />
                    {job.location}
                  </p>
                </div>
              </header>
              <ul className="mt-6 space-y-3.5">
                {job.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[0.92rem] leading-relaxed text-muted">
                    <span aria-hidden className="mt-1 shrink-0" style={{ color: job.accent }}>
                      ▹
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* Yakuniy karta */}
          <div className="flex w-[60vw] shrink-0 items-center justify-center sm:w-[420px]">
            <p className="text-center font-display text-3xl font-bold leading-snug text-muted">
              Next chapter? <br />
              <a href="#contact" className="gradient-text" data-cursor>
                Let's write it together.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
