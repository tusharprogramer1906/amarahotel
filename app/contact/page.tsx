"use client"

import { PageBanner } from "@/components/ui/page-banner"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { Map } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Get in Touch"
        subtitle="We'd love to hear from you. Contact us for inquiries and reservations"
        backgroundImage="/placeholder.svg?key=6c7dw"
      />

      <section className="section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-primary text-primary-foreground py-0">
        <div className="h-96 md:h-screen w-full bg-muted relative flex items-center justify-center">
          <div className="text-center">
            <Map className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Interactive map coming soon</p>
          </div>
        </div>
      </section>
    </>
  )
}
