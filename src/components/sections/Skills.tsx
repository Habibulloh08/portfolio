import { ArrowUpRight, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/fx/SectionHeading'
import { Marquee } from '@/components/fx/Marquee'
import { CORE_STACK, SKILL_GROUPS, MARQUEE_ITEMS } from '@/data/resume'

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="px-5 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="04 — Skills">
            My <span className="serif-accent gradient-text">toolbox</span>
          </SectionHeading>

          {/* Core stack — interaktiv qatorlar */}
          <div className="mt-12 flex flex-col gap-3">
            {CORE_STACK.map((skill, i) => (
              <div
                key={skill.name}
                data-reveal
                data-cursor
                className="glass group flex items-center justify-between gap-6 rounded-2xl border border-glass-border px-5 py-6 transition-all duration-500 hover:border-accent/40 sm:px-6 sm:py-7"
              >
                <div className="flex items-baseline gap-5">
                  <span
                    aria-hidden
                    className="font-display text-xs tabular-nums text-muted transition-colors duration-300 group-hover:text-accent"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-shadow font-display text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                      {skill.name}
                    </h3>
                    <p className="text-shadow mt-1.5 text-sm text-foreground/80 sm:hidden">{skill.meta}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-6">
                  <p className="text-shadow hidden max-w-xs text-right text-sm leading-snug text-foreground/85 transition-colors duration-300 group-hover:text-foreground sm:block">
                    {skill.meta}
                  </p>
                  <span
                    aria-hidden
                    className="glass flex size-10 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent group-hover:text-background"
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Guruhlangan chiplar — bento kartalar */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {SKILL_GROUPS.map((g) => (
              <div
                key={g.title}
                data-reveal
                className="glass rounded-2xl p-6 transition-colors duration-500 hover:border-accent-2/40"
              >
                <h3 className="mb-4 font-display text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-accent-2">
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-glass-border px-3 py-1 text-xs text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p data-reveal className="mt-10 text-sm text-muted">
            <Sparkles className="mr-2 inline size-4 text-accent" aria-hidden />
            Soft skills: Communication · Collaboration · Problem-Solving · Time Management
          </p>
        </div>
      </div>

      {/* Cheksiz marquee */}
      <div className="mt-24 -rotate-1 space-y-4">
        <Marquee speed={34}>
          {MARQUEE_ITEMS.map((item) => (
            <span
              key={item}
              className="mx-5 flex items-center gap-4 font-display text-3xl font-bold text-foreground/85 sm:text-4xl"
            >
              {item}
              <span aria-hidden className="gradient-text text-2xl">
                ✦
              </span>
            </span>
          ))}
        </Marquee>
        <Marquee speed={40} reverse>
          {[...MARQUEE_ITEMS].reverse().map((item) => (
            <span
              key={item}
              className="mx-5 flex items-center gap-4 font-display text-3xl font-bold text-transparent sm:text-4xl"
              style={{ WebkitTextStroke: '1px color-mix(in srgb, var(--foreground) 38%, transparent)' }}
            >
              {item}
              <span aria-hidden className="text-2xl text-accent-2" style={{ WebkitTextStroke: '0' }}>
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
