"use client"

import { useEffect, useRef } from "react"

export function BackgroundBeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Beam properties
    const beams: Array<{
      x: number
      y: number
      angle: number
      speed: number
      length: number
      opacity: number
      hue: number
    }> = []

    // Create beams
    for (let i = 0; i < 8; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1,
        length: 100 + Math.random() * 200,
        opacity: 0.1 + Math.random() * 0.3,
        hue: 220 + Math.random() * 60,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        // Update beam position
        beam.x += Math.cos(beam.angle) * beam.speed
        beam.y += Math.sin(beam.angle) * beam.speed

        // Wrap around screen
        if (beam.x < -beam.length) beam.x = canvas.width + beam.length
        if (beam.x > canvas.width + beam.length) beam.x = -beam.length
        if (beam.y < -beam.length) beam.y = canvas.height + beam.length
        if (beam.y > canvas.height + beam.length) beam.y = -beam.length

        // Calculate end position
        const endX = beam.x + Math.cos(beam.angle) * beam.length
        const endY = beam.y + Math.sin(beam.angle) * beam.length

        // Create gradient
        const gradient = ctx.createLinearGradient(beam.x, beam.y, endX, endY)

        // Add color stops with proper RGBA format
        gradient.addColorStop(0, `hsla(${beam.hue}, 70%, 60%, ${beam.opacity})`)
        gradient.addColorStop(0.5, `hsla(${beam.hue}, 70%, 60%, ${beam.opacity * 0.5})`)
        gradient.addColorStop(1, `hsla(${beam.hue}, 70%, 60%, 0)`)

        // Draw beam
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.lineCap = "round"

        ctx.beginPath()
        ctx.moveTo(beam.x, beam.y)
        ctx.lineTo(endX, endY)
        ctx.stroke()

        // Add glow effect
        ctx.shadowColor = `hsl(${beam.hue}, 70%, 60%)`
        ctx.shadowBlur = 10
        ctx.stroke()
        ctx.shadowBlur = 0
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-50"
      style={{ background: "transparent" }}
    />
  )
}
