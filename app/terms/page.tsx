import { PageBanner } from "@/components/ui/page-banner"
import Link from "next/link"

export default function TermsPage() {
  return (
    <>
      <PageBanner
        title="Reservation Policy"
        subtitle="Please read our policies carefully before making a reservation"
        backgroundImage="/superdeluxe.JPG"
      />

      <section className="section bg-background">
        <div className="container max-w-4xl">
          <div className="bg-card border border-border p-8 md:p-12 rounded-lg space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Check-in / Check-out</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Check-in time is 12:00 PM, Check-out time is 12:00 PM.</li>
                <li>
                  • Early check-in or late check-out is subject to availability and may be chargeable by the hotel
                  directly.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Cancellation Policy</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• If cancelled before 7 days: 85% refund</li>
                <li>• Between 7 days - 72 hrs: 50% refund</li>
                <li>• Less than 72hr: No refund</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Guest Requirements</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• It is mandatory for guests to present valid photo identification upon check-in.</li>
                <li>• At least one of the guests must be 18 years of age or older.</li>
                <li>• No refunds will be applicable in case of No-Shows or Early Checkout.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Payment & Verification</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• The hotel reserves the right to verify the credit card used for the transaction.</li>
                <li>• All payments are processed securely through Razorpay payment gateway.</li>
                <li>• Payment confirmation will be sent via email upon successful transaction.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Reservation Modification/Cancellation Rights</h2>
              <p className="text-muted-foreground">
                We reserve the right to cancel or modify reservations where it appears that a customer has engaged in
                fraudulent or inappropriate activity or under other circumstances where it appears that the reservations
                contain or resulted from a mistake or error.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Refund Processing</h2>
              <p className="text-muted-foreground">
                Refund (if applicable) shall be initiated within 48 hours of receiving the request and the payment would
                be credited within 5-7 working days via the same mode as used while making the booking.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Liability</h2>
              <p className="text-muted-foreground">
                The total liability for this booking will be limited to the amount paid to us. We will not be held
                responsible for any additional incidental charges.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Modification Instructions</h2>
              <p className="text-muted-foreground">
                To make modifications or cancellations please login to{" "}
                <Link href="/booking/manage" className="text-accent hover:underline">
                  Cancel/Reschedule Booking
                </Link>{" "}
                section on booking page.
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                For any queries or assistance, please contact us at{" "}
                <a href="mailto:reservation.amara@heaven-hotels.com" className="text-accent hover:underline">
                  heavenhotel1@gmail.com
                </a>{" "}
                or call us at +91 9268140219 / +91 9971124279
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/booking"
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
              >
                Back to Booking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

