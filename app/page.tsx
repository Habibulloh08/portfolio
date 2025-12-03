import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { ResumeSection } from "@/components/resume-section"
// import { TracingBeam } from "@/components/ui/tracing-beam"

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      {/* <TracingBeam className="relative w-full -right-10"> */}
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <ResumeSection />
      {/* </TracingBeam> */}
    </div>
  )
}
