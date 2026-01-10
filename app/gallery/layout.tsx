import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Photo Gallery | Luxury Rooms, Banquet Hall & Hotel Interiors - Amara Hotel",
  description:
    "View Amara Hotel's photo gallery - Luxury rooms, elegant banquet halls, lobby & interiors in Greater Kailash, South Delhi. See why we're the premier boutique hotel in GK-1.",
  openGraph: {
    title: "Photo Gallery | Luxury Rooms, Banquet Hall & Hotel Interiors - Amara Hotel",
    description:
      "View our luxury rooms, elegant banquet halls, lobby & interiors in Greater Kailash, South Delhi. See why we're the premier boutique hotel in GK-1.",
    url: `${siteConfig.url}/gallery`,
    images: ["/table.JPG"],
  },
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
