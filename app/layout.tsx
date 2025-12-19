import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimationInitializer } from "@/components/animation-initializer"
import { siteConfig } from "@/lib/site-config"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Amara Hotel Greater Kailash - Luxury Boutique Hotel in Delhi | Book Now",
    template: "%s | Amara Hotel Greater Kailash",
  },
  description:
    "Amara Hotel in Greater Kailash, New Delhi offers luxury boutique accommodations with elegant rooms, world-class amenities, and exceptional hospitality. Book your stay at one of Delhi's finest hotels. Located in GK-1, close to shopping, dining, and business districts.",
  keywords: [
    "Amara Hotel",
    "hotel in Greater Kailash",
    "luxury hotel Delhi",
    "boutique hotel New Delhi",
    "hotel GK-1",
    "5 star hotel Greater Kailash",
    "hotel near Greater Kailash",
    "Delhi hotel booking",
    "luxury accommodations Delhi",
    "business hotel Delhi",
    "hotel in South Delhi",
    "Amara Hotel Greater Kailash",
    "hotel reservation Delhi",
    "best hotel GK",
    "Hotels in Budget"
  ],
  authors: [{ name: "Amara Hotel" }],
  creator: "Amara Hotel",
  publisher: "Amara Hotel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Amara Hotel Greater Kailash - Luxury Boutique Hotel in Delhi",
    description:
      "Experience luxury and elegance at Amara Hotel in Greater Kailash, New Delhi. Premium boutique accommodations with world-class amenities and exceptional service.",
    images: [
      {
        url: "/bedroom.JPG",
        width: 1200,
        height: 630,
        alt: "Amara Hotel - Luxury Boutique Hotel in Greater Kailash, Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amara Hotel Greater Kailash - Luxury Boutique Hotel in Delhi",
    description:
      "Experience luxury and elegance at Amara Hotel in Greater Kailash, New Delhi. Premium boutique accommodations with world-class amenities.",
    images: ["/bedroom.JPG"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "XX_bfEN9mnRrdCwLmYkQHrACvxMevK6w2b736ihABXM",
  },
  category: "Hospitality",
  classification: "Hotel",
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Greater Kailash, New Delhi",
    "geo.position": "28.5492;77.2418", // Approximate coordinates for GK-1
    "ICBM": "28.5492, 77.2418",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.defaultOgImage}`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: "+919268140219",
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C-30, Hansraj Gupta Rd, Greater Kailash-1, C Block",
      addressLocality: "Greater Kailash",
      addressRegion: "Delhi",
      postalCode: "110048",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5492,
      longitude: 77.2418,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      // Add your social media profiles here when available
      // "https://www.facebook.com/amarahotel",
      // "https://www.instagram.com/amarahotel",
      // These can also be configured via environment variables if needed
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans bg-background text-foreground`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnimationInitializer />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
