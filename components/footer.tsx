"use client"

import { Github, Linkedin, Mail, Heart, Phone, TextIcon as Telegram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="tel:+998913457245"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                +998 91-345-72-45
              </a>
              <a
                href="mailto:karimovhabibulloh147@gmail.com"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                karimovhabibulloh147@gmail.com
              </a>
              <a
                href="https://t.me/habibulloh90"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Telegram className="w-4 h-4 mr-2" />
                @habibulloh90
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Habibulloh08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2 rounded-lg hover:bg-secondary"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/habibulloh-karimov-5b87a2293/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2 rounded-lg hover:bg-secondary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/habibulloh90"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2 rounded-lg hover:bg-secondary"
              >
                <Telegram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">About</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ReactJS Team Lead Developer specializing in modern web applications with React, TypeScript, and Next.js.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Habibulloh Karimov</h3>
          <p className="text-muted-foreground/70 text-sm flex items-center justify-center mb-4">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground/70 text-sm">© 2025 Habibulloh Karimov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
