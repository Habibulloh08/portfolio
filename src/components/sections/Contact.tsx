import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, ArrowUpRight, Code2, Network, Send, Globe } from 'lucide-react'
import { Magnetic } from '@/components/fx/Magnetic'
import { PROFILE, SOCIALS } from '@/data/resume'
import { prefersReducedMotion } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const SOCIAL_ICONS = {
  GitHub: Code2,
  LinkedIn: Network,
  Telegram: Send,
} as const

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: PROFILE.phone,
    href: PROFILE.phoneHref,
    icon: Phone,
  },
  {
    label: 'Portfolio',
    value: 'portfolio-phi-two-rikqt3zgv1.vercel.app',
    href: PROFILE.portfolio,
    icon: Globe,
    external: true,
  },
]

export function Contact() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-contact-title]',
        { scale: 0.82, autoAlpha: 0.25 },
        {
          scale: 1,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 85%',
            end: 'top 30%',
            scrub: 0.7,
          },
        }
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      id="contact"
      className="relative flex min-h-svh flex-col justify-center px-5 pt-32 sm:px-10"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p
          data-reveal
          className="mb-6 font-display text-xs font-medium uppercase tracking-[0.34em] text-accent"
        >
          05 — Contact
        </p>

        <h2
          data-contact-title
          className="font-display text-[clamp(2.8rem,8vw,6.2rem)] font-bold leading-[1.02] tracking-tight will-change-transform"
        >
          Let's build
          <br />
          something <span className="serif-accent gradient-text">together</span>
        </h2>

        <p data-reveal className="mt-7 max-w-md text-muted">
          Open to new opportunities and interesting projects. Reach out — I'll get back to you.
        </p>

        <Magnetic strength={0.25} className="mt-10">
          <a
            href={`mailto:${PROFILE.email}`}
            data-cursor
            className="glass group inline-flex items-center gap-4 rounded-full py-4 pl-7 pr-5 font-display text-base font-semibold transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_48px_color-mix(in_srgb,var(--accent)_30%,transparent)] sm:text-xl"
          >
            <Mail className="size-5 text-accent" aria-hidden />
            {PROFILE.email}
            <span className="flex size-9 items-center justify-center rounded-full bg-accent text-background transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="size-4" aria-hidden />
            </span>
          </a>
        </Magnetic>

        {/* Kontakt kartalari */}
        <div
          data-reveal
          className="mt-12 grid w-full gap-3 sm:grid-cols-3"
        >
          {CONTACT_LINKS.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                data-cursor
                className="glass group rounded-2xl p-5 text-left transition-all duration-300 hover:border-accent/40 hover:shadow-[0_12px_40px_var(--shadow-deep)]"
              >
                <Icon className="size-4 text-accent" aria-hidden />
                <p className="mt-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted">
                  {item.label}
                </p>
                <p className="mt-1 break-all text-sm font-medium text-foreground/90 transition-colors group-hover:text-accent">
                  {item.value}
                </p>
              </a>
            )
          })}
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div data-reveal className="mt-6 grid w-full gap-3 sm:grid-cols-3">
          {SOCIALS.map((s) => {
            const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS]
            return (
              <Magnetic key={s.label} strength={0.35}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor
                  className="glass group flex h-full items-center justify-between gap-3 rounded-2xl p-5 transition-all duration-300 hover:border-accent-2/40"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-accent-2" aria-hidden />
                      <span className="font-display text-sm font-semibold">{s.label}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted transition-colors group-hover:text-foreground/80">
                      {s.handle}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted transition-all duration-300 group-hover:rotate-45 group-hover:text-accent"
                    aria-hidden
                  />
                </a>
              </Magnetic>
            )
          })}
        </div>
      </div>

      <footer className="mt-auto flex flex-col items-center justify-between gap-4 border-t border-glass-border py-7 text-xs text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} {PROFILE.name} {PROFILE.surname}
        </span>
        <nav className="flex flex-wrap items-center justify-center gap-4" aria-label="Social links">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <span className="flex items-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden />
          {PROFILE.location}
        </span>
      </footer>
    </section>
  )
}
