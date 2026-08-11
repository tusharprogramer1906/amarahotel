import type { Metadata } from "next"
import { PageBanner } from "@/components/ui/page-banner"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact Amara Hotel | Greater Kailash 1, New Delhi",
  description:
    "Get in touch with Amara Hotel in Greater Kailash 1, New Delhi. Call, email or send us a message for room bookings, banquet enquiries and event planning.",
  openGraph: {
    title: "Contact Amara Hotel | Greater Kailash 1, New Delhi",
    description:
      "Reach out to Amara Hotel in GK1, South Delhi for room reservations, banquet bookings, and event enquiries. We respond promptly.",
    url: `${siteConfig.url}/contact`,
    images: ["/amara-hotel-reception-area.webp"],
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Get in Touch"
        subtitle="We'd love to hear from you. Contact us for inquiries and reservations"
        backgroundImage="/contact.jpg"
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
      <section className="section bg-background py-0">
        <div className="w-full h-96 md:h-[600px] relative">
          <iframe
            src="https://www.google.com/maps?q=C-30,+Hansraj+Gupta+Rd,+Greater+Kailash-1,+C+Block,+G+K,+New+Delhi,+Delhi+110048&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Amara Hotel Location — Greater Kailash 1, New Delhi"
          />
          <div className="absolute bottom-4 right-4 z-10">
            <a
              href="https://www.google.com/maps/search/?api=1&query=C-30%2C+Hansraj+Gupta+Rd%2C+Greater+Kailash-1%2C+C+Block%2C+G+K%2C+New+Delhi%2C+Delhi+110048"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors shadow-lg"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
