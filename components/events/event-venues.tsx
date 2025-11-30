export function EventVenues() {
  const venues = [
    {
      name: "Weddings & Receptions",
      capacity: "200 guests",
      description: "Make your special day unforgettable at Heaven Hotels. Our elegant venues, dedicated event team, and exceptional culinary offerings come together to create the perfect wedding celebration.",
      image: "/ban1.JPG",
    },
    {
      name: "Conferences & Meetings",
      capacity: "50+ guests",
      description: "Host seamless corporate events with our state-of-the-art facilities. From conferences and seminars to business meetings, we provide modern audio-visual equipment and a professional setting to support your presentations.",
      image: "/conference.JPG",
    },
    {
      name: "Social Gatherings",
      capacity: "100+ guests",
      description: "Whether it’s a birthday, family reunion, or a casual celebration, our versatile event spaces are designed to bring people together and create memorable experiences.",
      image: "banquet.JPG",
    },
    {
      name: "Special Occasions",
      capacity: "200 guests",
      description: "Celebrate life’s important moments—anniversaries, engagements, and more. Our refined ambience and attentive service ensure every occasion feels truly special.",
      image: "/25.JPG",
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
