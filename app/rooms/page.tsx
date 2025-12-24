import type { Metadata } from "next"
import { PageBanner } from "@/components/ui/page-banner"
import { RoomCard } from "@/components/rooms/room-card"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Rooms & Suites - Luxury Accommodations in Greater Kailash, Delhi",
  description:
    "Choose from our elegant collection of rooms and suites at Amara Hotel Greater Kailash. From deluxe rooms to premium suites, each accommodation offers modern amenities, luxurious furnishings, and exceptional comfort in the heart of New Delhi.",
  openGraph: {
    title: "Rooms & Suites at Amara Hotel Greater Kailash",
    description:
      "Experience luxury accommodations in our elegantly appointed rooms and suites. Modern amenities and exceptional comfort in Greater Kailash, Delhi.",
    url: `${siteConfig.url}/rooms`,
    images: ["/bedroom.JPG"],
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
      image: "/deluxe_room.jpg",
      description: "Spacious and elegantly appointed rooms with modern amenities",
      amenities: ["1 Bed", "2 People", "Breakfast", "Wi-Fi"],
      specs: ["32 m²", "Max 2 Guests"],
    },
    {
      id: 2,
      name: "Super Deluxe Room",
      price: "Rs. 4,999",
      image: "/superdeluxe.JPG",
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
        backgroundImage="/bedroom.JPG"
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
