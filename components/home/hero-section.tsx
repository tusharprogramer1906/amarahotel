import Image from "next/image"
import { Star, ShieldCheck } from "lucide-react"

const BOOKING_URL =
  "https://hotels.eglobe-solutions.com/amarahoteldelhi/booking/hotels/amara-hotel-new-delhi"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/amara-hotel-bedroom-luxury-room.webp"
        alt="Luxury bedroom at Amara Hotel Greater Kailash 1, South Delhi"
        width={1920}
        height={1080}
        priority
        fetchPriority="high"
        quality={85}
        className="absolute inset-0 w-full h-full object-cover"
        sizes="100vw"
        style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[1]" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#c89347] to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4 pt-24 pb-20">

        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 bg-[#c89347]/90 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 mb-8 md:animate-fade-in md:[animation-delay:0s]">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
          Limited Rooms Available Today
        </div>

        {/* H1 */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight md:animate-fade-in-up md:[animation-delay:0.15s]">
          Luxury Stay in GK1,<br className="hidden sm:block" /> South Delhi
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed md:animate-fade-in-up md:[animation-delay:0.3s]">
          Elegant Rooms &nbsp;|&nbsp; Prime Location Near Nehru Place &nbsp;|&nbsp; Couple Friendly Stay
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center mb-10 md:animate-slide-in-up md:[animation-delay:0.45s]">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-[#c89347] text-white font-semibold text-base uppercase tracking-widest hover:bg-[#b8813a] transition-all duration-300 shadow-lg shadow-[#c89347]/30 hover:shadow-[#c89347]/50 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10">Book Now — Best Rate Guaranteed</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/rooms"
              className="px-10 py-4 border-2 border-white/70 text-white font-semibold text-base uppercase tracking-widest hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
            >
              Explore Rooms
            </a>
          </div>
          {/* Reassurance micro-copy — reduces hesitation */}
          <p className="text-white/55 text-xs font-medium tracking-wide">
            ✓ Instant confirmation &nbsp;·&nbsp; ✓ Best rate guaranteed &nbsp;·&nbsp; ✓ Secure booking
          </p>
        </div>

        {/* Trust indicators */}
        <div className="inline-flex items-center gap-4 sm:gap-6 bg-black/40 backdrop-blur-md border border-white/15 px-6 py-3 rounded-full md:animate-fade-in md:[animation-delay:0.6s]">
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? "fill-[#c89347] text-[#c89347]" : "fill-white/20 text-white/20"}`} />
              ))}
            </div>
            <span className="text-white font-semibold text-sm">4.0</span>
          </div>
          <span className="w-px h-4 bg-white/30" />
          <span className="text-white/85 text-sm font-medium">1,100+ Verified Guests</span>
          <span className="w-px h-4 bg-white/30" />
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#c89347]" />
            <span className="text-white/85 text-sm font-medium">Safe & Secure</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
