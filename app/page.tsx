import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/home/hero-section"
import { SeoContent } from "@/components/home/seo-content"
import { siteConfig } from "@/lib/site-config"

// Defer below-fold sections to reduce initial JS and image payload
const MotionGallery = dynamic(() => import("@/components/home/motion-gallery").then(mod => ({ default: mod.MotionGallery })), {
  ssr: true,
  loading: () => <div className="section bg-background py-24"><div className="container"><div className="h-64" aria-hidden /></div></div>
})

const FeaturedRooms = dynamic(() => import("@/components/home/featured-rooms").then(mod => ({ default: mod.FeaturedRooms })), {
  ssr: true,
  loading: () => <div className="section bg-background min-h-[480px]" aria-label="Loading rooms"><div className="container"><div className="h-80 md:h-96 animate-pulse bg-muted/50 rounded-lg" /></div></div>
})

const HomepageFaq = dynamic(() => import("@/components/home/homepage-faq").then(mod => ({ default: mod.HomepageFaq })), {
  ssr: true,
})

const CallToAction = dynamic(() => import("@/components/home/call-to-action").then(mod => ({ default: mod.CallToAction })), {
  ssr: true,
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
    images: ["/bedroom.webp"],
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
