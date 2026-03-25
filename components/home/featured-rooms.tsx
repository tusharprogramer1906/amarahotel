import Image from "next/image"
import { Wifi, Tv, Wind, Coffee, Bath, CheckCircle2, Flame } from "lucide-react"

const BOOKING_URL =
  "https://hotels.eglobe-solutions.com/amarahoteldelhi/booking/hotels/amara-hotel-new-delhi"

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description:
      "Spacious, well-lit rooms designed for comfort and productivity. Perfect for solo travelers and couples who want a refined base in South Delhi.",
    image: "/deluxe_room.webp",
    features: [
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Wind, label: "Powerful AC" },
      { icon: Tv, label: "Smart TV" },
      { icon: Coffee, label: "In-room Complimentary Tea/Coffee" },
    ],
    tag: null,
    scarcity: "Limited rooms available",
    scarcityColor: "text-amber-400",
  },
  {
    id: 2,
    name: "Super Deluxe Room",
    description:
      "An elevated stay experience with premium furnishings, larger floor area, and enhanced privacy. Ideal for business executives and couples seeking luxury.",
    image: "/superdeluxe.webp",
    features: [
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Wind, label: "Powerful AC" },
      { icon: Tv, label: "Smart TV" },
      { icon: Bath, label: "Premium Bath Amenities" },
    ],
    tag: "Most Popular",
    scarcity: "Few rooms left today",
    scarcityColor: "text-red-400",
  },
]

export function FeaturedRooms() {
  return (
    <section className="py-16 md:py-24 bg-[#0f0f0f]">
      <div className="container">
        <div className="text-center mb-14 fade-in-up">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">Accommodations</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Our Rooms & Suites
          </h2>
          <p className="text-[#a0a0a0] max-w-xl mx-auto text-base leading-relaxed">
            Each room at Amara is designed to deliver comfort, privacy, and a premium boutique experience in Greater Kailash.
          </p>
        </div>

        {/* Urgency bar */}
        <div className="flex items-center justify-center gap-2 bg-[#c89347]/10 border border-[#c89347]/20 rounded-full px-5 py-2 mb-10 w-fit mx-auto">
          <Flame className="w-4 h-4 text-[#c89347]" />
          <span className="text-[#c89347] text-sm font-medium">Booked multiple times in the last 24 hours</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[#c89347]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 flex flex-col fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image}
                  alt={`${room.name} at Amara Hotel Greater Kailash`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={80}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {room.tag && (
                  <div className="absolute top-4 left-4 bg-[#c89347] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {room.tag}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                {/* Scarcity signal per room */}
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse inline-block" />
                  <span className={`text-xs font-semibold ${room.scarcityColor}`}>{room.scarcity}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-2">{room.name}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">{room.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-7">
                  {room.features.map(({ icon: Icon, label }, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c89347] shrink-0" />
                      <span className="text-white/65 text-xs">{label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA + reassurance */}
                <div className="mt-auto">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3.5 bg-[#c89347] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#b8813a] transition-colors duration-300 rounded-lg"
                  >
                    View &amp; Book This Room
                  </a>
                  <p className="text-white/35 text-[10px] text-center mt-2 font-medium">
                    ✓ Instant confirmation &nbsp;·&nbsp; ✓ Secure booking &nbsp;·&nbsp; ✓ Best rate
                  </p>
                  {/* Instagram subtle link */}
                  <a
                    href="https://www.instagram.com/hotelamaragk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 mt-3 text-white/30 text-[11px] hover:text-[#c89347]/70 transition-colors duration-200 group"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0" aria-hidden>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                    </svg>
                    See this room on Instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section-level availability nudge */}
        <div className="text-center mt-10 fade-in-up">
          <p className="text-[#c89347]/80 text-sm font-medium">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c89347] animate-pulse mr-2 align-middle" />
            Secure your room — availability fills up quickly
          </p>
        </div>
      </div>
    </section>
  )
}
