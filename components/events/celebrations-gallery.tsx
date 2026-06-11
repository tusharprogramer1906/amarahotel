import Image from "next/image"
import Link from "next/link"

const galleryItems = [
  {
    src: "/amara-hotel-banquet-decoration-delhi.webp",
    alt: "Elegant banquet decoration at Amara Hotel GK1 South Delhi for birthday and engagement events",
    caption: "Birthday & Anniversary Setups",
  },
  {
    src: "/amara-hotel-stage-event-setup.webp",
    alt: "Stage event setup at Amara Hotel banquet hall Greater Kailash South Delhi",
    caption: "Engagement Ceremonies",
  },
  {
    src: "/amara-hotel-dj-stage-event.webp",
    alt: "DJ stage event at Amara Hotel banquet hall GK1 Delhi",
    caption: "Private Celebrations",
  },
  {
    src: "/amara-hotel-event-presentation-setup.webp",
    alt: "Corporate event presentation setup at Amara Hotel banquet hall near Nehru Place",
    caption: "Corporate Gatherings",
  },
  {
    src: "/amara-hotel-banquet-hall-delhi.webp",
    alt: "Amara Hotel banquet hall interior in Greater Kailash Delhi for events",
    caption: "Banquet Hall Interiors",
  },
  {
    src: "/amara-hotel-banquet-hall-interior.webp",
    alt: "Interior view of the banquet hall at Amara Hotel GK1 South Delhi",
    caption: "Intimate Gatherings",
  },
]

export function CelebrationsGallery() {
  return (
    <section className="py-16 md:py-24 bg-[#faf7f4]">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-12 fade-in-up">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">
            Event Gallery
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Celebrations at Amara
          </h2>
          <p className="text-[#555] text-base leading-relaxed max-w-2xl mx-auto">
            Explore moments from birthdays, engagements, corporate gatherings and private
            celebrations hosted at Amara.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="overflow-hidden bg-white border border-[#e8e1d8] rounded-2xl hover:shadow-lg hover:border-[#c89347]/30 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={75}
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              <div className="px-5 py-4">
                <p className="font-semibold text-[#1a1a1a] text-sm">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — scrolls to existing enquiry/contact section */}
        <div className="text-center fade-in-up">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#c89347] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#b8813a] transition-colors duration-300 rounded shadow-lg shadow-[#c89347]/20"
          >
            Plan Your Event
          </Link>
          <p className="text-[#999] text-xs mt-4">
            ✓ Custom packages &nbsp;·&nbsp; ✓ Flexible dates &nbsp;·&nbsp; ✓ Instant response
          </p>
        </div>

      </div>
    </section>
  )
}
