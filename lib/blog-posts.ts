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
    image: "/hotel-reception.png",
    excerpt:
      "From bespoke amenities to curated experiences, discover how our team brings timeless luxury to life for every guest.",
    content: [
      "At Amara Hotel, every stay is meticulously crafted by a dedicated team of hospitality artisans. From the moment a reservation is made, our concierge team begins tailoring services to each guest’s preferences, ensuring a seamless and personalized arrival.",
      "Designers, florists, and culinary masters collaborate to create immersive spaces that evolve with the seasons. Signature scents, curated playlists, and bespoke amenities are refreshed monthly to keep the experience vibrant and unique.",
      "Behind the scenes, our guest experience managers review every detail—from pillow preferences to curated excursions—so that each visit feels both familiar and delightfully surprising.",
    ],
  },
  {
    slug: "designing-tranquility",
    title: "Designing Tranquility: The Art Behind Our Suites",
    date: "Oct 28, 2025",
    image: "/luxury-bedroom-four-poster.jpg",
    excerpt: "A look at the textures, palettes, and artisan details that shape our residential-style suites.",
    content: [
      "Every Amara suite is conceived as a private sanctuary inspired by modern residences. We begin with a calming palette of warm neutrals and layered textures that evoke serenity while allowing signature art pieces to shine.",
      "Custom furnishings, crafted by ateliers across Europe and Asia, are selected for both beauty and comfort. The interplay of soft textiles, marble surfaces, and ambient lighting creates a refined yet livable environment.",
      "Our design team works closely with local artisans to introduce subtle cultural references—handwoven throws, sculpted ceramics, and bespoke fragrances—ensuring each suite feels rooted in place.",
    ],
  },
  {
    slug: "chefs-table-seasonal-menus",
    title: "Chef’s Table: Seasonal Menus & Signature Pairings",
    date: "Oct 15, 2025",
    image: "/gourmet-plated-dish.png",
    excerpt: "Executive Chef Lemaire shares the inspiration behind Amara’s autumn tasting menu.",
    content: [
      "The autumn tasting menu celebrates the rich flavors of the harvest season. Chef Lemaire sources heirloom vegetables and artisanal cheeses from regional farms to anchor each course.",
      "Guests begin with delicate amuse-bouches that feature unexpected pairings—truffle custard with crisp apple, saffron-poached pear with smoked almond praline.",
      "Sommelier-curated pairings span boutique vineyards in Burgundy, Oregon, and the Margaret River region, each chosen to enhance the layered flavors of the menu.",
    ],
  },
  {
    slug: "wellness-retreats-amara-spa",
    title: "Wellness Retreats: Restorative Journeys at Amara Spa",
    date: "Sep 30, 2025",
    image: "/spa-sauna-wellness.jpg",
    excerpt: "Explore immersive spa rituals designed to rejuvenate body and mind.",
    content: [
      "Amara Spa blends ancient rituals with modern therapy techniques to create restorative journeys. Each treatment begins with a sensory consultation to understand the guest’s energy level, sleep patterns, and travel fatigue.",
      "Signature therapies pair mineral-rich soaks with aromatherapy, while sound bath meditation sessions allow guests to decompress from the pace of city life.",
      "Post-treatment, guests unwind in private relaxation suites where nourishing tonics and freshly prepared botanicals extend the wellness ritual.",
    ],
  },
  {
    slug: "city-secrets-concierge-picks",
    title: "City Secrets: Concierge Picks for a Perfect Weekend",
    date: "Sep 12, 2025",
    image: "/luxury-hotel-corridor.jpg",
    excerpt: "Our concierge team curates an itinerary of galleries, boutiques, and culinary gems nearby.",
    content: [
      "The ideal Amara weekend begins with a sunrise walk through the historic district followed by a private gallery tour led by a local curator.",
      "Afternoons are best spent exploring independent boutiques and atelier studios, where craftsmen invite guests to personalize accessories and keepsakes.",
      "As evening arrives, the concierge team arranges coveted reservations at chef’s counter pop-ups or rooftop jazz lounges, concluding with nightcaps in our speakeasy-inspired bar.",
    ],
  },
]

export const featuredPostSlug = "inside-amara"

