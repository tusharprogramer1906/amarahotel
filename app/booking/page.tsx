"use client"

import { PageBanner } from "@/components/ui/page-banner"
import { BookingForm } from "@/components/booking/booking-form"

export default function BookingPage() {
  return (
    <>
      <PageBanner
        title="Book Your Stay"
        subtitle="Reserve your room at Amara Hotel and prepare for an unforgettable experience"
        backgroundImage="/superdeluxe.JPG"
      />

      <section className="section bg-background">
        <div className="container max-w-2xl">
          <BookingForm />
        </div>
      </section>

      <section className="section bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-headline text-center mb-12 text-primary-foreground">Booking Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Flexible Cancellation",
                description: "Free cancellation up to 48 hours before arrival",
              },
              {
                title: "Best Price Guarantee",
                description: "If you find a lower rate, we'll match it plus offer 10% discount",
              },
              {
                title: "Exclusive Offers",
                description: "Members receive special rates and complimentary upgrades",
              },
            ].map((info, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-lg font-serif font-bold mb-2 text-primary-foreground">{info.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
