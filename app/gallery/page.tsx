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
        { src: "/superdeluxe.JPG", alt: "SuperDeluxe Room" },
        { src: "/shot1.JPG", alt: "Room Balcony" },
        { src: "/sitting.JPG", alt: "Sitting Area" },
        { src: "/shot2.JPG", alt: "Presidential Suite" },
        { src: "/bedroom.JPG", alt: "Bedroom" },

      ],
    },
    {
      id: "events",
      title: "Events & Celebrations",
      description: "Perfect venues for your special moments",
      images: [
        { src: "/banquet.JPG", alt: "Banquet Hall" },
        { src: "/25.JPG", alt: "Stage" },
        { src: "/DJ.JPG", alt: "DJ Stage" },
        { src: "/table.JPG", alt: "Banquet Setup" },
        { src: "/PRESENTATION.JPG", alt: "Table Setup" },
        { src: "/hall.JPG", alt: "Gala Dinner" },
      ],
    },
    {
      id: "lobby",
      title: "Lobby & Entrance",
      description: "Grand entrance and welcoming spaces",
      images: [
        { src: "/cooridor.JPG", alt: "Grand Lobby" },
        { src: "/front.JPG", alt: "Hotel Front" },
        { src: "/cafesitting.JPG", alt: "Cafe Area" },
        { src: "/coffee.JPG", alt: "Coffee" },
        { src: "/reception.JPG", alt: "Main Staircase" },
      ],
    },  
  ]

  return (
    <>
      <PageBanner
        title="Photo Gallery"
        subtitle="Explore the elegance and beauty of Amara Hotel"
        backgroundImage="/table.JPG"
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
