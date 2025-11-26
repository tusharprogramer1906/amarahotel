import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimationInitializer } from "@/components/animation-initializer"

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
  title: "Amara Hotel - Luxury Boutique Experience",
  description:
    "Experience timeless elegance at Amara Hotel. Premium accommodations, world-class dining, and unforgettable hospitality.",
  generator: "next.js",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans bg-background text-foreground`}>
        <AnimationInitializer />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
