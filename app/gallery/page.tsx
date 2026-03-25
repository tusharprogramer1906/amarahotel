"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { PageBanner } from "@/components/ui/page-banner"

// Defer heavy components to reduce initial payload
const GalleryGrid = dynamic(() => import("@/components/gallery/gallery-grid").then(mod => ({ default: mod.GalleryGrid })), {
  ssr: true,
  loading: () => <div className="section bg-background min-h-[400px] animate-pulse" aria-hidden />
})

const Lightbox = dynamic(() => import("@/components/gallery/lightbox").then(mod => ({ default: mod.Lightbox })), {
  ssr: false,
})

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
        { src: "/amara-hotel-super-deluxe-room-delhi.webp", alt: "Super Deluxe room at Amara Hotel GK1 South Delhi" },
        { src: "/amara-hotel-room-interior-1.webp", alt: "Amara Hotel room interior with premium furnishings" },
        { src: "/amara-hotel-lounge-seating.webp", alt: "Lounge seating area at Amara Hotel Greater Kailash" },
        { src: "/amara-hotel-room-interior-2.webp", alt: "Amara Hotel bedroom with modern design GK1 Delhi" },
        { src: "/amara-hotel-bedroom-luxury-room.webp", alt: "Luxury bedroom at Amara Hotel Greater Kailash 1" },

      ],
    },
    {
      id: "events",
      title: "Events & Celebrations",
      description: "Perfect venues for your special moments",
      images: [
        { src: "/amara-hotel-event-banquet-gk1.webp", alt: "Banquet hall at Amara Hotel for events in South Delhi" },
        { src: "/amara-hotel-stage-event-setup.webp", alt: "Event stage setup at Amara Hotel Greater Kailash" },
        { src: "/amara-hotel-dj-stage-event.webp", alt: "DJ and entertainment setup at Amara Hotel Delhi" },
        { src: "/amara-hotel-dining-table-setup.webp", alt: "Banquet dining table setup at Amara Hotel GK1" },
        { src: "/amara-hotel-event-presentation-setup.webp", alt: "Corporate event presentation setup at Amara Hotel" },
        { src: "/amara-hotel-banquet-hall-interior.webp", alt: "Gala dinner setup in Amara Hotel banquet hall Delhi" },
      ],
    },
    {
      id: "lobby",
      title: "Lobby & Entrance",
      description: "Grand entrance and welcoming spaces",
      images: [
        { src: "/amara-hotel-corridor-interior.webp", alt: "Grand lobby corridor at Amara Hotel Greater Kailash" },
        { src: "/amara-hotel-exterior-front-view.webp", alt: "Front exterior view of Amara Hotel GK1 South Delhi" },
        { src: "/amara-hotel-cafe-seating-area.webp", alt: "Café and seating area at Amara Hotel Delhi" },
        { src: "/amara-hotel-coffee-service.webp", alt: "In-room coffee service at Amara Hotel Greater Kailash" },
        { src: "/amara-hotel-reception-area.webp", alt: "Reception and lobby area at Amara Hotel GK1 Delhi" },
      ],
    },  
  ]

  return (
    <>
      <PageBanner
        title="Photo Gallery"
        subtitle="Explore the elegance and beauty of Amara Hotel"
        backgroundImage="/amara-hotel-dining-table-setup.webp"
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
