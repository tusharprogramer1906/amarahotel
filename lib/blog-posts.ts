export type BlogPost = {
  slug: string
  title: string
  date: string
  image: string
  excerpt: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "inside-amara",
    title: "Inside Amara: Crafting a Signature Stay",
    date: "Nov 12, 2025",
    image: "/jourr.JPG",
    excerpt:
      "From bespoke amenities to curated experiences, discover how our team brings timeless luxury to life for every guest.",
    content: [
      "At Amara Hotel, every stay is meticulously crafted by a dedicated team of hospitality artisans. From the moment a reservation is made, our concierge team begins tailoring services to each guest’s preferences, ensuring a seamless and personalized arrival.",
      "Designers, florists, and culinary masters collaborate to create immersive spaces that evolve with the seasons. Signature scents, curated playlists, and bespoke amenities are refreshed monthly to keep the experience vibrant and unique.",
      "Behind the scenes, our guest experience managers review every detail—from pillow preferences to curated excursions—so that each visit feels both familiar and delightfully surprising.",
    ],
  },

  {
    slug: "city-secrets-concierge-picks",
    title: "City Secrets: Concierge Picks for a Perfect Weekend",
    date: "Sep 12, 2025",
    image: "/hall.JPG",
    excerpt: "Our concierge team curates an itinerary of galleries, boutiques, and culinary gems nearby.",
    content: [
      "The ideal Amara weekend begins with a sunrise walk through the historic district followed by a private gallery tour led by a local curator.",
      "Afternoons are best spent exploring independent boutiques and atelier studios, where craftsmen invite guests to personalize accessories and keepsakes.",
      "As evening arrives, the concierge team arranges coveted reservations at chef’s counter pop-ups or rooftop jazz lounges, concluding with nightcaps in our speakeasy-inspired bar.",
    ],
  },
]

export const featuredPostSlug = "inside-amara"

