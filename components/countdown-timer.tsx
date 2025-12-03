"use client"

import { useEffect, useState } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Generate random hours between 24-47 hours
    const randomHours = Math.floor(Math.random() * (47 - 24 + 1)) + 24
    const randomMinutes = Math.floor(Math.random() * 60)

    // Set initial time in seconds
    let totalSeconds = randomHours * 3600 + randomMinutes * 60

    const updateTimer = () => {
      // Decrease by 1 second
      totalSeconds--

      // If it reaches 0, reset to random time between 24-47 hours (never actually ends)
      if (totalSeconds <= 0) {
        const newRandomHours = Math.floor(Math.random() * (47 - 24 + 1)) + 24
        const newRandomMinutes = Math.floor(Math.random() * 60)
        totalSeconds = newRandomHours * 3600 + newRandomMinutes * 60
      }

      const hours = Math.floor(totalSeconds / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
      )
    }

    // Initial update
    updateTimer()

    // Update every second
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return <span>Loading...</span>

  return <span className="font-mono font-black text-3xl md:text-4xl text-yellow-300">{timeLeft}</span>
}
