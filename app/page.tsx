import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/home/hero-section"
import { BookDirectBanner } from "@/components/home/book-direct-banner"
import { TrustSection } from "@/components/home/trust-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { SeoContent } from "@/components/home/seo-content"
import { StickyMobileCta } from "@/components/home/sticky-mobile-cta"
import { FloatingBookBtn } from "@/components/home/floating-book-btn"
import { SocialProofToast } from "@/components/home/social-proof-toast"
import { siteConfig } from "@/lib/site-config"

const MotionGallery = dynamic(
  () => import("@/components/home/motion-gallery").then((mod) => ({ default: mod.MotionGallery })),
  {
    ssr: true,
    loading: () => (
      <div className="py-24 bg-[#faf7f4]">
        <div className="container">
          <div className="h-64" aria-hidden />
        </div>
      </div>
    ),
  }
)

const FeaturedRooms = dynamic(
  () => import("@/components/home/featured-rooms").then((mod) => ({ default: mod.FeaturedRooms })),
  {
    ssr: true,
    loading: () => (
      <div className="py-24 bg-[#0f0f0f] min-h-[480px]" aria-label="Loading rooms">
        <div className="container">
          <div className="h-80 md:h-96 animate-pulse bg-white/5 rounded-2xl" />
        </div>
      </div>
    ),
  }
)

const HomepageFaq = dynamic(
  () => import("@/components/home/homepage-faq").then((mod) => ({ default: mod.HomepageFaq })),
  { ssr: true }
)

const CallToAction = dynamic(
  () => import("@/components/home/call-to-action").then((mod) => ({ default: mod.CallToAction })),
  { ssr: true }
)

export const metadata: Metadata = {
  title: "Best Hotel in Greater Kailash (GK1), South Delhi | Amara Hotel",
  description:
    "Amara Hotel – premium boutique hotel in Greater Kailash 1, South Delhi. Couple friendly, near Nehru Place & metro. Book direct for best rates. Clean, modern rooms from ₹3,999.",
  keywords: [
    "hotel in greater kailash",
    "hotel near nehru place",
    "budget hotel in GK1",
    "couple friendly hotel south delhi",
    "boutique hotel GK1 Delhi",
    "hotel GK1 South Delhi",
    "Amara Hotel Greater Kailash",
    "hotel near nehru place Delhi",
    "business hotel south delhi",
  ],
  openGraph: {
    title: "Best Hotel in Greater Kailash (GK1), South Delhi | Amara Hotel",
    description:
      "Premium boutique hotel in GK1, South Delhi. Couple friendly stay near Nehru Place. Book direct for best rates at Amara Hotel.",
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
      {/* ── Above the fold ─────────────────────────────────── */}
      <HeroSection />

      {/* ── Objection killer: WHY book direct, not OTA ────── */}
      <BookDirectBanner />

      {/* ── Social proof: ratings + testimonials ──────────── */}
      <TrustSection />

      {/* ── Value proposition ─────────────────────────────── */}
      <WhyChooseSection />

      {/* ── Visual desire trigger ─────────────────────────── */}
      <MotionGallery />

      {/* ── Room CTAs with per-room scarcity ──────────────── */}
      <FeaturedRooms />

      {/* ── SEO content + business/couple sections ────────── */}
      <SeoContent />

      {/* ── Objection handling + inline CTA ───────────────── */}
      <HomepageFaq />

      {/* ── Final conversion push ─────────────────────────── */}
      <CallToAction />

      {/* ── Persistent CTAs (overlay layers) ─────────────── */}
      <StickyMobileCta />
      <FloatingBookBtn />
      <SocialProofToast />
    </>
  )
}
