"use client"

import { useState } from "react"
import { PageBanner } from "@/components/ui/page-banner"
import { RoomFilter } from "@/components/rooms/room-filter"
import { RoomCard } from "@/components/rooms/room-card"

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      category: "standard",
      price: 250,
      image: "/luxury-hotel-room.png",
      description: "Spacious and elegantly appointed rooms with modern amenities",
      amenities: ["King Bed", "City View", "Marble Bathroom", "Premium Toiletries", "Wi-Fi", "Smart TV"],
      specs: ["32 m²", "Max 2 Guests"],
    },
    {
      id: 2,
      name: "Deluxe Plus",
      category: "standard",
      price: 320,
      image: "/luxury-suite-bedroom.jpg",
      description: "Enhanced deluxe rooms with additional living space and premium views",
      amenities: ["King Bed", "Sofa Seating", "Panoramic View", "Rain Shower", "Bathrobes", "Wi-Fi"],
      specs: ["42 m²", "Max 2 Guests"],
    },
    {
      id: 3,
      name: "Suite Superior",
      category: "suite",
      price: 450,
      image: "/luxury-marble-bathroom.png",
      description: "Luxurious suites with separate living areas and premium amenities",
      amenities: ["King Bed", "Living Room", "Marble Bathroom", "Espresso Machine", "Mini Bar", "Premium WiFi"],
      specs: ["65 m²", "Max 3 Guests"],
    },
    {
      id: 4,
      name: "Executive Suite",
      category: "suite",
      price: 550,
      image: "/hotel-room-balcony-view.jpg",
      description: "Premium executive suites with business facilities and exclusive services",
      amenities: ["King Bed", "Work Area", "Separate Lounge", "Soaking Tub", "Club Access", "Concierge"],
      specs: ["75 m²", "Max 3 Guests"],
    },
    {
      id: 5,
      name: "Presidential Suite",
      category: "presidential",
      price: 950,
      image: "/presidential-suite-interior.jpg",
      description: "Ultimate luxury with panoramic views and personalized service",
      amenities: ["King Bed", "Full Living Suite", "Dining Area", "Luxury Spa Tub", "24hr Butler", "Private Entrance"],
      specs: ["120 m²", "Max 4 Guests"],
    },
    {
      id: 6,
      name: "Royal Penthouse",
      category: "presidential",
      price: 1500,
      image: "/luxury-bedroom-four-poster.jpg",
      description: "Exclusive penthouse with private terrace and highest level of luxury",
      amenities: ["King Bed", "Private Lounge", "Terrace", "Steam Room", "Cinema", "Chef Service"],
      specs: ["180 m²", "Max 4 Guests"],
    },
  ]

  const filteredRooms = selectedCategory === "all" ? rooms : rooms.filter((room) => room.category === selectedCategory)

  return (
    <>
      <PageBanner
        title="Rooms & Suites"
        subtitle="Discover our collection of elegantly appointed accommodations"
        backgroundImage="/luxury-hotel-suite-with-elegant-furniture.jpg"
      />

      <section className="section bg-background">
        <div className="container">
          <RoomFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredRooms.map((room) => (
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
