import { HeroSection } from "@/components/home/hero-section"
import { FeaturedRooms } from "@/components/home/featured-rooms"
import { MotionGallery } from "@/components/home/motion-gallery"
import { CallToAction } from "@/components/home/call-to-action"

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
