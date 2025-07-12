"use client"

import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border card-hover">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">ERP System</h3>
                  <p className="text-muted-foreground flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    2023 – Present
                  </p>
                </div>
                <a
                  href="http://95.130.227.141/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </a>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Developed a modular ERP client using React, TypeScript, and Tailwind CSS, featuring 60+ pages for
                Accounting, HR, Budgeting, CashFlow, WMS, and POS.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Performance Optimization</h4>
                    <p className="text-muted-foreground text-sm">
                      Implemented responsive dashboards with ApexCharts for real-time analytics, improving
                      decision-making efficiency by 15%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Security & Access Control</h4>
                    <p className="text-muted-foreground text-sm">
                      Built role-based access control (RBAC) and integrated REST APIs, ensuring secure and seamless data
                      management across modules.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "ApexCharts", "REST APIs", "RBAC"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
