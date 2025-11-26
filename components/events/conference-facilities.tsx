export function ConferenceFacilities() {
  const facilities = [
    {
      name: "Main Conference Hall",
      capacity: "800 seats",
      features: ["Auditorium Setup", "4K Projection", "Advanced Sound System", "Live Streaming Ready"],
    },
    {
      name: "Breakout Rooms",
      capacity: "Multiple Rooms",
      features: ["Flexible Configurations", "Meeting Technology", "Breakout Sessions", "Video Conferencing"],
    },
    {
      name: "Executive Boardroom",
      capacity: "50 seats",
      features: ["Video Conferencing", "Presentation Equipment", "Executive Services", "Privacy"],
    },
  ]

  return (
    <section className="section bg-background">
      <div className="container">
        <h2 className="text-headline text-center mb-12">Conference Facilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => (
            <div key={idx} className="bg-card border border-border p-8">
              <h3 className="text-xl font-serif font-bold mb-2">{facility.name}</h3>
              <p className="text-sm text-accent font-medium mb-6">{facility.capacity}</p>

              <ul className="space-y-3">
                {facility.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
