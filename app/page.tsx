import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/home/hero-section"
import { BookDirectBanner } from "@/components/home/book-direct-banner"
import { TrustSection } from "@/components/home/trust-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { SeoContent } from "@/components/home/seo-content"
import { LocationHighlights } from "@/components/home/location-highlights"
import { StickyMobileCta } from "@/components/home/sticky-mobile-cta"
import { FloatingBookBtn } from "@/components/home/floating-book-btn"
import { SocialProofToast } from "@/components/home/social-proof-toast"
import { InstagramSection } from "@/components/home/instagram-section"
import { siteConfig } from "@/lib/site-config"

// Homepage FAQ items — must stay in sync with homepage-faq.tsx
const homepageFaqs = [
  {
    question: "Is Amara Hotel couple friendly?",
    answer:
      "Yes, Amara Hotel is a couple friendly hotel in Greater Kailash 1, South Delhi. We welcome couples and ensure a comfortable, discreet, and warm stay experience.",
  },
  {
    question: "Where is Amara Hotel located?",
    answer:
      "Amara Hotel is located in Greater Kailash 1 (GK1), South Delhi — at C-30, Hansraj Gupta Rd, New Delhi 110048. We are minutes from Nehru Place, GK Metro Station, and M Block Market.",
  },
  {
    question: "Is Amara Hotel in Greater Kailash 1?",
    answer:
      "Yes. Amara Hotel is situated in Greater Kailash 1 (GK1), one of South Delhi's most established and well-connected residential neighbourhoods.",
  },
  {
    question: "How far is Amara Hotel from Nehru Place?",
    answer:
      "Amara Hotel is approximately 10 minutes from Nehru Place by cab or auto. It's one of the most conveniently located hotels in GK1 for business travelers visiting Nehru Place.",
  },
  {
    question: "What is Amara Hotel near?",
    answer:
      "Amara Hotel is near M Block Market (3 min walk), Kailash Colony Metro Station (5 min walk), Nehru Place Business District (10 min by cab), Lotus Temple (15 min), and Okhla Industrial Area (12 min).",
  },
  {
    question: "Does Amara Hotel have banquet facilities for events?",
    answer:
      "Yes, Amara Hotel features an elegant banquet hall in Greater Kailash, ideal for weddings, corporate events, birthday parties, and private celebrations. Contact us for availability and packages.",
  },
]

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
  title: "Amara Hotel in Greater Kailash (GK1), South Delhi | Boutique Stay",
  description:
    "Amara Hotel is a boutique property in Greater Kailash 1 (GK1), South Delhi — near Nehru Place, M Block & metro. Elegant rooms, banquet hall & personalised service. Book direct for best rates.",
  keywords: [
    "Amara Hotel Greater Kailash",
    "Amara Hotel GK1",
    "hotel in Greater Kailash 1",
    "hotel near Nehru Place",
    "boutique hotel GK1 Delhi",
    "hotel GK1 South Delhi",
    "couple friendly hotel South Delhi",
    "hotel near Nehru Place Delhi",
    "business hotel South Delhi",
    "banquet hall Greater Kailash",
  ],
  openGraph: {
    title: "Amara Hotel in Greater Kailash (GK1), South Delhi | Boutique Stay",
    description:
      "Boutique hotel in GK1, South Delhi. Near Nehru Place, M Block & metro. Elegant rooms, banquet hall & personalised hospitality. Book direct at Amara Hotel.",
    url: siteConfig.url,
    images: [
      {
        url: "/amara-hotel-bedroom-luxury-room.webp",
        width: 1200,
        height: 630,
        alt: "Deluxe room at Amara Hotel, Greater Kailash 1, South Delhi",
      },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function Home() {
  return (
    <>
      {/* ── FAQPage structured data ────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

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

      {/* ── SEO content + business/couple sections ───────────────── */}
      <SeoContent />

      {/* ── Location highlights (trust + SEO layer) ─────────────── */}
      <LocationHighlights />

      {/* ── Objection handling + inline CTA ─────────────────────── */}
      <HomepageFaq />

      {/* ── Instagram social proof (trust layer) ─────────── */}
      <InstagramSection />

      {/* ── Final conversion push ─────────────────────────── */}
      <CallToAction />

      {/* ── Persistent CTAs (overlay layers) ─────────────── */}
      <StickyMobileCta />
      <FloatingBookBtn />
      <SocialProofToast />
    </>
  )
}
