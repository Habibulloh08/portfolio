import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/fx/SectionHeading'
import { TiltCard } from '@/components/fx/TiltCard'
import { PROJECTS, type Project } from '@/data/resume'

function ProjectPreview({ project }: { project: Project }) {
  const [g1, g2] = project.gradient
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-t-[22px]"
      style={{ '--g1': g1, '--g2': g2 } as CSSProperties}
    >
      <img
        src={project.image}
        alt={`${project.name} — loyiha skrinshoti`}
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(80% 60% at 50% 100%, ${g1}22 0%, transparent 70%)`,
        }}
      />

      <div aria-hidden className="preview-shimmer absolute inset-0" />

      <span className="glass absolute right-4 top-4 rounded-full px-3 py-1 font-display text-xs">
        {project.year}
      </span>
    </div>
  )
}

function ProjectLinkIcon({ linked }: { linked: boolean }) {
  return (
    <span
      className={
        linked
          ? 'glass flex size-10 items-center justify-center rounded-full text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-background'
          : 'glass flex size-10 items-center justify-center rounded-full text-muted/40'
      }
    >
      <ArrowUpRight className="size-4" aria-hidden />
    </span>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-32 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="03 — Projects" align="center">
          Selected <span className="serif-accent gradient-text">work</span>
        </SectionHeading>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => {
            const card = (
              <TiltCard className="group relative h-full">
                <div className="absolute -inset-px overflow-hidden rounded-[24px]" aria-hidden>
                  <div className="border-spin" />
                </div>

                <article className="glass relative flex h-full flex-col overflow-hidden rounded-3xl">
                  <ProjectPreview project={project} />

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl font-bold sm:text-2xl">{project.name}</h3>
                      <ProjectLinkIcon linked={!!project.url} />
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-glass-border bg-accent/5 px-3 py-1 text-[0.7rem] font-medium text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </TiltCard>
            )

            return (
              <div key={project.name} data-reveal>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor
                    aria-label={`${project.name} — loyihani ochish`}
                    className="block h-full outline-none"
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
