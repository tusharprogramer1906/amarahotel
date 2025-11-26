import { PageBanner } from "@/components/ui/page-banner"
import { AmenityCard } from "@/components/amenities/amenity-card"
import { ServicesList } from "@/components/amenities/services-list"

export default function AmenitiesPage() {
  const amenities = [
    {
      id: 1,
      name: "Swimming Pool",
      description: "Olympic-sized indoor heated pool with hydro therapy jets",
      image: "/luxury-swimming-pool-indoor.jpg",
      icon: "🏊",
    },
    {
      id: 2,
      name: "Spa & Wellness",
      description: "Full-service spa with massage, facial, and wellness treatments",
      image: "/spa-sauna-wellness.jpg",
      icon: "🧖",
    },
    {
      id: 3,
      name: "Fitness Center",
      description: "State-of-the-art gym with personal training and yoga classes",
      image: "/fitness-center-gym.jpg",
      icon: "💪",
    },
    {
      id: 4,
      name: "Fine Dining",
      description: "Michelin-inspired cuisine with international and local dishes",
      image: "/luxury-restaurant-interior-elegant.jpg",
      icon: "🍽️",
    },
    {
      id: 5,
      name: "Business Center",
      description: "Fully equipped office facilities with high-speed connectivity",
      image: "/luxury-business-center.jpg",
      icon: "💼",
    },
    {
      id: 6,
      name: "Concierge Service",
      description: "24/7 dedicated concierge for all your travel arrangements",
      image: "/hotel-concierge-desk.jpg",
      icon: "🎩",
    },
  ]

  const services = [
    {
      category: "Guest Services",
      items: ["Room Service (24/7)", "Housekeeping", "Laundry & Pressing", "Wake-up Call", "Valet Parking"],
    },
    {
      category: "Dining",
      items: ["Fine Dining Restaurant", "Casual Café", "Rooftop Bar", "Room Service Menu", "Special Dietary Options"],
    },
    {
      category: "Wellness",
      items: ["Spa Treatments", "Personal Training", "Yoga Classes", "Meditation Sessions", "Nutrition Counseling"],
    },
    {
      category: "Business",
      items: ["Meeting Rooms", "Video Conferencing", "Printing Services", "Executive Lounge", "Secretarial Support"],
    },
    {
      category: "Recreation",
      items: ["Guided Tours", "Car Rentals", "Tickets & Reservations", "Spa Packages", "Fitness Programs"],
    },
    {
      category: "Technology",
      items: [
        "High-Speed Wi-Fi",
        "Smart Room Controls",
        "Streaming Services",
        "Tech Support",
        "Device Charging Stations",
      ],
    },
  ]

  return (
    <>
      {/* Page Banner */}
      <PageBanner
        title="Amenities & Services"
        subtitle="Discover world-class facilities and personalized services"
        backgroundImage="/placeholder.svg?key=7j9kl"
      />

      {/* Main Amenities */}
      <section className="section bg-background">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-headline text-center mb-8">Premium Facilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-headline text-center mb-12 text-primary-foreground">Complete Service Offerings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServicesList key={idx} category={service.category} items={service.items} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Amenities Section */}
      <section className="section bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline mb-8">Excellence in Every Detail</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Amara Hotel, we believe that exceptional amenities and personalized services are what transform a stay
              into an unforgettable experience. Our carefully curated facilities and dedicated staff ensure that every
              moment of your visit is marked by comfort, convenience, and elegance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  title: "Attention to Detail",
                  description: "Every amenity is thoughtfully selected and maintained to the highest standards",
                },
                {
                  title: "Personalization",
                  description: "Our team adapts services to your unique preferences and requirements",
                },
                {
                  title: "Innovation",
                  description: "We continuously upgrade facilities with the latest technology and trends",
                },
                { title: "Availability", description: "Most services are available 24/7 for your convenience" },
              ].map((feature, idx) => (
                <div key={idx} className="p-6 bg-card border border-border">
                  <h3 className="font-serif text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
