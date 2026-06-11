import { MapPin, ShoppingBag, Building2, Train, Flower2, Briefcase } from "lucide-react"

const locationHighlights = [
  {
    icon: ShoppingBag,
    name: "Greater Kailash M Block Market",
    description:
      "One of South Delhi's most beloved shopping and dining destinations — boutiques, cafés, and restaurants steps away.",
    distance: "~3 min walk",
  },
  {
    icon: Building2,
    name: "Nehru Place Business District",
    description:
      "Delhi's largest IT and commercial hub, ideal for corporate travelers attending meetings or conferences.",
    distance: "~10 min by cab",
  },
  {
    icon: Train,
    name: "Kailash Colony Metro Station",
    description:
      "Direct metro connectivity to the rest of Delhi and NCR, making city-wide travel seamless and traffic-free.",
    distance: "~5 min walk",
  },
  {
    icon: Flower2,
    name: "Lotus Temple",
    description:
      "An iconic architectural marvel and one of Delhi's most visited cultural landmarks — a must-see attraction nearby.",
    distance: "~15 min by cab",
  },
  {
    icon: Briefcase,
    name: "Okhla Business District",
    description:
      "A key commercial and industrial zone in South Delhi, easily reachable for business travelers and entrepreneurs.",
    distance: "~12 min by cab",
  },
]

export function LocationHighlights() {
  return (
    <section className="py-16 md:py-24 bg-[#0f0f0f]">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-12 fade-in-up">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">
            Where We Are
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Prime Location in South Delhi
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
            Conveniently located in Greater Kailash-1 with easy access to major business,
            shopping and cultural destinations.
          </p>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationHighlights.map(({ icon: Icon, name, description, distance }, i) => (
            <div
              key={i}
              className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-7 flex flex-col gap-4 hover:border-[#c89347]/30 transition-colors duration-300 fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#c89347]/15 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-[#c89347]" aria-hidden />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                  {name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{description}</p>
              </div>

              {/* Distance badge */}
              <div className="flex items-center gap-2 border-t border-white/10 pt-4">
                <MapPin className="w-3.5 h-3.5 text-[#c89347] shrink-0" aria-hidden />
                <span className="text-[#c89347] text-xs font-semibold uppercase tracking-wide">
                  {distance}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
