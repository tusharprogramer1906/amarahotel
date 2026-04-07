import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Cake,
  Gem,
  BriefcaseBusiness,
  Heart,
  MapPin,
  Wind,
  Lightbulb,
  Palette,
  UtensilsCrossed,
  CheckCircle2,
  Quote,
  Star,
  CalendarCheck,
  Phone,
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Best Banquet Hall in Greater Kailash (GK1) | Amara Hotel Delhi",
  description:
    "Looking for a banquet hall in Greater Kailash or near Nehru Place? Amara Hotel offers a premium venue for birthdays, engagements & corporate events. Book now.",
  openGraph: {
    title: "Best Banquet Hall in Greater Kailash (GK1) | Amara Hotel Delhi",
    description:
      "Premium banquet hall in GK1, South Delhi. Ideal for birthdays, engagements, weddings & corporate events near Nehru Place. Custom décor & catering.",
    url: `${siteConfig.url}/banquet`,
    images: ["/amara-hotel-event-banquet-gk1.webp"],
  },
  alternates: {
    canonical: `${siteConfig.url}/banquet`,
  },
}

const eventTypes = [
  { icon: Cake, label: "Birthday Parties & Anniversaries" },
  { icon: Gem, label: "Engagement Ceremonies" },
  { icon: BriefcaseBusiness, label: "Corporate Meetings & Events" },
  { icon: Heart, label: "Intimate Weddings & Gatherings" },
]

const details = [
  { icon: CheckCircle2, text: "Capacity: Ideal for 30–80 guests" },
  { icon: Wind, text: "Fully Air-Conditioned Indoor Hall" },
  { icon: Lightbulb, text: "Modern Interiors with Elegant Lighting" },
  { icon: Palette, text: "Custom Decoration Available" },
  { icon: UtensilsCrossed, text: "Food & Catering Support Available" },
  { icon: MapPin, text: "Prime Location in Greater Kailash-1 (GK1)" },
]

const whyUs = [
  "Prime location near Nehru Place & GK1 markets",
  "Clean, modern, and well-maintained venue",
  "Quick and smooth event setup",
  "Trusted by 100+ event hosts",
]

const testimonials = [
  {
    name: "Neha R.",
    event: "Engagement Ceremony",
    rating: 5,
    text: "Hosted my engagement here. The decoration and management were excellent. Everything was smooth and stress-free. Highly recommend Amara for any celebration in GK1.",
  },
  {
    name: "Vikram S.",
    event: "Birthday Party",
    rating: 5,
    text: "Perfect venue for birthday parties in GK1. Great location and very cooperative staff. The banquet hall looked stunning and our guests were thoroughly impressed.",
  },
  {
    name: "Priya M.",
    event: "Corporate Event",
    rating: 4,
    text: "We booked for a corporate team event. The setup was professional, AV equipment was ready, and the catering was excellent. Ideal venue near Nehru Place.",
  },
]

const venues = [
  {
    name: "Weddings & Receptions",
    capacity: "Up to 80 guests",
    description:
      "Intimate, elegant, and completely yours. Our banquet hall is designed for weddings that feel personal — not like a factory event.",
    image: "/amara-hotel-banquet-decoration-delhi.webp",
  },
  {
    name: "Conferences & Meetings",
    capacity: "30–50 seats",
    description:
      "Modern AV setup, high-speed Wi-Fi, and a professional environment. Minutes from Nehru Place — perfect for corporate teams.",
    image: "/conference.JPG",
  },
  {
    name: "Social Celebrations",
    capacity: "Up to 80 guests",
    description:
      "Birthdays, anniversaries, baby showers — any milestone deserves the right stage. Our team makes every celebration seamless.",
    image: "/amara-hotel-event-banquet-gk1.webp",
  },
  {
    name: "Engagements & Occasions",
    capacity: "30–60 guests",
    description:
      "From engagement ceremonies to pre-wedding functions — curated décor, great food, and meticulous coordination included.",
    image: "/amara-hotel-stage-event-setup.webp",
  },
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "Amara Hotel Banquet Hall",
  "image": "https://amara.heaven-hotels.com/amara-hotel-event-banquet-gk1.webp",
  "description":
    "Premium banquet hall in Greater Kailash (GK1), South Delhi, ideal for birthdays, engagements, corporate events and small weddings.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C-30, Hansraj Gupta Rd, Greater Kailash-1",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110048",
    "addressCountry": "IN",
  },
  "telephone": "+91-9268140219",
  "url": "https://amara.heaven-hotels.com/banquet",
  "priceRange": "₹₹",
  "servesCuisine": "Multi-cuisine",
  "maximumAttendeeCapacity": 80,
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Air Conditioned Hall", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Custom Decoration", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Catering Available", "value": true },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.0",
    "reviewCount": "100",
  },
  "sameAs": ["https://www.instagram.com/hotelamaragk/"],
}

