import type { Metadata } from "next"
import { PageBanner } from "@/components/ui/page-banner"
import { RoomCard } from "@/components/rooms/room-card"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Rooms at Amara Hotel, Greater Kailash 1 (GK1) | Book from ₹3,999",
  description:
    "Book deluxe & super deluxe rooms at Amara Hotel in Greater Kailash 1 (GK1), South Delhi. Modern amenities, complimentary breakfast, best rate guaranteed. Reserve directly.",
  openGraph: {
    title: "Rooms at Amara Hotel, Greater Kailash 1 (GK1) | Book from ₹3,999",
    description:
      "Deluxe and super deluxe rooms at Amara Hotel, GK1, South Delhi. Best rates, breakfast included. Book direct.",
    url: `${siteConfig.url}/rooms`,
    images: ["/amara-hotel-bedroom-luxury-room.webp"],
  },
  alternates: {
    canonical: `${siteConfig.url}/rooms`,
  },
}

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "Rs. 3,999",
      image: "/amara-hotel-deluxe-room-interior.webp",
      description: "Spacious and elegantly appointed rooms with modern amenities",
      amenities: ["1 Bed", "2 People", "Breakfast", "Wi-Fi"],
      specs: ["32 m²", "Max 2 Guests"],
    },
    {
      id: 2,
      name: "Super Deluxe Room",
      price: "Rs. 4,999",
      image: "/amara-hotel-super-deluxe-room-delhi.webp",
      description: "Enhanced deluxe rooms with additional living space and premium views",
      amenities: ["1 Bed", "2 People", "Breakfast", "Wi-Fi"],
      specs: ["42 m²", "Max 2 Guests"],
    },
  ]

  return (
    <>
      <PageBanner
        title="Rooms & Suites"
        subtitle="Discover our collection of elegantly appointed accommodations"
        backgroundImage="/amara-hotel-bedroom-luxury-room.webp"
      />

      <section className="section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Amara Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-headline text-center mb-12 text-primary-foreground">Why Choose Our Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Comfort",
                description:
                  "Luxury bedding, climate control, and thoughtfully designed spaces ensure your perfect rest",
              },
              {
                title: "Modern Technology",
                description: "High-speed Wi-Fi, smart TV systems, and connected amenities for seamless convenience",
              },
              {
                title: "Exceptional Service",
                description: "Dedicated concierge, room service, and personalized assistance available 24/7",
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-serif font-bold mb-3 text-primary-foreground">{feature.title}</h3>
                <p className="text-primary-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
