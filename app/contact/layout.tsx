import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact Amara Hotel Greater Kailash | Book Rooms & Events",
  description:
    "Contact Amara Hotel GK-1, South Delhi. Call +91 9268140219 for room bookings & banquet reservations. C-30 Hansraj Gupta Rd. Get in touch today.",
  openGraph: {
    title: "Contact Amara Hotel Greater Kailash | Book Rooms & Events",
    description:
      "Contact Amara Hotel GK-1, South Delhi. Call +91 9268140219 for room bookings & banquet reservations. C-30 Hansraj Gupta Rd. Get in touch today.",
    url: `${siteConfig.url}/contact`,
    images: ["/contact.jpg"],
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
