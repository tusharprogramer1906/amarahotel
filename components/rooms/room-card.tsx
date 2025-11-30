"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

interface RoomCardProps {
  room: {
    id: number
    name: string
    image: string
    description: string
    amenities: string[]
    specs: string[]
    price: string
  }
}

export function RoomCard({ room }: RoomCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow group fade-in-up flex flex-col h-full">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={room.image || "/placeholder.svg"}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold mb-2">{room.name}</h3>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">From per night</p>
            <p className="text-2xl font-bold text-accent">{room.price}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">{room.description}</p>

        {/* Specs */}
        <div className="flex gap-2 mb-4 pb-4 border-b border-border">
          {room.specs.map((spec, idx) => (
            <span key={idx} className="text-xs bg-muted text-foreground px-3 py-1 rounded-full">
              {spec}
            </span>
          ))}
        </div>

        {/* Amenities Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between py-2 text-sm font-medium text-foreground hover:text-accent transition-colors mb-3"
        >
          <span>Room Amenities</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </button>

        {/* Amenities List */}
        {isExpanded && (
          <div className="mb-4 pb-4 border-b border-border">
            <ul className="grid grid-cols-2 gap-2">
              {room.amenities.map((amenity, idx) => (
                <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <Link
          href="/booking"
          className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          Book This Room
        </Link>
      </div>
    </div>
  )
}
