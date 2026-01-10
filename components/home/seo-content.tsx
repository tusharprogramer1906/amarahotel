import Image from "next/image"

export function SeoContent() {
  const features = [
    { value: "Luxury", label: "boutique rooms with modern comforts" },
    { value: "24/7", label: "concierge and personalized service" },
    { value: "Elegant", label: "banquet space for celebrations & events" },
    { value: "Prime", label: "location in Greater Kailash 1, South Delhi" },
  ]

  return (
    <section className="section bg-background">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">The Amara Experience</p>
          <h2 className="text-headline mb-6">Luxury in Every Detail</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Amara Hotel Greater Kailash is a premium boutique hotel in South Delhi, offering a refined stay experience with modern comfort and personalized hospitality. As the <strong className="text-foreground">official website</strong> of Amara Hotel, we provide direct bookings, luxury rooms, and elegant banquet facilities designed for both leisure and business travelers.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Thoughtfully designed interiors, warm service, and a calm ambiance come together to create a space where every stay feels effortless and memorable.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">Why Stay at Amara Hotel</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index}>
                  <p className="text-2xl font-semibold text-[#c89347] mb-1">{feature.value}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're visiting for work, leisure, or a special occasion, <strong className="text-foreground">Amara Hotel Greater Kailash</strong> ensures a comfortable and seamless stay.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full bg-[#c89347]/10 rounded-3xl" aria-hidden />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/banquet.JPG"
              alt="Amara Hotel - Elegant Banquet Space"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
