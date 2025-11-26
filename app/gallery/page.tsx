"use client"

import { useState } from "react"
import { PageBanner } from "@/components/ui/page-banner"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { Lightbox } from "@/components/gallery/lightbox"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
  } | null>(null)

  const galleryCategories = [
    {
      id: "rooms",
      title: "Rooms & Suites",
      description: "Elegantly appointed accommodations",
      images: [
        { src: "/luxury-hotel-room.png", alt: "Deluxe Room" },
        { src: "/luxury-suite-bedroom.jpg", alt: "Suite Bedroom" },
        { src: "/luxury-marble-bathroom.png", alt: "Marble Bathroom" },
        { src: "/hotel-room-balcony-view.jpg", alt: "Room Balcony" },
        { src: "/presidential-suite-interior.jpg", alt: "Presidential Suite" },
        { src: "/luxury-bedroom-four-poster.jpg", alt: "Four Poster Bed" },
      ],
    },
    {
      id: "lobby",
      title: "Lobby & Entrance",
      description: "Grand entrance and welcoming spaces",
      images: [
        { src: "/luxury-hotel-lobby-grand.jpg", alt: "Grand Lobby" },
        { src: "/hotel-entrance-chandelier.jpg", alt: "Lobby Chandelier" },
        { src: "/hotel-reception.png", alt: "Reception Area" },
        { src: "/luxury-lobby-seating-area.jpg", alt: "Lobby Seating" },
        { src: "/hotel-main-staircase.jpg", alt: "Main Staircase" },
        { src: "/luxury-hotel-corridor.jpg", alt: "Elegant Corridor" },
      ],
    },
    {
      id: "dining",
      title: "Dining & Restaurants",
      description: "Culinary excellence and fine dining",
      images: [
        { src: "/luxury-restaurant-interior-elegant.jpg", alt: "Fine Dining" },
        { src: "/gourmet-plated-dish.png", alt: "Gourmet Cuisine" },
        { src: "/restaurant-bar-lounge.jpg", alt: "Bar & Lounge" },
        { src: "/fine-dining-table-setting.jpg", alt: "Table Setting" },
        { src: "/breakfast-buffet-restaurant.jpg", alt: "Breakfast Area" },
        { src: "/wine-cellar-luxury.jpg", alt: "Wine Cellar" },
      ],
    },
    {
      id: "amenities",
      title: "Amenities & Facilities",
      description: "World-class facilities and services",
      images: [
        { src: "/luxury-swimming-pool-indoor.jpg", alt: "Indoor Pool" },
        { src: "/spa-sauna-wellness.jpg", alt: "Spa & Wellness" },
        { src: "/fitness-center-gym.jpg", alt: "Fitness Center" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Business Center" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Yoga Studio" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Library Lounge" },
      ],
    },
    {
      id: "events",
      title: "Events & Celebrations",
      description: "Perfect venues for your special moments",
      images: [
        { src: "/placeholder.svg?height=400&width=600", alt: "Grand Ballroom" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Conference Room" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Wedding Reception" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Banquet Setup" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Garden Events" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Gala Dinner" },
      ],
    },
    {
      id: "surroundings",
      title: "Surroundings & Views",
      description: "Scenic locations and neighborhood highlights",
      images: [
        { src: "/placeholder.svg?height=400&width=600", alt: "Hotel Exterior" },
        { src: "/placeholder.svg?height=400&width=600", alt: "City Views" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Garden Landscape" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Sunset Terrace" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Nearby Attractions" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Courtyard" },
      ],
    },
  ]

  return (
    <>
      <PageBanner
        title="Photo Gallery"
        subtitle="Explore the elegance and beauty of Amara Hotel"
        backgroundImage="/placeholder.svg?key=4m2nk"
      />

      {galleryCategories.map((category) => (
        <GalleryGrid
          key={category.id}
          title={category.title}
          description={category.description}
          images={category.images}
          onImageClick={setSelectedImage}
        />
      ))}

      {selectedImage && <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </>
  )
}
