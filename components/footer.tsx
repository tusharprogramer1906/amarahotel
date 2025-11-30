import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div className="fade-in-up">
            <h3 className="font-serif text-xl font-bold mb-4 text-accent">AMARA</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Experience timeless elegance and unparalleled hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-accent">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-accent transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/amenities" className="hover:text-accent transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/banquet" className="hover:text-accent transition-colors">
                  Banquet
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-accent">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span>
                C-30, Hansraj Gupta Rd, 
                  <br />
                  Greater Kailash-1, C Block, G K, New Delhi, Delhi 110048
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <span>+91 9268140219</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <span>reservation.amara@heaven-hotels.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="text-accent">&copy; 2025 Amara Hotel. All rights reserved.</p>
         {/*    <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
