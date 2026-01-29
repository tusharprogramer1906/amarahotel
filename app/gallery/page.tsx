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
        { src: "/superdeluxe.webp", alt: "SuperDeluxe Room" },
        { src: "/shot1.webp", alt: "Room Balcony" },
        { src: "/sitting.webp", alt: "Sitting Area" },
        { src: "/shot2.webp", alt: "Presidential Suite" },
        { src: "/bedroom.webp", alt: "Bedroom" },

      ],
    },
    {
      id: "events",
      title: "Events & Celebrations",
      description: "Perfect venues for your special moments",
      images: [
        { src: "/banquet.webp", alt: "Banquet Hall" },
        { src: "/25.webp", alt: "Stage" },
        { src: "/DJ.webp", alt: "DJ Stage" },
        { src: "/table.webp", alt: "Banquet Setup" },
        { src: "/PRESENTATION.webp", alt: "Table Setup" },
        { src: "/hall.webp", alt: "Gala Dinner" },
      ],
    },
    {
      id: "lobby",
      title: "Lobby & Entrance",
      description: "Grand entrance and welcoming spaces",
      images: [
        { src: "/cooridor.webp", alt: "Grand Lobby" },
        { src: "/front.webp", alt: "Hotel Front" },
        { src: "/cafesitting.webp", alt: "Cafe Area" },
        { src: "/coffee.webp", alt: "Coffee" },
        { src: "/reception.webp", alt: "Main Staircase" },
      ],
    },  
  ]

  return (
    <>
      <PageBanner
        title="Photo Gallery"
        subtitle="Explore the elegance and beauty of Amara Hotel"
        backgroundImage="/table.webp"
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
