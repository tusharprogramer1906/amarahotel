import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { SeoContent } from "@/components/home/seo-content"
import { FeaturedRooms } from "@/components/home/featured-rooms"
import { MotionGallery } from "@/components/home/motion-gallery"
import { HomepageFaq } from "@/components/home/homepage-faq"
import { CallToAction } from "@/components/home/call-to-action"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Amara Hotel Greater Kailash | Official Website | South Delhi",
  description:
    "Official website of Amara Hotel Greater Kailash, South Delhi. Book luxury rooms, banquets & premium stays directly for best prices and offers.",
  openGraph: {
    title: "Amara Hotel Greater Kailash | Official Website | South Delhi",
    description:
      "Official website of Amara Hotel Greater Kailash, South Delhi. Book luxury rooms, banquets & premium stays directly for best prices and offers.",
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
      <SeoContent />
      <MotionGallery />
      <FeaturedRooms />
      <HomepageFaq />
      <CallToAction />
    </>
  )
}
