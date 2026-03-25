"use client"

import { useState, useEffect } from "react"
import { CalendarCheck } from "lucide-react"

const BOOKING_URL =
  "https://hotels.eglobe-solutions.com/amarahoteldelhi/booking/hotels/amara-hotel-new-delhi"

export function FloatingBookBtn() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-1 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-xl bg-[#c89347] opacity-30 animate-ping" aria-hidden />
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2.5 px-6 py-3.5 bg-[#c89347] text-white rounded-xl shadow-2xl shadow-[#c89347]/40 hover:bg-[#b8813a] hover:shadow-[#c89347]/60 transition-all duration-300 hover:-translate-y-0.5 group"
      >
        <CalendarCheck className="w-5 h-5 shrink-0" />
        <div>
          <p className="font-bold text-sm leading-none">Book Now</p>
          <p className="text-white/70 text-[10px] mt-0.5 font-medium">Best Rate Guaranteed</p>
        </div>
      </a>
    </div>
  )
}