export default function BanquetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ── HERO SECTION ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/amara-hotel-event-banquet-gk1.webp"
          alt="Elegant banquet hall at Amara Hotel Greater Kailash South Delhi for events and celebrations"
          fill
          priority
          fetchPriority="high"
          quality={85}
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark cinematic overlay — matches homepage */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[1]" />

        {/* Decorative gold line — matches homepage */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#c89347] to-transparent z-[2]" />

        {/* Content — center aligned, same padding as homepage */}
        <div className="relative z-10 container text-center text-white px-4 pt-24 pb-20">

          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-[#c89347]/90 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
            Limited Dates Available
          </div>

          {/* H1 */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
            Elegant Banquet Hall in<br className="hidden sm:block" /> GK1, South Delhi
          </h1>

          {/* Subheadline — single clean line */}
          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Perfect for Birthdays, Engagements &amp; Corporate Events
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center mb-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Link
                href="/contact"
                className="group relative px-10 py-4 bg-[#c89347] text-white font-semibold text-base uppercase tracking-widest hover:bg-[#b8813a] transition-all duration-300 shadow-lg shadow-[#c89347]/30 hover:shadow-[#c89347]/50 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10">Check Availability</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <a
                href="tel:+919268140219"
                className="px-10 py-4 border-2 border-white/70 text-white font-semibold text-base uppercase tracking-widest hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
              >
                Book Your Event
              </a>
            </div>

            {/* Trust micro-copy — subtle, matches homepage pattern */}
            <p className="text-white/55 text-xs font-medium tracking-wide">
              ✓ Custom Decor &nbsp;·&nbsp; ✓ Hassle-Free Planning &nbsp;·&nbsp; ✓ In-house Catering
            </p>
          </div>

          {/* Scroll cue — matches homepage */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5">
              <div className="w-1 h-2.5 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFECT FOR SECTION ──────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#faf7f4]">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">Every Occasion</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              Perfect Venue for Every Celebration
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {eventTypes.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 bg-white border border-[#e8e1d8] rounded-2xl p-6 hover:border-[#c89347]/50 hover:shadow-md transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#c89347]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#c89347]" />
                </div>
                <p className="font-semibold text-[#1a1a1a] text-sm leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANQUET DETAILS ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#0f0f0f]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden fade-in-up">
              <Image
                src="/amara-hotel-banquet-decoration-delhi.webp"
                alt="Premium banquet hall setup at Amara Hotel GK1 South Delhi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Details list */}
            <div className="fade-in-up">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">Venue Specifications</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
                Banquet Hall Details
              </h2>

              <ul className="space-y-4">
                {details.map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#c89347]/15 flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5 text-[#c89347]" />
                    </div>
                    <span className="text-white/85 text-base">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#c89347] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#b8813a] transition-colors rounded"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Enquire Now
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white/80 font-medium text-sm hover:border-[#c89347] hover:text-[#c89347] transition-colors rounded"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENT VENUES GRID ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#faf7f4]">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">Our Spaces</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a]">Our Event Venues</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venues.map((venue, idx) => (
              <div
                key={idx}
                className="overflow-hidden bg-white border border-[#e8e1d8] rounded-2xl hover:shadow-lg hover:border-[#c89347]/30 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={`${venue.name} at Amara Hotel GK1 South Delhi`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    quality={75}
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-1">{venue.name}</h3>
                  <p className="text-xs text-[#c89347] font-semibold uppercase tracking-wide mb-3">
                    Capacity: {venue.capacity}
                  </p>
                  <p className="text-[#666] text-sm leading-relaxed">{venue.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE AMARA BANQUET ─────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#1a1a1a]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">Why Us</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Banquet Hall in GK1?
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Located in the heart of Greater Kailash-1, Amara Hotel offers one of the most convenient and
                premium banquet halls near Nehru Place. Whether you're planning a birthday celebration,
                engagement, or corporate event, our venue is designed to deliver a seamless and memorable
                experience.
              </p>

              <ul className="space-y-4 mb-10">
                {whyUs.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#c89347]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c89347]" />
                    </div>
                    <span className="text-white/80 text-base">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#c89347] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#b8813a] transition-colors rounded"
              >
                <CalendarCheck className="w-4 h-4" />
                Check Availability
              </Link>
            </div>

            <div className="relative h-[460px] rounded-2xl overflow-hidden fade-in-up">
              <Image
                src="/amara-hotel-event-banquet-gk1.webp"
                alt="Why choose Amara Hotel banquet hall in Greater Kailash near Nehru Place"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                loading="lazy"
              />
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                <div className="flex gap-8">
                  <div>
                    <p className="font-bold text-3xl text-white leading-none">100+</p>
                    <p className="text-white/60 text-xs mt-1">Events Hosted</p>
                  </div>
                  <div className="w-px bg-white/15" />
                  <div>
                    <p className="font-bold text-3xl text-white leading-none">30–80</p>
                    <p className="text-white/60 text-xs mt-1">Guest Capacity</p>
                  </div>
                  <div className="w-px bg-white/15" />
                  <div>
                    <p className="font-bold text-3xl text-white leading-none">4.0★</p>
                    <p className="text-white/60 text-xs mt-1">Google Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION SEO SECTION ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#faf7f4]">
        <div className="container max-w-4xl text-center">
          <div className="mb-10 fade-in-up">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">Location</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
              Banquet Hall Near Nehru Place, South Delhi
            </h2>
            <p className="text-[#555] text-base leading-relaxed max-w-2xl mx-auto mb-4">
              If you are searching for a <strong>banquet hall near Nehru Place</strong>, Amara Hotel is the
              perfect choice. Located just minutes away, our venue is easily accessible and ideal for hosting
              events for guests across South Delhi.
            </p>
            <p className="text-[#555] text-base leading-relaxed max-w-2xl mx-auto">
              Our <strong>banquet hall in Greater Kailash</strong> offers the perfect combination of location,
              comfort, and affordability — making it one of the best choices for small to mid-size events in
              Delhi.
            </p>
          </div>

          {/* Connectivity pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 fade-in-up">
            {[
              "10 min from Nehru Place",
              "5 min from GK Metro Station",
              "Near C R Park & Defence Colony",
              "Easy NCR Access via Ring Road",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-[#e8e1d8] rounded-full px-5 py-2.5 text-sm text-[#444] font-medium shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#c89347] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#0f0f0f]">
        <div className="container">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">Guest Reviews</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 flex flex-col gap-5 hover:border-[#c89347]/30 transition-colors duration-300 fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Quote className="w-7 h-7 text-[#c89347] opacity-70" />
                <p className="text-white/75 text-sm leading-relaxed flex-1 italic">"{t.text}"</p>
                <div>
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className={`w-3.5 h-3.5 ${s < t.rating ? "fill-[#c89347] text-[#c89347]" : "fill-white/10 text-white/10"}`} />
                    ))}
                  </div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.event}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/25 text-xs mt-8">
            Ratings based on publicly available guest reviews
          </p>
        </div>
      </section>

      {/* ── CHECK AVAILABILITY CTA ───────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#c89347] relative overflow-hidden">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }}
          aria-hidden
        />

        <div className="container relative text-center fade-in-up max-w-2xl">
          {/* Urgency chip */}
          <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
            Limited event slots available this month
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Check Availability for Your Event
          </h2>
          <p className="text-white/85 text-lg mb-10 leading-relaxed">
            Tell us about your celebration. Our events team will get back to you within a few hours
            to confirm dates and walk you through the packages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1a1a1a] text-white font-bold text-sm uppercase tracking-widest hover:bg-black transition-colors rounded-lg shadow-lg shadow-black/30"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Your Event Date
            </Link>
            <a
              href="tel:+919268140219"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-semibold text-sm uppercase tracking-widest hover:bg-white hover:text-[#c89347] transition-colors rounded-lg"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>

          <p className="text-white/60 text-xs mt-6">
            ✓ Instant response &nbsp;·&nbsp; ✓ No booking fees &nbsp;·&nbsp; ✓ Custom packages available
          </p>
        </div>
      </section>
    </>
  )
}
