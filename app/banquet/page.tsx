import { PageBanner } from "@/components/ui/page-banner"
import { EventVenues } from "@/components/events/event-venues"
import Link from "next/link"

export default function BanquetPage() {
  return (
    <>
      <PageBanner
        title="Banquets & Events"
        subtitle="Create unforgettable memories with our premium event services"
        backgroundImage="banquet.JPG"
      />

      <EventVenues />

      <section className="section bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-headline mb-6 text-primary-foreground">Why Celebrate at Amara</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Versatile Spaces",
                description: "From intimate gatherings to grand celebrations, we have the perfect venue",
              },
              {
                title: "Expert Planning",
                description: "Our event team handles every detail for a seamless experience",
              },
              { title: "Culinary Excellence", description: "Bespoke menus crafted by our executive chefs" },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container text-center">
          <h2 className="text-headline mb-6">Ready to Plan Your Event?</h2>
          <p className="text-subheadline text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our expert team help you create an unforgettable celebration. Get in touch with us to discuss your event requirements and we'll tailor a perfect package for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#c89347] text-white font-medium hover:bg-[#b8813a] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
