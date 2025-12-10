"use client"

"use client"

import { useState, useEffect } from "react"
import { CreditCard, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

declare global {
  interface Window {
    Razorpay: any
  }
}

interface PaymentSectionProps {
  bookingData: {
    roomId: number
    checkIn: string
    checkOut: string
    numberOfRooms: number
    adults: number
    childrenUnder5: number
    children5to12: number
    mealPlan: string
    basePrice: number
    discountAmount: number
    taxAmount: number
    totalAmount: number
    promoCodeId: number | null
    promoCode: string | null
  }
  onBack: () => void
}

export function PaymentSection({ bookingData, onBack }: PaymentSectionProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handlePayment = async () => {
    if (!acceptedTerms) {
      setError("Please accept the terms and conditions")
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Get guest information from sessionStorage
      const guestInfoStr = sessionStorage.getItem("guestInfo")
      if (!guestInfoStr) {
        throw new Error("Guest information not found. Please go back and fill the form.")
      }
      const guestInfo = JSON.parse(guestInfoStr)

      // Create booking
      const bookingResponse = await fetch("/api/bookings/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...bookingData,
          guestInfo,
        }),
      })

      if (!bookingResponse.ok) {
        const errorData = await bookingResponse.json()
        throw new Error(errorData.error || "Failed to create booking")
      }

      const { booking } = await bookingResponse.json()

      // Create Razorpay order
      const orderResponse = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: bookingData.totalAmount,
          bookingId: booking.id,
          bookingReference: booking.booking_reference,
        }),
      })

      if (!orderResponse.ok) {
        throw new Error("Failed to create payment order")
      }

      const { orderId, amount } = await orderResponse.json()

      // Initialize Razorpay checkout
      if (!window.Razorpay) {
        throw new Error("Razorpay SDK not loaded")
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount,
        currency: "INR",
        name: "Amara Hotel",
        description: `Booking ${booking.booking_reference}`,
        order_id: orderId,
        handler: async function (response: any) {
          // Verify payment on server
          try {
            const verifyResponse = await fetch("/api/payments/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookingId: booking.id,
              }),
            })

            const verifyData = await verifyResponse.json()

            if (verifyData.verified) {
              // Redirect to success page
              router.push(`/booking/success?reference=${booking.booking_reference}`)
            } else {
              throw new Error("Payment verification failed")
            }
          } catch (error: any) {
            console.error("Payment verification error:", error)
            setError("Payment verification failed. Please contact support.")
            setLoading(false)
          }
        },
        prefill: {
          name: `${guestInfo.firstName} ${guestInfo.lastName}`,
          email: guestInfo.email,
          contact: guestInfo.phone,
        },
        theme: {
          color: "#c9a961",
        },
        modal: {
          ondismiss: function () {
            setLoading(false)
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error: any) {
      console.error("Payment error:", error)
      setError(error.message || "Failed to process payment")
      setLoading(false)
    }
  }

  return (
    <div className="bg-card border border-border p-6 rounded-lg">
      <h2 className="text-2xl font-serif font-bold mb-6">Make Payment</h2>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {/* Payment Method */}
        <div>
          <h3 className="font-semibold mb-4">Payment Option</h3>
          <div className="border border-border rounded-lg p-4 bg-muted/30">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="razorpay"
                name="payment"
                defaultChecked
                className="w-4 h-4 text-accent"
              />
              <label htmlFor="razorpay" className="flex-1 cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="font-medium">RazorPay - International Cards/UPI/NetBanking/EMI</span>
                  <div className="flex gap-2">
                    <span className="text-xs bg-white px-2 py-1 rounded">VISA</span>
                    <span className="text-xs bg-white px-2 py-1 rounded">UPI</span>
                    <span className="text-xs bg-white px-2 py-1 rounded">Net Banking</span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 w-4 h-4 text-accent"
            />
            <span className="text-sm">
              I have read and accept the{" "}
              <a href="/terms" className="text-accent hover:underline" target="_blank">
                Reservation & Cancellation Policy
              </a>
              .
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 border border-border hover:bg-muted transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <button
            onClick={handlePayment}
            disabled={loading || !acceptedTerms}
            className="flex-1 px-6 py-3 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              "Processing..."
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                MAKE PAYMENT
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

