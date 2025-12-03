"use client"

import { Download, FileText } from "lucide-react"


export function ResumeSection() {
  const handleDownload = async () => {
    try {
      // Check if file exists by making a HEAD request
      const response = await fetch("/resume/Karimov-Habibulloh.pdf", { method: "HEAD" })

      if (!response.ok) {
        alert("Sorry, resume file is currently unavailable. Please try again later.")
        return
      }

      // Create a temporary link to download the resume
      const link = document.createElement("a")
      link.href = "/resume/Karimov-Habibulloh.pdf"
      link.download = "Karimov-Habibulloh-Resume.pdf"
      link.target = "_blank"
      link.rel = "noopener noreferrer"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error downloading resume:", error)
      alert("Sorry, there was an error downloading the resume. Please try again later.")
    }
  }

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Download Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a comprehensive overview of my experience, skills, and achievements
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-12 border border-border">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <FileText className="w-12 h-12 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">Professional Resume</h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Download my complete resume with detailed information about my professional experience, technical skills,
              and project achievements.
            </p>

            <button
              onClick={handleDownload}
              className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              <Download className="w-5 h-5 mr-3" />
              Download Resume (PDF)
            </button>

            <p className="text-sm text-muted-foreground/70 mt-4">Last updated: December 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}
