import Link from "next/link"
import { CalendarCheck } from "lucide-react"

const BOOKING_URL =
  "https://hotels.eglobe-solutions.com/amarahoteldelhi/booking/hotels/amara-hotel-new-delhi"

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-[#c89347] relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} aria-hidden />

      <div className="container relative text-center fade-in-up">
        {/* Urgency indicators */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm text-white/90 text-xs font-semibold px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" aria-hidden />
            Limited rooms available today
          </div>
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm text-white/90 text-xs font-semibold px-4 py-2 rounded-full">
            <CalendarCheck className="w-3.5 h-3.5" />
            Booked multiple times in last 24 hours
          </div>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          Plan Your Perfect Stay
        </h2>
        <p className="text-white/85 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're visiting for business, a romantic getaway, or a special celebration — Amara Hotel in Greater Kailash delivers a premium experience at every turn.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#1a1a1a] text-white font-bold text-sm uppercase tracking-widest hover:bg-black transition-colors duration-300 rounded-lg shadow-lg shadow-black/30"
          >
            Book a Room Now
          </a>
          <Link
            href="/banquet"
            className="px-10 py-4 border-2 border-white text-white font-semibold text-sm uppercase tracking-widest hover:bg-white hover:text-[#c89347] transition-colors duration-300 rounded-lg"
          >
            Enquire for Events &amp; Banquets
          </Link>
        </div>

        <p className="text-white/60 text-xs mt-6">
          Best rate guaranteed on direct booking &nbsp;·&nbsp; No hidden charges
        </p>
      </div>
    </section>
  )
}
