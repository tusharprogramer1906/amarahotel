import Image from "next/image"

const IG_URL = "https://www.instagram.com/hotelamaragk/"
const BOOKING_URL =
  "https://hotels.eglobe-solutions.com/amarahoteldelhi/booking/hotels/amara-hotel-new-delhi"

// Each post carries aspirational copy and a hashtag — no vanity metrics
const posts = [
  {
    src: "/amara-hotel-bedroom-luxury-room.webp",
    alt: "Morning light in a luxury room at Amara Hotel GK1",
    caption: "Your morning, uninterrupted. Wake up to calm South Delhi light.",
    hashtag: "#AmaragGK",
    featured: true,
    guestFavorite: false,
  },
  {
    src: "/amara-hotel-deluxe-room-interior.webp",
    alt: "Deluxe Room at Amara Hotel Greater Kailash",
    caption: "Rooms that feel like home — only better.",
    hashtag: "#LuxuryStayDelhi",
    featured: false,
    guestFavorite: true,
  },
  {
    src: "/amara-hotel-corridor-interior.webp",
    alt: "Lobby corridor at Amara Hotel South Delhi",
    caption: "The entrance that tells you everything about the stay ahead.",
    hashtag: "#BoutiqueHotelGK1",
    featured: false,
    guestFavorite: false,
  },
  {
    src: "/amara-hotel-event-banquet-gk1.webp",
    alt: "Banquet hall at Amara Hotel Greater Kailash",
    caption: "Celebrations your guests will talk about for years.",
    hashtag: "#AmaraEvents",
    featured: false,
    guestFavorite: true,
  },
  {
    src: "/amara-hotel-coffee-service.webp",
    alt: "Café corner at Amara Hotel GK1",
    caption: "Before the city wakes up, this corner is all yours.",
    hashtag: "#MorningRitual",
    featured: false,
    guestFavorite: false,
  },
  {
    src: "/amara-hotel-lounge-seating.webp",
    alt: "Lounge seating at Amara Hotel South Delhi",
    caption: "Where business trips start feeling like getaways.",
    hashtag: "#GK1Delhi",
    featured: false,
    guestFavorite: false,
  },
]

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}


export function InstagramSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0f0f0f]">
      <div className="container">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="text-center mb-12 fade-in-up">
          {/* Handle + verified badge — no metrics */}
          <div className="inline-flex items-center gap-3 bg-white/[0.05] border border-white/10 rounded-full px-5 py-2 mb-6">
            <InstagramIcon className="w-4 h-4 text-[#c89347]" />
            <span className="text-white/80 text-sm font-semibold">@hotelamaragk</span>
            <span className="w-px h-4 bg-white/15" />
            <span className="flex items-center gap-1 bg-[#c89347]/20 text-[#c89347] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden>
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Official
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
            See Amara Through Our Guests
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto leading-relaxed">
            Real moments. Real experiences. A glimpse into what awaits you at Amara.
          </p>
        </div>

        {/* ── Asymmetric editorial grid ──────────────────────── */}
        {/*
          Desktop layout (md+):
          [ FEATURED — 2 rows tall ] [ img2 ] [ img3 ]
          [ FEATURED — 2 rows tall ] [ img4 ] [ img5 ]
          [ img6 — full width 3 cols ]
          
          Mobile: plain 2-col grid
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12 max-w-4xl mx-auto fade-in-up">
          {posts.map((post, i) => (
            <a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View on Instagram: ${post.alt}`}
              className={`group relative overflow-hidden rounded-2xl block ${
                post.featured
                  ? "md:row-span-2 aspect-[4/5] md:aspect-auto"   // tall on desktop, portrait on mobile
                  : i === 5
                  ? "col-span-2 md:col-span-1 aspect-video md:aspect-square" // wide on mobile, square on desktop
                  : "aspect-square"
              }`}
            >
              {/* Photo */}
              <Image
                src={post.src}
                alt={post.alt}
                fill
                sizes={
                  post.featured
                    ? "(max-width: 768px) 50vw, 33vw"
                    : i === 5
                    ? "(max-width: 768px) 100vw, 33vw"
                    : "(max-width: 640px) 50vw, 33vw"
                }
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={78}
                loading="lazy"
              />

              {/* Permanent bottom gradient with caption + meta */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent px-4 py-4">
                {/* Guest Favorite badge */}
                {post.guestFavorite && (
                  <span className="inline-block bg-[#c89347] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2">
                    Guest Favorite
                  </span>
                )}
                <p className="text-white/90 text-xs leading-snug mb-2 italic">{post.caption}</p>
                <span className="text-white/45 text-[10px] font-medium">{post.hashtag}</span>
              </div>

              {/* Hover overlay — IG icon + CTA */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-400 flex flex-col items-center justify-center gap-2.5 rounded-2xl">
                <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-3 group-hover:translate-y-0">
                  <InstagramIcon className="w-8 h-8 text-white" />
                  <span className="text-white text-xs font-semibold tracking-wide">View on Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Booking bridge — the section's conversion engine ── */}
        {/* This turns a social-browsing moment into a booking intent */}
        <div className="max-w-2xl mx-auto bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-8 text-center mb-8 fade-in-up">
          <p className="text-white/45 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Inspired by what you see?</p>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Book your stay and create your own moments at Amara
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Every photo you see here was taken by a real guest. Your story starts the moment you arrive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c89347] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#b8813a] transition-colors duration-300 rounded-xl shadow-lg shadow-[#c89347]/20"
            >
              Book Your Stay
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/55 text-sm hover:text-[#c89347] transition-colors duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
              Follow @hotelamaragk
            </a>
          </div>
        </div>

        {/* ── Hashtag strip — authenticity signal ─────────────── */}
        <div className="flex flex-wrap justify-center gap-2 fade-in-up">
          {["#AmaragGK", "#LuxuryDelhi", "#GK1Hotel", "#BoutiqueHotelDelhi", "#SouthDelhiStay", "#HotelAmara"].map((tag) => (
            <a
              key={tag}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 text-xs hover:text-[#c89347]/70 transition-colors duration-200 font-medium"
            >
              {tag}
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
