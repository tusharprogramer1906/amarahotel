import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Photo Gallery | Amara Hotel Greater Kailash Rooms & Banquet",
  description:
    "Explore Amara Hotel's gallery – Luxury rooms, elegant banquet hall & interiors in GK-1, South Delhi. See our boutique hotel before you book.",
  openGraph: {
    title: "Photo Gallery | Amara Hotel Greater Kailash Rooms & Banquet",
    description:
      "Explore Amara Hotel's gallery – Luxury rooms, elegant banquet hall & interiors in GK-1, South Delhi. See our boutique hotel before you book.",
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
