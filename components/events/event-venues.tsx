export function EventVenues() {
  const venues = [
    {
      name: "Grand Ballroom",
      capacity: "1000 guests",
      description: "Our largest venue with stunning chandeliers and flexible layout options",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Crystal Salon",
      capacity: "500 guests",
      description: "Elegant mid-sized hall perfect for weddings and corporate events",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Rooftop Terrace",
      capacity: "300 guests",
      description: "Open-air venue with panoramic city views ideal for cocktail receptions",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Garden Courtyard",
      capacity: "400 guests",
      description: "Beautiful outdoor space for intimate celebrations and receptions",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="section bg-background">
      <div className="container">
        <h2 className="text-headline text-center mb-12 fade-in-up">Our Event Venues</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venues.map((venue, idx) => (
            <div
              key={idx}
              className="overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="h-48 bg-muted overflow-hidden">
                <img
                  src={venue.image || "/placeholder.svg"}
                  alt={venue.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">{venue.name}</h3>
                <p className="text-sm text-accent font-medium mb-2">Capacity: {venue.capacity}</p>
                <p className="text-muted-foreground text-sm">{venue.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
