"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { CheckCircle, Calendar, Users, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { PageBanner } from "@/components/ui/page-banner"

export default function BookingSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const reference = searchParams.get("reference")
  const [booking, setBooking] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (reference) {
      fetchBooking()
    }
  }, [reference])

  const fetchBooking = async () => {
    try {
      const response = await fetch(`/api/bookings/lookup?reference=${reference}`)
      if (response.ok) {
        const data = await response.json()
        setBooking(data.booking)
      }
    } catch (error) {
      console.error("Failed to fetch booking:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container py-16 text-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (!booking) {
    return (
      <div className="container py-16 text-center">
        <p>Booking not found</p>
        <Link href="/booking" className="text-accent hover:underline mt-4 inline-block">
          Make a new booking
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageBanner
        title="Booking Confirmed"
        subtitle="Your reservation has been successfully confirmed"
        backgroundImage="/superdeluxe.JPG"
      />

      <section className="section bg-background">
        <div className="container max-w-3xl">
          <div className="bg-card border border-border p-8 rounded-lg text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Your booking reference: <strong className="text-foreground">{booking.booking_reference}</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to <strong>{booking.email}</strong>
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-lg space-y-6">
            <h2 className="text-xl font-serif font-bold">Booking Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Check-in</p>
                  <p className="font-medium">
                    {new Date(booking.check_in).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Check-out</p>
                  <p className="font-medium">
                    {new Date(booking.check_out).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Guests</p>
                  <p className="font-medium">
                    {booking.adults} Adult{booking.adults > 1 ? "s" : ""}
                    {booking.children_under_5 + booking.children_5_12 > 0 &&
                      `, ${booking.children_under_5 + booking.children_5_12} Child${
                        booking.children_under_5 + booking.children_5_12 > 1 ? "ren" : ""
                      }`}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Contact</p>
                  <p className="font-medium">{booking.phone}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-4">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Amount</span>
                  <span className="font-bold text-accent">
                    ₹{parseFloat(booking.total_amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Payment Status: {booking.payment_status}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/booking/manage"
              className="flex-1 px-6 py-3 border border-border hover:bg-muted transition-colors text-center"
            >
              Manage Booking
            </Link>
            <Link
              href="/"
              className="flex-1 px-6 py-3 bg-accent text-white hover:bg-accent/90 transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

