"use client"

import { useEffect, useRef } from "react"

export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const stars = []
    const numStars = 200

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      stars.length = 0
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0f0f23")
      gradient.addColorStop(0.5, "#1e1e3f")
      gradient.addColorStop(1, "#0f0f23")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and animate stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Add twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))

        // Move stars
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = -star.size
          star.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    createStars()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createStars()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}
