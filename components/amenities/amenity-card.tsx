import Image from "next/image"

interface AmenityCardProps {
  amenity: {
    id: number
    name: string
    description: string
    image: string
    icon: string
  }
}

export function AmenityCard({ amenity }: AmenityCardProps) {
  return (
    <div className="bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow group fade-in-up">
      <div className="relative h-64 bg-muted overflow-hidden">
        <Image
          src={amenity.image || "/placeholder.svg"}
          alt={amenity.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          quality={75}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-[1]" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{amenity.icon}</span>
          <h3 className="text-xl font-serif font-bold">{amenity.name}</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{amenity.description}</p>
      </div>
    </div>
  )
}
