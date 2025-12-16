export type FAQ = {
  question: string
  answer: string
}

export type BlogPost = {
  slug: string
  title: string
  date: string
  image: string
  excerpt: string
  content: string[]
  faq?: FAQ[]
}

export const blogPosts: BlogPost[] = [

  {
    slug: "elevate-your-events-at-amara-hotel",
    title: "Elevate Your Events at Amara Hotel – A Premium Banquet Hall in South Delhi",
    date: "Dec 16, 2025",
    image: "/blogbanner.JPG",
    excerpt:
      "Host elegant social and corporate events at Amara Hotel, a premium banquet hall in South Delhi located in Greater Kailash 1.",
    content: [
      "When it comes to hosting memorable celebrations, the venue makes all the difference. Amara Hotel, a premium hotel in Greater Kailash 1, offers beautifully designed banquet spaces, refined interiors, and attentive hospitality—making it a preferred banquet hall in South Delhi.",
      "From intimate gatherings to corporate events, Amara Hotel provides a sophisticated setting tailored to every occasion.",
      "Amara Hotel features thoughtfully designed event spaces suitable for birthday & anniversary celebrations, engagements & family functions, corporate meetings & conferences, and private parties & social gatherings. The modern décor, ambient lighting, and flexible seating arrangements create an elegant yet comfortable atmosphere for guests.",
      "Located in one of South Delhi's most prestigious neighborhoods, Amara Hotel, Greater Kailash 1, enjoys seamless connectivity to C R Park, Nehru Place, Kalkaji, and Defence Colony. Its central location makes it easy for guests across Delhi to attend events without travel hassles.",
      "Every event at Amara Hotel is complemented by a carefully curated dining experience. Guests can enjoy delicious multi-cuisine options prepared with attention to taste, presentation, and quality.",
      "Why choose Amara Hotel as your banquet hall in South Delhi? We offer a prime location in Greater Kailash 1, stylish and spacious banquet halls, professional event coordination, premium dining services, and personalized hospitality.",
      "If you are searching for a reliable banquet hall in South Delhi or a hotel in Greater Kailash 1 for events, Amara Hotel offers the perfect venue for elegant and stress-free celebrations.",
    ],
    faq: [
      {
        question: "Is Amara Hotel a good banquet hall in South Delhi?",
        answer: "Yes, Amara Hotel is a premium banquet hall in South Delhi, offering elegant event spaces, modern interiors, and personalized services for social and corporate events.",
      },
      {
        question: "Where is Amara Hotel located in Greater Kailash?",
        answer: "Amara Hotel is located in Greater Kailash 1, South Delhi, with easy access to C R Park, Nehru Place, Kalkaji, and surrounding areas.",
      },
      {
        question: "What types of events can be hosted at Amara Hotel?",
        answer: "Amara Hotel is ideal for birthdays, anniversaries, engagement ceremonies, corporate meetings, private parties, and small social gatherings.",
      },
      {
        question: "Does Amara Hotel provide catering services for events?",
        answer: "Yes, Amara Hotel offers customized dining and catering options with multi-cuisine menus tailored to your event requirements.",
      },
      {
        question: "How can I book an event at Amara Hotel?",
        answer: "You can book an event by contacting Amara Hotel directly through the Contact Us page or by calling the hotel's event coordination team.",
      },
    ],
  },

  {
    slug: "experience-boutique-luxury-at-amara-hotel",
    title: "Experience Boutique Luxury at Amara Hotel – A Premium Hotel in Greater Kailash 1",
    date: "Dec 20, 2025",
    image: "/bedroom.JPG",
    excerpt:
      "Enjoy a refined boutique stay at Amara Hotel, a premium hotel in Greater Kailash 1 offering comfort, elegance, and personalized hospitality.",
    content: [
      "For travelers seeking comfort, style, and convenience, Amara Hotel stands out as a premium hotel in Greater Kailash 1. Designed to offer a calm and refined boutique experience, the hotel blends modern interiors with warm hospitality.",
      "Whether you are visiting for business, leisure, or family occasions, Amara Hotel ensures a pleasant and relaxing stay in South Delhi.",
      "Amara Hotel features tastefully designed interiors that reflect understated luxury. Guests can expect well-appointed, spacious rooms, contemporary décor with warm tones, and a peaceful ambiance ideal for rest and relaxation. Every detail is crafted to ensure comfort throughout your stay.",
      "Thanks to its strategic location, Amara Hotel is ideal for business travelers visiting South Delhi, families attending functions or celebrations, guests seeking a boutique hotel near C R Park, and travelers who prefer calm, premium accommodations. Its proximity to business hubs, shopping areas, and cultural landmarks adds to the convenience.",
      "What truly sets Amara Hotel apart is its commitment to guest satisfaction. The attentive staff ensures seamless service—from check-in to check-out—making every stay comfortable and memorable.",
      "Why choose Amara Hotel in South Delhi? We offer a prime location in Greater Kailash 1, boutique-style rooms with modern comfort, in-house dining & event facilities, ideal for short and extended stays, and a peaceful, premium environment.",
      "If you are looking for a hotel in Greater Kailash 1 that offers boutique luxury, Amara Hotel is the perfect choice for a refined stay in South Delhi.",
    ],
    faq: [
      {
        question: "Is Amara Hotel a boutique hotel in Greater Kailash 1?",
        answer: "Yes, Amara Hotel is a boutique hotel in Greater Kailash 1, offering premium rooms, modern interiors, and personalized hospitality.",
      },
      {
        question: "Is Amara Hotel suitable for business travelers?",
        answer: "Absolutely. Amara Hotel is ideal for business travelers due to its central South Delhi location, peaceful ambiance, and comfortable accommodations.",
      },
      {
        question: "Does Amara Hotel offer dining facilities?",
        answer: "Yes, Amara Hotel provides in-house dining with carefully curated menus to ensure a pleasant dining experience for guests.",
      },
      {
        question: "How far is Amara Hotel from C R Park and Nehru Place?",
        answer: "Amara Hotel is conveniently located near C R Park and Nehru Place, making it easy for guests to commute for business or leisure.",
      },
      {
        question: "How can I book a stay at Amara Hotel?",
        answer: "You can book your stay directly through the Book Now option available on the official Amara Hotel website.",
      },
    ],
  },
]

export const featuredPostSlug = "inside-amara"

