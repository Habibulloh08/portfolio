"use client"

import { Calendar, MapPin, Users, Code, TrendingUp, Shield } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Work & Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading development teams and building scalable solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">ReactJS Team Lead Developer</h3>
                <p className="text-xl text-blue-400 mb-2">ExaSoft</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    11/2023 – Present
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Tashkent
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Developed user interfaces for an ERP system with CashFlow, HR, POS, Balance, and WMS modules using React,
              TypeScript, and Ant Design, improving system efficiency by 15%.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Security Implementation</h4>
                    <p className="text-muted-foreground text-sm">
                      Designed and implemented role-based access control (RBAC), securing 100+ user roles and resolving
                      large-scale permission issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Code className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Architecture Migration</h4>
                    <p className="text-muted-foreground text-sm">
                      Led the migration of the ERP system frontend to Clean Architecture, restructuring the codebase
                      into domain, application, and presentation layers, reducing technical debt by 25%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Performance Optimization</h4>
                    <p className="text-muted-foreground text-sm">
                      Optimized performance for large datasets using React Query and lazy loading, reducing data
                      retrieval latency by 30%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Code className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1">API Integration</h4>
                    <p className="text-muted-foreground text-sm">
                      Integrated REST APIs for seamless data exchange across ERP modules and other web applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-5 h-5 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Team Leadership</h4>
                    <p className="text-muted-foreground text-sm">
                      Led a team of frontend developers, conducting code reviews and implementing Agile/Scrum practices,
                      reducing sprint delivery time by 20%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Mentorship & Collaboration</h4>
                    <p className="text-muted-foreground text-sm">
                      Mentored junior developers and coordinated with backend and design teams to ensure alignment on
                      project requirements and deliverables.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Ant Design",
                "Clean Architecture",
                "React Query",
                "REST APIs",
                "RBAC",
                "Agile/Scrum",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
