"use client"

import { Calendar, MapPin, Users, Code, TrendingUp, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const experiences = [
  {
    id: 1,
    title: "ReactJS Team Lead Developer",
    company: "ExaSoft",
    period: "11/2023 – 08/2025",
    location: "Tashkent",
    description: "Developed user interfaces for an ERP system with CashFlow, HR, POS, Balance, and WMS modules using React, TypeScript, and Ant Design, improving system efficiency by 15%.",
    achievements: [
      {
        icon: Shield,
        title: "Security Implementation",
        description: "Designed and implemented role-based access control (RBAC), securing 100+ user roles and resolving large-scale permission issues.",
        color: "text-green-400",
      },
      {
        icon: Code,
        title: "Architecture Migration",
        description: "Led the migration of the ERP system frontend to Clean Architecture, restructuring the codebase into domain, application, and presentation layers, reducing technical debt by 25%.",
        color: "text-blue-400",
      },
      {
        icon: TrendingUp,
        title: "Performance Optimization",
        description: "Optimized performance for large datasets using React Query and lazy loading, reducing data retrieval latency by 30%.",
        color: "text-purple-400",
      },
      {
        icon: Code,
        title: "API Integration",
        description: "Integrated REST APIs for seamless data exchange across ERP modules and other web applications.",
        color: "text-yellow-400",
      },
      {
        icon: Users,
        title: "Team Leadership",
        description: "Led a team of frontend developers, conducting code reviews and implementing Agile/Scrum practices, reducing sprint delivery time by 20%.",
        color: "text-pink-400",
      },
      {
        icon: Users,
        title: "Mentorship & Collaboration",
        description: "Mentored junior developers and coordinated with backend and design teams to ensure alignment on project requirements and deliverables.",
        color: "text-indigo-400",
      },
    ],
    tech: ["React", "TypeScript", "Ant Design", "Clean Architecture", "React Query", "REST APIs", "RBAC", "Agile/Scrum"],
  },
  {
    id: 2,
    title: "ReactJS Team Lead Developer",
    company: "Yurtal",
    period: "09/2024 – Present",
    location: "Tashkent",
    description: "Led the development of Qadam AI, an AI-powered fitness platform, building and optimizing responsive user interfaces with React, TypeScript, Tailwind CSS, and Material UI.",
    achievements: [
      {
        icon: Code,
        title: "AI & Voice Integration",
        description: "Integrated AI (Google Gemini) and voice recognition (Porcupine) for real-time workout guidance and hands-free interaction.",
        color: "text-blue-400",
      },
      {
        icon: Code,
        title: "Pose Detection & Motion Tracking",
        description: "Implemented pose detection and motion tracking using MediaPipe to analyze exercise form and count repetitions.",
        color: "text-green-400",
      },
      {
        icon: Code,
        title: "State Management",
        description: "Managed state and asynchronous data with Redux Toolkit and React Query for optimized performance.",
        color: "text-purple-400",
      },
      {
        icon: Code,
        title: "Real-Time Features",
        description: "Built and optimized real-time features with Socket.IO to improve user engagement and real-time workout feedback.",
        color: "text-pink-400",
      },
      {
        icon: Users,
        title: "Multilingual Support",
        description: "Delivered a multilingual experience with i18next, ensuring accessibility for diverse user base.",
        color: "text-yellow-400",
      },
      {
        icon: TrendingUp,
        title: "UI/UX Optimization",
        description: "Developed dynamic and responsive Trainer UI components ensuring high performance and scalability across all devices.",
        color: "text-indigo-400",
      },
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Material UI", "Google Gemini", "Porcupine", "MediaPipe", "Redux Toolkit", "React Query", "Socket.IO", "i18next"],
  },
]

export function ExperienceSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % experiences.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  const experience = experiences[currentSlide]

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

        <div className="max-w-5xl mx-auto">
          {/* Animated Carousel Container */}
          <div className="relative min-h-[620px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {/* Slide Content */}
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border overflow-hidden h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{experience.title}</h3>
                      <p className="text-xl text-blue-400 mb-2">{experience.company}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="text-muted-foreground mb-8 leading-relaxed"
                  >
                    {experience.description}
                  </motion.p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {experience.achievements.map((achievement, idx) => {
                      const IconComponent = achievement.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                          className="flex items-start"
                        >
                          <IconComponent className={`w-5 h-5 ${achievement.color} mr-3 mt-1 flex-shrink-0`} />
                          <div>
                            <h4 className="text-foreground font-medium mb-1">{achievement.title}</h4>
                            <p className="text-muted-foreground text-sm">
                              {achievement.description}
                            </p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="flex flex-wrap gap-2"
                  >
                    {experience.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {experiences.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentSlide ? 1 : -1)
                    setCurrentSlide(idx)
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-3 rounded-full transition-all duration-200 ${idx === currentSlide ? "bg-blue-600" : "bg-blue-600/40 hover:bg-blue-600/60"
                    }`}
                  animate={{ width: idx === currentSlide ? "32px" : "12px" }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Slide Counter */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-muted-foreground"
          >
            <span className="text-sm font-medium">
              {currentSlide + 1} / {experiences.length}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
