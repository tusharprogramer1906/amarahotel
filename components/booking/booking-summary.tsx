"use client"

"use client"

import { format } from "date-fns"
import { Calendar, Users, Bed } from "lucide-react"

interface BookingSummaryProps {
  checkIn: Date | null
  checkOut: Date | null
  nights: number
  selectedRoom: { name: string; base_price: number } | null
  numberOfRooms: number
  adults: number
  childrenUnder5: number
  children5to12: number
  mealPlan: string
  basePrice: number
  discountAmount: number
  taxAmount: number
  totalAmount: number
}

export function BookingSummary({
  checkIn,
  checkOut,
  nights,
  selectedRoom,
  numberOfRooms,
  adults,
  childrenUnder5,
  children5to12,
  mealPlan,
  basePrice,
  discountAmount,
  taxAmount,
  totalAmount,
}: BookingSummaryProps) {
  if (!checkIn || !checkOut || !selectedRoom) {
    return (
      <div className="bg-card border border-border p-6 rounded-lg">
        <h3 className="font-semibold mb-4 text-accent">Reservation Summary</h3>
        <p className="text-sm text-muted-foreground">Select dates and room to see summary</p>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border p-6 rounded-lg">
      <h3 className="font-semibold mb-4 text-accent">Reservation Summary</h3>

      <div className="space-y-4">
        {/* Dates */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>Check In</span>
          </div>
          <span className="font-medium">{format(checkIn, "dd MMM, yyyy")}</span>
        </div>

        <div className="flex items-center justify-center">
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
            {nights} {nights === 1 ? "night" : "nights"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>Check Out</span>
          </div>
          <span className="font-medium">{format(checkOut, "dd MMM, yyyy")}</span>
        </div>

        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Bed className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">{selectedRoom.name}</span>
          </div>
          <p className="text-xs text-muted-foreground ml-6">Meal Plan: {mealPlan}</p>
          <p className="text-xs text-muted-foreground ml-6">Room {numberOfRooms}</p>
          <div className="ml-6 space-y-1 text-xs text-muted-foreground">
            <p>Adults: {adults}</p>
            {childrenUnder5 > 0 && <p>Child (&lt;5 yrs): {childrenUnder5}</p>}
            {children5to12 > 0 && <p>Child (5yrs-12yrs): {children5to12}</p>}
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Total Charges</span>
            <span>₹{basePrice.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
          </div>
          {discountAmount > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Total Discount</span>
              <span>- ₹{discountAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span>Total Taxes</span>
            <span>₹{taxAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        {/* Grand Total */}
        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center bg-accent/10 p-3 rounded-md">
            <span className="font-semibold">Grand Total</span>
            <span className="text-xl font-bold text-accent">
              ₹{totalAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

