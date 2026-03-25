import { MapPin, Train, Wifi, Zap, BriefcaseBusiness, ThumbsUp } from "lucide-react"

const reasons = [
  {
    icon: MapPin,
    title: "Prime GK1 Location",
    description: "Situated in the heart of Greater Kailash 1, steps from M Block Market, restaurants, and retail.",
  },
  {
    icon: Train,
    title: "Near Nehru Place & Metro",
    description: "Minutes from Nehru Place IT hub and direct metro access — ideal for business stays.",
  },
  {
    icon: Wifi,
    title: "Clean & Modern Rooms",
    description: "Thoughtfully designed interiors with high-thread-count linens, smart TVs, and powerful AC.",
  },
  {
    icon: Zap,
    title: "Express Check-in Experience",
    description: "Skip the wait. Fast, seamless check-in so you can settle in and unwind immediately.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Ideal for Couples & Business Travelers",
    description: "A discreet, welcoming environment built for both romantic getaways and productive work trips.",
  },
  {
    icon: ThumbsUp,
    title: "High Guest Satisfaction",
    description: "Rated 4.0★ on Google by 1,100+ verified guests. Personal service that makes every stay memorable.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-[#faf7f4]">
      <div className="container">
        <div className="text-center mb-14 fade-in-up">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">Our Advantage</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Why Choose Amara Hotel
          </h2>
          <p className="text-base text-[#666] max-w-xl mx-auto leading-relaxed">
            Everything you need for a comfortable, productive, and memorable stay in South Delhi — all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="group bg-white border border-[#e8e1d8] rounded-2xl p-7 flex flex-col gap-4 hover:border-[#c89347]/50 hover:shadow-lg hover:shadow-[#c89347]/5 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#c89347]/10 flex items-center justify-center group-hover:bg-[#c89347]/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#c89347]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1a1a1a] mb-2">{title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
