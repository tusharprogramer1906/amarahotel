import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - LCP Optimized with explicit dimensions */}
      <Image
        src="/bedroom.JPG"
        alt="Amara Hotel - Luxury Boutique Hotel in Greater Kailash"
        width={1920}
        height={1080}
        priority
        fetchPriority="high"
        quality={85}
        className="absolute inset-0 w-full h-full object-cover"
        sizes="100vw"
        style={{ 
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      {/* Overlay - rendered after image for proper stacking */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content - Instant on mobile, animated on desktop */}
      <div className="relative z-10 container text-center text-white">
        <div className="mb-8">
          <h1 className="text-display text-white mb-6 md:animate-fade-in-up md:[animation-delay:0.2s]">
            AMARA
          </h1>
          <p className="text-subheadline text-white/90 mb-12 max-w-2xl mx-auto md:animate-fade-in-up md:[animation-delay:0.4s]">
            Where Luxury Meets Elegance
          </p>
        </div>

        {/* CTAs - Instant on mobile, staggered animation on desktop */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="https://hotels.eglobe-solutions.com/amarahoteldelhi/booking/hotels/amara-hotel-new-delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#c89347] text-white font-medium hover:bg-[#b8813a] transition-colors md:animate-slide-in-up md:[animation-delay:0.6s]"
          >
            Book Now
          </a>
          <Link
            href="/rooms"
            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-accent transition-colors md:animate-slide-in-up md:[animation-delay:0.8s]"
          >
            View Rooms
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  )
}
