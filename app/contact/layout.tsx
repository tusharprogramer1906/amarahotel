import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact Amara Hotel | Book Rooms & Banquet Hall in Greater Kailash, Delhi",
  description:
    "Contact Amara Hotel in Greater Kailash, South Delhi. Call +91 9268140219 for room bookings, banquet hall reservations & inquiries. Located in GK-1, C-30 Hansraj Gupta Rd. Email us today.",
  openGraph: {
    title: "Contact Amara Hotel | Book Rooms & Banquet Hall in Greater Kailash, Delhi",
    description:
      "Contact us for room bookings, banquet hall reservations & inquiries in Greater Kailash, South Delhi. Call +91 9268140219 or email us today.",
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
