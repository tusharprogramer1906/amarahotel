"use client"

import { Phone } from "lucide-react"

const BOOKING_URL =
  "https://hotels.eglobe-solutions.com/amarahoteldelhi/booking/hotels/amara-hotel-new-delhi"
const PHONE = "+919268140219"

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Urgency strip */}
      <div className="bg-[#1a1a1a] text-center py-1.5 border-t border-[#c89347]/30">
        <p className="text-[#c89347] text-[10px] font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c89347] animate-pulse inline-block" aria-hidden />
          Limited rooms available — book direct for best rate
        </p>
      </div>
      {/* Buttons */}
      <div className="flex border-t border-white/10 shadow-2xl">
        <a
          href={`tel:${PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[#1a1a1a] py-4 text-white text-sm font-semibold border-r border-white/10 hover:bg-[#2a2a2a] transition-colors active:scale-95"
        >
          <Phone className="w-4 h-4 text-[#c89347]" />
          Call Now
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#c89347] py-4 text-white text-sm font-bold uppercase tracking-wider hover:bg-[#b8813a] transition-colors active:scale-95"
        >
          Book Now
        </a>
      </div>
    </div>
  )
}
