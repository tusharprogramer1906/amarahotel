import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedRooms } from "@/components/home/featured-rooms"
import { MotionGallery } from "@/components/home/motion-gallery"
import { CallToAction } from "@/components/home/call-to-action"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Luxury Boutique Hotel in Greater Kailash, Delhi | Book Your Stay",
  description:
    "Amara Hotel Greater Kailash offers elegant boutique accommodations in the heart of New Delhi. Premium rooms, exceptional service, and prime location in GK-1. Book your stay today for an unforgettable experience.",
  openGraph: {
    title: "Amara Hotel Greater Kailash - Luxury Boutique Hotel in Delhi",
    description:
      "Experience luxury and elegance at Amara Hotel in Greater Kailash, New Delhi. Premium boutique accommodations with world-class amenities.",
    url: siteConfig.url,
    images: ["/bedroom.JPG"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <MotionGallery />
      <FeaturedRooms />
      <CallToAction />
    </>
  )
}
