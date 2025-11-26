import { PageBanner } from "@/components/ui/page-banner"
import { EventVenues } from "@/components/events/event-venues"
import Link from "next/link"

export default function BanquetPage() {
  const packages = [
    {
      name: "Silver Package",
      price: 75,
      guests: "Per person",
      features: ["3-Course Dinner", "Basic Decor", "Standard Service", "House Beverages", "Dance Floor"],
    },
    {
      name: "Gold Package",
      price: 125,
      guests: "Per person",
      features: [
        "4-Course Dinner",
        "Premium Decor",
        "White Glove Service",
        "Premium Beverages",
        "Dance Floor",
        "Photography",
      ],
    },
    {
      name: "Platinum Package",
      price: 200,
      guests: "Per person",
      features: [
        "5-Course Dinner",
        "Custom Decor",
        "Personalized Service",
        "Premium Bar",
        "Live Music",
        "Photography",
        "Video",
        "Coordination",
      ],
    },
  ]

  return (
    <>
      <PageBanner
        title="Banquets & Events"
        subtitle="Create unforgettable memories with our premium event services"
        backgroundImage="/placeholder.svg?key=8p3qr"
      />

      <EventVenues />

      <section className="section bg-background">
        <div className="container">
          <h2 className="text-headline text-center mb-12">Event Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-card border border-border p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-serif font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-accent">${pkg.price}</p>
                  <p className="text-sm text-muted-foreground">{pkg.guests}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </>
  )
}
