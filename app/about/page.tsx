import Image from "next/image"
import { Award, Heart, Shield, Star } from "lucide-react"

import { PageBanner } from "@/components/ui/page-banner"

export default function AboutPage() {
  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring an exceptional experience.",
      icon: Star,
    },
    {
      title: "Hospitality",
      description: "Personalized service rooted in warmth so every guest feels at home.",
      icon: Heart,
    },
    {
      title: "Integrity",
      description: "The highest standards of trust and transparency in everything we do.",
      icon: Shield,
    },
    {
      title: "Innovation",
      description: "Modern luxury and forward-thinking amenities for today’s traveler.",
      icon: Award,
    },
  ]

  const stats = [
    { value: "150+", label: "Luxury Rooms" },
    { value: "24/7", label: "Concierge Service" },
    { value: "5-Star", label: "Rating" },
    { value: "100%", label: "Guest Satisfaction" },
  ]

  return (
    <>
      <PageBanner
        title="Our Story"
        subtitle="A Legacy of Luxury and Excellence"
        backgroundImage="/front.JPG"
      />

      <section className="section bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="text-display mb-6">Welcome to Amara Hotel</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Established with a vision to redefine luxury hospitality, Amara Hotel has become a beacon of elegance and
            sophistication. Our commitment to excellence and attention to detail has made us a preferred destination for
            discerning travelers seeking an unforgettable experience.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From our meticulously designed suites to our world-class amenities, every aspect of Amara Hotel reflects our
            dedication to providing an extraordinary stay that exceeds expectations.
          </p>
        </div>
      </section>

      <section className="section bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-headline mb-3">Our Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide us</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 text-center flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-lg bg-[#c89347]/15 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-[#c89347]" />
                </div>
                <h3 className="text-xl font-serif font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">The Amara Experience</p>
            <h2 className="text-headline mb-6">Luxury in Every Detail</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Amara Hotel, we believe that true luxury lies in the details. From the moment you step through our
              doors, you are enveloped in an atmosphere of refined elegance and personalized service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our dedicated team is committed to anticipating your every need, ensuring that your stay is not just
              comfortable, but truly exceptional.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-[#c89347]">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#c89347]/10 rounded-3xl" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/banquet.JPG"
                alt="Luxury Suite"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#0e1a2b] text-white">
        <div className="container text-center">
          <h2 className="text-headline text-white mb-4">Our Commitment</h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Every member of the Amara Hotel team is dedicated to making your stay extraordinary. From our front desk
            staff to our housekeeping and culinary teams, we work together to ensure that every moment of your visit is
            perfect.
          </p>
        </div>
      </section>
    </>
  )
}
