"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-parallax-float"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-parallax-float"
          style={{
            animationDelay: "2s",
            transform: `translateY(${scrollY * -0.3}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl animate-parallax-float"
          style={{
            animationDelay: "4s",
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        />
      </div>

      <div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      >
        <div className="animate-slide-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <div className="gradient-text animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-typing overflow-hidden whitespace-nowrap border-r-3 border-current" style={{ animationDelay: "1s" }}>

            </div>
            <br />
            <div
              className="text-foreground animate-typing overflow-hidden whitespace-nowrap border-r-3 border-current"
              style={{ animationDelay: "1s" }}
            >
              Habibulloh  Karimov
            </div>
          </h1>

          <p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in"
            style={{ animationDelay: "6s" }}
          >
            ReactJS Team Lead Developer
          </p>

          <p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "6.5s" }}
          >
            Specializing in modern web applications with React, TypeScript, and Next.js. Building scalable solutions and
            leading development teams.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "7s" }}
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 animate-glow"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground" />
      </div>
    </section>
  )
}
