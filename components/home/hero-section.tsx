import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/hero-hotel-exterior.png)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="mb-8">
          <h1 className="text-display text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            AMARA
          </h1>
          <p
            className="text-subheadline text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Where Luxury Meets Elegance
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="/booking"
            className="px-8 py-4 bg-[#c89347] text-white font-medium hover:bg-[#b8813a] transition-colors animate-slide-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Book Now
          </Link>
          <Link
            href="/rooms"
            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-accent transition-colors animate-slide-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            View Rooms
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  )
}
