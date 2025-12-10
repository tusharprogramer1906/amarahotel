"use client"

import { useState } from "react"
import { Search, Calendar, Users, Mail, Phone, X } from "lucide-react"
import { PageBanner } from "@/components/ui/page-banner"
import Link from "next/link"

export default function ManageBookingPage() {
  const [reference, setReference] = useState("")
  const [email, setEmail] = useState("")
  const [booking, setBooking] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const queryParam = reference ? `reference=${reference}` : `email=${email}`
      const response = await fetch(`/api/bookings/lookup?${queryParam}`)

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Booking not found")
      }

      const data = await response.json()
      setBooking(data.booking)
    } catch (error: any) {
      setError(error.message)
      setBooking(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageBanner
        title="Manage Booking"
        subtitle="Look up your reservation using booking reference or email"
        backgroundImage="/superdeluxe.JPG"
      />

      <section className="section bg-background">
        <div className="container max-w-2xl">
          <div className="bg-card border border-border p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold mb-6">Find Your Booking</h2>

            <form onSubmit={handleSearch} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Booking Reference</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    placeholder="Enter booking reference (e.g., AMR20250101001)"
                    className="w-full pl-10 pr-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address used for booking"
                    className="w-full pl-10 pr-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || (!reference && !email)}
                className="w-full px-6 py-3 bg-accent text-white font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Searching..." : "Search Booking"}
              </button>
            </form>
          </div>

          {booking && (
            <div className="mt-8 bg-card border border-border p-6 rounded-lg space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif font-bold">Booking Details</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    booking.status === "confirmed"
                      ? "bg-green-100 text-green-700"
                      : booking.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {booking.status.toUpperCase()}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Booking Reference</p>
                  <p className="font-medium">{booking.booking_reference}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Room Type</p>
                  <p className="font-medium">{booking.room_name || "Deluxe Room"}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Check-in</p>
                  <p className="font-medium">
                    {new Date(booking.check_in).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Check-out</p>
                  <p className="font-medium">
                    {new Date(booking.check_out).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Guests</p>
                  <p className="font-medium">
                    {booking.adults} Adult{booking.adults > 1 ? "s" : ""}
                    {booking.children_under_5 + booking.children_5_12 > 0 &&
                      `, ${booking.children_under_5 + booking.children_5_12} Child${
                        booking.children_under_5 + booking.children_5_12 > 1 ? "ren" : ""
                      }`}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                  <p className="font-bold text-accent">
                    ₹{parseFloat(booking.total_amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold mb-3">Guest Information</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">Name:</span> {booking.first_name}{" "}
                    {booking.last_name}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Email:</span> {booking.email}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Phone:</span> {booking.phone}
                  </p>
                </div>
              </div>

              {booking.status === "pending" && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-sm text-yellow-800">
                    Your booking is pending payment. Please complete the payment to confirm your reservation.
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 text-center">
            <Link href="/booking" className="text-accent hover:underline">
              Make a new booking
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

