import { BadgeCheck, Zap, PhoneCall } from "lucide-react"

const BOOKING_URL =
  "https://hotels.eglobe-solutions.com/amarahoteldelhi/booking/hotels/amara-hotel-new-delhi"

const benefits = [
  {
    icon: BadgeCheck,
    title: "Best Rate Guaranteed",
    desc: "Book here and pay less than any OTA. Always.",
  },
  {
    icon: Zap,
    title: "Instant Confirmation",
    desc: "Your booking is confirmed immediately — no waiting.",
  },
  {
    icon: PhoneCall,
    title: "Direct Hotel Contact",
    desc: "Speak directly to us — no middleman, no hold music.",
  },
]

export function BookDirectBanner() {
  return (
    <section className="bg-[#1a1a1a] border-y border-white/5">
      {/* Top eyebrow strip */}
      <div className="bg-[#c89347] text-center py-2 px-4">
        <p className="text-white text-xs font-bold uppercase tracking-[0.25em]">
          Why book direct — and why it matters for you
        </p>
      </div>

      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] px-8 py-8 flex flex-col gap-3 group hover:bg-[#c89347]/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c89347]/15 flex items-center justify-center group-hover:bg-[#c89347]/25 transition-colors">
                  <Icon className="w-5 h-5 text-[#c89347]" />
                </div>
                <h3 className="font-semibold text-white text-sm md:text-base">{title}</h3>
              </div>
              <p className="text-white/55 text-sm leading-relaxed pl-[52px]">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c89347] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#b8813a] transition-colors duration-300 rounded-lg shadow-lg shadow-[#c89347]/20"
          >
            Book Direct — Get Best Price
          </a>
          <p className="text-white/40 text-xs">
            ✓ No booking fees &nbsp;·&nbsp; ✓ Secure payment &nbsp;·&nbsp; ✓ Best rate or we match it
          </p>
        </div>
      </div>
    </section>
  )
}
