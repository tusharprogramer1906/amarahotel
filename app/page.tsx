import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/home/hero-section"
import { SeoContent } from "@/components/home/seo-content"
import { FeaturedRooms } from "@/components/home/featured-rooms"
import { HomepageFaq } from "@/components/home/homepage-faq"
import { CallToAction } from "@/components/home/call-to-action"
import { siteConfig } from "@/lib/site-config"

// Dynamically import heavy components to reduce initial JS bundle
const MotionGallery = dynamic(() => import("@/components/home/motion-gallery").then(mod => ({ default: mod.MotionGallery })), {
  ssr: true,
  loading: () => <div className="section bg-background py-24"><div className="container"><div className="h-64" /></div></div>
})

export const metadata: Metadata = {
  title: "Amara Hotel Greater Kailash | Boutique Luxury Hotel GK-1 Delhi",
  description:
    "Book direct at Amara Hotel Greater Kailash – Boutique luxury rooms from ₹3,999, elegant banquets & personalized service in GK-1, South Delhi.",
  openGraph: {
    title: "Amara Hotel Greater Kailash | Boutique Luxury Hotel GK-1 Delhi",
    description:
      "Book direct at Amara Hotel Greater Kailash – Boutique luxury rooms from ₹3,999, elegant banquets & personalized service in GK-1, South Delhi.",
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
