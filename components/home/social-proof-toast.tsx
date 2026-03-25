"use client"

import { useState, useEffect, useCallback } from "react"
import { X, User } from "lucide-react"

const SIGNALS = [
  { name: "Rahul S.", city: "Delhi", action: "just booked a Deluxe Room", time: "2 min ago" },
  { name: "Priya M.", city: "Gurugram", action: "checked in today", time: "12 min ago" },
  { name: "Amit K.", city: "Noida", action: "just booked a Super Deluxe Room", time: "25 min ago" },
  { name: "Sunita R.", city: "Mumbai", action: "booked for this weekend", time: "34 min ago" },
  { name: "Vikram J.", city: "Bangalore", action: "just made a reservation", time: "1 hr ago" },
]

export function SocialProofToast() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const cycle = useCallback(() => {
    // Fade out → change message → fade in
    setVisible(false)
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % SIGNALS.length)
      setVisible(true)
    }, 500)
  }, [])

  useEffect(() => {
    if (dismissed) return
    // Show first toast after 4s
    const showTimer = setTimeout(() => setVisible(true), 4000)
    // Cycle every 8s
    const cycleTimer = setInterval(cycle, 8000)
    return () => {
      clearTimeout(showTimer)
      clearInterval(cycleTimer)
    }
  }, [dismissed, cycle])

  if (dismissed) return null

  const signal = SIGNALS[index]

  return (
    <div
      className={`fixed bottom-24 left-4 z-50 transition-all duration-500 md:bottom-6 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="bg-white border border-[#e8e1d8] rounded-2xl shadow-2xl shadow-black/10 flex items-start gap-3 px-4 py-3 max-w-[280px]">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-[#c89347]/15 flex items-center justify-center shrink-0 mt-0.5">
          <User className="w-4 h-4 text-[#c89347]" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[#1a1a1a] text-xs font-semibold leading-snug">
            <span className="text-[#c89347]">{signal.name}</span> from {signal.city}
          </p>
          <p className="text-[#666] text-xs mt-0.5 leading-snug">{signal.action}</p>
          <p className="text-[#aaa] text-[10px] mt-1 font-medium">{signal.time}</p>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-[#ccc] hover:text-[#666] transition-colors shrink-0 mt-0.5"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
