"use client"

"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

interface Room {
  id: number
  name: string
  slug: string
  description: string
  base_price: number
  max_guests: number
  total_inventory: number
  image_url: string
  amenities: string[]
}

interface RoomSelectionProps {
  rooms: Room[]
  availability: Record<number, number>
  selectedRoom: Room | null
  onSelectRoom: (room: Room) => void
  numberOfRooms: number
  onNumberOfRoomsChange: (count: number) => void
  adults: number
  onAdultsChange: (count: number) => void
  childrenUnder5: number
  onChildrenUnder5Change: (count: number) => void
  children5to12: number
  onChildren5to12Change: (count: number) => void
  mealPlan: string
  onMealPlanChange: (plan: string) => void
  onContinue: () => void
  loading: boolean
}

export function RoomSelection({
  rooms,
  availability,
  selectedRoom,
  onSelectRoom,
  numberOfRooms,
  onNumberOfRoomsChange,
  adults,
  onAdultsChange,
  childrenUnder5,
  onChildrenUnder5Change,
  children5to12,
  onChildren5to12Change,
  mealPlan,
  onMealPlanChange,
  onContinue,
  loading,
}: RoomSelectionProps) {
  const [expandedRoom, setExpandedRoom] = useState<number | null>(null)

  const mealPlans = ["Room Only", "Breakfast", "Half Board", "Full Board"]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-bold">Select Room</h2>

      {rooms.map((room) => {
        const available = availability[room.id] || 0
        const isSelected = selectedRoom?.id === room.id
        const isExpanded = expandedRoom === room.id

        return (
          <div
            key={room.id}
            className={`bg-card border-2 rounded-lg overflow-hidden transition-all ${
              isSelected ? "border-accent" : "border-border"
            }`}
          >
            {/* Room Image and Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                <Image
                  src={room.image_url || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-2">
                <h3 className="text-xl font-serif font-bold mb-2">{room.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-accent">
                    ₹{room.base_price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-muted-foreground">Per Night</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{room.description}</p>

                {/* Availability */}
                {available > 0 ? (
                  <p className="text-sm text-green-600 mb-4">
                    Only {available} room{available > 1 ? "s" : ""} left
                  </p>
                ) : (
                  <p className="text-sm text-red-600 mb-4">Not available</p>
                )}

                {/* Select Room Button */}
                <button
                  onClick={() => onSelectRoom(room)}
                  disabled={available === 0}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    isSelected
                      ? "bg-accent text-white"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSelected ? "Selected" : "Select Room"}
                </button>
              </div>
            </div>

            {/* Expanded Details */}
            {isSelected && (
              <div className="border-t border-border p-6 space-y-4">
                {/* Room Selection */}
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Select Room:</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onNumberOfRoomsChange(Math.max(1, numberOfRooms - 1))}
                      className="px-2 py-1 border border-border hover:bg-muted"
                      disabled={numberOfRooms <= 1}
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{numberOfRooms}</span>
                    <button
                      onClick={() => onNumberOfRoomsChange(Math.min(available, numberOfRooms + 1))}
                      className="px-2 py-1 border border-border hover:bg-muted"
                      disabled={numberOfRooms >= available}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Meal Plan */}
                <div>
                  <label className="block text-sm font-medium mb-2">Meal Plan:</label>
                  <select
                    value={mealPlan}
                    onChange={(e) => onMealPlanChange(e.target.value)}
                    className="w-full md:w-auto px-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {mealPlans.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guest Details */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium">Room 1:</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Adults</label>
                      <select
                        value={adults}
                        onChange={(e) => onAdultsChange(parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Child (Age 5-12yrs)</label>
                      <select
                        value={children5to12}
                        onChange={(e) => onChildren5to12Change(parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        {[0, 1, 2].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Child (below 5yrs)</label>
                      <select
                        value={childrenUnder5}
                        onChange={(e) => onChildrenUnder5Change(parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        {[0, 1, 2].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  onClick={onContinue}
                  className="w-full md:w-auto px-8 py-3 bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Expand/Collapse Button */}
            {!isSelected && (
              <button
                onClick={() => setExpandedRoom(isExpanded ? null : room.id)}
                className="w-full px-6 py-3 border-t border-border text-sm font-medium hover:bg-muted/50 flex items-center justify-center gap-2"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    See More <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}

