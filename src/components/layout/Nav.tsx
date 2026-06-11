import { Button } from '@/components/ui/button'
import { Magnetic } from '@/components/fx/Magnetic'
import { PROFILE } from '@/data/resume'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <div className="glass-strong flex w-full max-w-4xl items-center justify-between rounded-full py-2 pl-6 pr-2 shadow-[0_8px_40px_var(--shadow-deep)]">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight" data-cursor>
          HK<span className="gradient-text">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.84rem] text-muted transition-colors duration-300 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Magnetic strength={0.3}>
          <Button asChild size="sm">
            <a href={`mailto:${PROFILE.email}`}>Hire me</a>
          </Button>
        </Magnetic>
      </div>
    </header>
  )
}
