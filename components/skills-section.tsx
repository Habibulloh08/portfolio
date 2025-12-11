"use client"

import { useEffect, useState } from "react"
import { Code, Palette, TestTube, Settings, Users, Clock } from "lucide-react"

const technicalSkills = [
  {
    category: "Languages & Frameworks",
    skills: [
      "HTML",
      "CSS",
      "Sass",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "Zustand",
      "React Query",
    ],
    icon: Code,
  },
  {
    category: "UI Libraries",
    skills: ["Ant Design", "Material UI", "Chakra UI", "and others"],
    icon: Palette,
  },
  {
    category: "Testing",
    skills: ["Vitest", "Jest"],
    icon: TestTube,
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Trello", "Notion", "ClickUp"],
    icon: Settings,
  },
  {
    category: "Architecture & Patterns",
    skills: ["REST APIs", "Repository Pattern", "SOLID", "DRY", "Clean Architecture"],
    icon: Code,
  },
  {
    category: "Real-time & State Management",
    skills: ["Socket.IO", "Redux Toolkit", "Zustand", "React Query"],
    icon: Code,
  },
]

const softSkills = [
  { name: "Communication", icon: Users },
  { name: "Collaboration", icon: Users },
  { name: "Problem-Solving", icon: Code },
  { name: "Time Management", icon: Clock },
]

export function SkillsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".skill-item")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={category.category}
                  data-index={index}
                  className={`skill-item bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border card-hover transition-all duration-500 ${visibleItems.includes(index) ? "animate-slide-up opacity-100" : "opacity-0"
                    }`}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 text-blue-500 mr-3" />
                    <h4 className="text-lg font-semibold text-foreground">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                        style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills?.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  data-index={index + technicalSkills.length}
                  className={`skill-item bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 text-center border border-purple-500/30 card-hover transition-all duration-500 ${visibleItems.includes(index + technicalSkills.length) ? "animate-slide-up opacity-100" : "opacity-0"
                    }`}
                >
                  <Icon className="w-8 h-8 text-purple-500 dark:text-purple-400 mx-auto mb-3" />
                  <h4 className="text-foreground font-medium">{skill.name}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
