import Link from "next/link"

export function FeaturedRooms() {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      description: "Spacious accommodations with premium amenities and city views",
      image: "/luxury-hotel-deluxe-room.png",
    },
    {
      id: 2,
      name: "Super Deluxe Room",
      description: "Elegant suites featuring separate living areas and marble bathrooms",
      image: "/superdeluxe.JPG",
    },
  ]

  return (
    <section className="section bg-background">
      <div className="container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-headline mb-4">Our Rooms & Suites</h2>
          <p className="text-subheadline">Discover our collection of elegantly appointed accommodations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="group overflow-hidden bg-card rounded-lg shadow-sm fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold mb-3">{room.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">{room.description}</p>
                <Link
                  href={`/rooms#${room.id}`}
                  className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: "0.45s" }}>
          <Link href="/rooms" className="btn-primary inline-block">
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  )
}
