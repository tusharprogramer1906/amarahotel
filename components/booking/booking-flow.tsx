"use client"

import { useState, useEffect } from "react"
import { Calendar, Users, MapPin, Phone, Mail, CreditCard } from "lucide-react"
import { DatePicker } from "./date-picker"
import { RoomSelection } from "./room-selection"
import { GuestInformation } from "./guest-information"
import { PaymentSection } from "./payment-section"
import { BookingSummary } from "./booking-summary"
import { format, differenceInDays, addDays } from "date-fns"

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

export function BookingFlow() {
  const [step, setStep] = useState<"dates" | "rooms" | "guest" | "payment">("dates")
  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)
  const [rooms, setRooms] = useState<Room[]>([])
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [numberOfRooms, setNumberOfRooms] = useState(1)
  const [adults, setAdults] = useState(1)
  const [childrenUnder5, setChildrenUnder5] = useState(0)
  const [children5to12, setChildren5to12] = useState(0)
  const [mealPlan, setMealPlan] = useState("Room Only")
  const [availability, setAvailability] = useState<Record<number, number>>({})
  const [loading, setLoading] = useState(false)
  const [promoCode, setPromoCode] = useState("")
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null)
  const [promoLoading, setPromoLoading] = useState(false)

  // Calculate pricing
  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0
  const basePrice = selectedRoom ? selectedRoom.base_price * nights * numberOfRooms : 0
  const discountAmount = appliedPromo?.discount || 0
  const taxRate = 0.05 // 5% GST
  const taxAmount = (basePrice - discountAmount) * taxRate
  const totalAmount = basePrice - discountAmount + taxAmount

  // Load rooms on mount
  useEffect(() => {
    loadRooms()
  }, [])

  // Check availability when dates change
  useEffect(() => {
    if (checkIn && checkOut) {
      checkRoomAvailability()
    }
  }, [checkIn, checkOut])

  const loadRooms = async () => {
    try {
      const response = await fetch("/api/availability")
      const data = await response.json()
      if (data.rooms) {
        setRooms(data.rooms)
      }
    } catch (error) {
      console.error("Failed to load rooms:", error)
    }
  }

  const checkRoomAvailability = async () => {
    if (!checkIn || !checkOut) return

    setLoading(true)
    try {
      const response = await fetch(
        `/api/availability?checkIn=${format(checkIn, "yyyy-MM-dd")}&checkOut=${format(checkOut, "yyyy-MM-dd")}`
      )
      const data = await response.json()
      
      if (data.rooms) {
        const availMap: Record<number, number> = {}
        data.rooms.forEach((room: any) => {
          availMap[room.roomId] = room.available
        })
        setAvailability(availMap)
      }
    } catch (error) {
      console.error("Failed to check availability:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleApplyPromo = async () => {
    if (!promoCode || basePrice === 0) return

    setPromoLoading(true)
    try {
      const response = await fetch("/api/promo-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: promoCode, amount: basePrice }),
      })

      const data = await response.json()
      if (data.valid) {
        setAppliedPromo({ code: promoCode.toUpperCase(), discount: data.discount })
      } else {
        alert(data.error || "Invalid promo code")
      }
    } catch (error) {
      console.error("Failed to apply promo code:", error)
      alert("Failed to apply promo code")
    } finally {
      setPromoLoading(false)
    }
  }

  const handleDateSelection = () => {
    if (checkIn && checkOut) {
      setStep("rooms")
    }
  }

  const handleRoomSelection = () => {
    if (selectedRoom) {
      setStep("guest")
    }
  }

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Booking Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Date Selection */}
          {step === "dates" && (
            <div className="bg-card border border-border p-6 rounded-lg">
              <h2 className="text-2xl font-serif font-bold mb-6">Select Dates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Check-in Date</label>
                  <DatePicker
                    selected={checkIn}
                    onChange={setCheckIn}
                    minDate={new Date()}
                    placeholderText="Select check-in date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Check-out Date</label>
                  <DatePicker
                    selected={checkOut}
                    onChange={setCheckOut}
                    minDate={checkIn ? addDays(checkIn, 1) : addDays(new Date(), 1)}
                    placeholderText="Select check-out date"
                  />
                </div>
              </div>
              {checkIn && checkOut && (
                <button
                  onClick={handleDateSelection}
                  className="mt-6 w-full px-6 py-3 bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
                >
                  Check Availability
                </button>
              )}
            </div>
          )}

          {/* Room Selection */}
          {step === "rooms" && (
            <RoomSelection
              rooms={rooms}
              availability={availability}
              selectedRoom={selectedRoom}
              onSelectRoom={setSelectedRoom}
              numberOfRooms={numberOfRooms}
              onNumberOfRoomsChange={setNumberOfRooms}
              adults={adults}
              onAdultsChange={setAdults}
              childrenUnder5={childrenUnder5}
              onChildrenUnder5Change={setChildrenUnder5}
              children5to12={children5to12}
              onChildren5to12Change={setChildren5to12}
              mealPlan={mealPlan}
              onMealPlanChange={setMealPlan}
              onContinue={() => setStep("guest")}
              loading={loading}
            />
          )}

          {/* Guest Information */}
          {step === "guest" && (
            <GuestInformation
              onContinue={() => setStep("payment")}
              onBack={() => setStep("rooms")}
            />
          )}

          {/* Payment */}
          {step === "payment" && (
            <PaymentSection
              bookingData={{
                roomId: selectedRoom!.id,
                checkIn: format(checkIn!, "yyyy-MM-dd"),
                checkOut: format(checkOut!, "yyyy-MM-dd"),
                numberOfRooms,
                adults,
                childrenUnder5,
                children5to12,
                mealPlan,
                basePrice,
                discountAmount,
                taxAmount,
                totalAmount,
                promoCodeId: null,
                promoCode: appliedPromo?.code || null,
              }}
              onBack={() => setStep("guest")}
            />
          )}
        </div>

        {/* Booking Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            {/* Promo Code */}
            <div className="bg-card border border-border p-4 rounded-lg">
              <h3 className="font-semibold mb-3 text-accent">Promo Code</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-1 px-3 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  disabled={!!appliedPromo}
                />
                <button
                  onClick={handleApplyPromo}
                  disabled={promoLoading || !!appliedPromo}
                  className="px-4 py-2 bg-accent text-white font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 text-sm"
                >
                  {promoLoading ? "..." : "APPLY"}
                </button>
              </div>
              {appliedPromo && (
                <p className="text-sm text-green-600 mt-2">
                  Promo code {appliedPromo.code} applied! Save ₹{appliedPromo.discount.toLocaleString("en-IN")}
                </p>
              )}
            </div>

            {/* Booking Summary */}
            <BookingSummary
              checkIn={checkIn}
              checkOut={checkOut}
              nights={nights}
              selectedRoom={selectedRoom}
              numberOfRooms={numberOfRooms}
              adults={adults}
              childrenUnder5={childrenUnder5}
              children5to12={children5to12}
              mealPlan={mealPlan}
              basePrice={basePrice}
              discountAmount={discountAmount}
              taxAmount={taxAmount}
              totalAmount={totalAmount}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

