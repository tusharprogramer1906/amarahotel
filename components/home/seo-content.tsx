import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

const features = [
  "Boutique luxury rooms with premium furnishings",
  "24/7 front desk & personalized concierge service",
  "Elegant banquet hall for weddings, corporate events & private celebrations",
  "Prime address in Greater Kailash 1, South Delhi",
]

export function SeoContent() {
  return (
    <>
      {/* Section 1: Why Choose Amara Hotel in GK1 */}
      <section className="py-16 md:py-24 bg-[#faf7f4]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">The Amara Experience</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-5">
              Why Choose Amara Hotel in GK1
            </h2>
            <p className="text-base text-[#555] leading-relaxed mb-5">
              Amara Hotel Greater Kailash is a <strong className="text-[#1a1a1a]">premium boutique hotel in South Delhi</strong> that pairs refined interiors with warm, personalised service. As the <strong className="text-[#1a1a1a]">official website</strong> of Amara Hotel, direct bookings get you the best available rate — no third-party markups.
            </p>
            <p className="text-base text-[#555] leading-relaxed mb-7">
              Thoughtfully designed rooms, a calm residential neighbourhood, and easy access to Nehru Place and M Block Market make this the preferred address for both leisure and business travelers visiting Greater Kailash.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c89347] mt-0.5 shrink-0" />
                  <span className="text-[#555] text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#e8e1d8] pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">From Our Journal</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/why-greater-kailash-1-is-the-perfect-location-to-stay-in-south-delhi" className="text-sm text-[#c89347] hover:underline">
                  Why GK-1 is Perfect →
                </Link>
                <span className="text-[#ccc]">|</span>
                <Link href="/blog/hotels-in-greater-kailash-1-new-delhi" className="text-sm text-[#c89347] hover:underline">
                  Hotels in Greater Kailash 1 →
                </Link>
                <span className="text-[#ccc]">|</span>
                <Link href="/blog/best-banquet-hall-in-greater-kailash-for-private-celebrations" className="text-sm text-[#c89347] hover:underline">
                  Best Banquet Hall GK →
                </Link>
                <span className="text-[#ccc]">|</span>
                <Link href="/blog" className="text-sm text-[#c89347] hover:underline">
                  View All Posts →
                </Link>
              </div>
            </div>
          </div>

          <div className="relative fade-in-up">
            <div className="absolute -top-5 -left-5 w-full h-full bg-[#c89347]/10 rounded-3xl" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/amara-hotel-event-banquet-gk1.webp"
                alt="Elegant banquet hall at Amara Hotel Greater Kailash for events in South Delhi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={75}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Hotel Near Nehru Place for Business Travelers */}
      <section className="py-16 md:py-24 bg-[#1a1a1a]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1 fade-in-up">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/amara-hotel-deluxe-room-south-delhi.webp"
                alt="Deluxe room near Nehru Place at Amara Hotel GK1 South Delhi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={75}
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 fade-in-up">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">Business Stays</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5">
              Hotel Near Nehru Place for Business Travelers
            </h2>
            <p className="text-base text-white/65 leading-relaxed mb-5">
              If your work brings you to <strong className="text-white">Nehru Place</strong> — Delhi's largest IT and commercial hub — Amara Hotel is the ideal base. Located in GK1, you're just minutes away by metro or cab, without having to stay in a commercial, impersonal business district.
            </p>
            <p className="text-base text-white/65 leading-relaxed mb-7">
              Our rooms are equipped with fast Wi-Fi, ergonomic workspaces, and premium bedding — because rest and productivity should never be a compromise on a work trip.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Nehru Place Distance", value: "~10 min" },
                { label: "GK Metro Station", value: "~5 min" },
                { label: "M Block Market", value: "~3 min" },
                { label: "Check-in Time", value: "12 Noon" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-[#c89347] font-bold text-xl leading-none">{stat.value}</p>
                  <p className="text-white/50 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://hotels.eglobe-solutions.com/amarahoteldelhi/booking/hotels/amara-hotel-new-delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-[#c89347] text-white font-semibold text-sm uppercase tracking-widest hover:bg-[#b8813a] transition-colors duration-300 rounded-lg"
            >
              Book Your Business Stay
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
