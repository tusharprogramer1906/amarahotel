import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const IG_URL = "https://www.instagram.com/hotelamaragk/"

// Three preview thumbnails shown in footer
const igPreviews = [
  { src: "/amara-hotel-deluxe-room-interior.webp", alt: "Deluxe room at Amara Hotel Greater Kailash Delhi" },
  { src: "/amara-hotel-event-banquet-gk1.webp",   alt: "Banquet hall at Amara Hotel GK1 South Delhi" },
  { src: "/amara-hotel-coffee-service.webp",       alt: "In-room coffee service at Amara Hotel Delhi" },
]

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">

          {/* Brand + Instagram */}
          <div className="fade-in-up">
            <h3 className="font-serif text-xl font-bold mb-4 text-accent">AMARA</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Experience timeless elegance and unparalleled hospitality.
            </p>

            {/* Instagram block */}
            <div className="border border-white/10 rounded-xl p-4">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-white transition-colors group mb-3"
              >
                <InstagramIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">@hotelamaragk</span>
              </a>
              <p className="text-primary-foreground/55 text-xs leading-relaxed mb-4">
                Follow us for latest updates &amp; guest experiences
              </p>

              {/* Mini thumbnails */}
              <div className="flex gap-1.5">
                {igPreviews.map((img, i) => (
                  <a
                    key={i}
                    href={IG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on Instagram"
                    className="relative w-16 h-16 rounded-lg overflow-hidden group flex-shrink-0"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      quality={60}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <InstagramIcon className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-accent">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"        className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about"   className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/rooms"   className="hover:text-accent transition-colors">Rooms</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="/blog"    className="hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/banquet" className="hover:text-accent transition-colors">Banquet</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li>
                <a
                  href="https://hotels.eglobe-solutions.com/amarahoteldelhi/booking/hotels/amara-hotel-new-delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Book a Room
                </a>
              </li>
              <li>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  Instagram
                </a>
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
                  C-30, Hansraj Gupta Rd,<br />
                  Greater Kailash-1, C Block,<br />
                  New Delhi, Delhi 110048
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+919268140219" className="hover:text-accent transition-colors">+91 92681 40219</a>
                  <a href="tel:+919971124279" className="hover:text-accent transition-colors">+91 99711 24279</a>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="mailto:heavenhotel1@gmail.com" className="hover:text-accent transition-colors">
                  heavenhotel1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="border-t border-primary-foreground/20 pt-8 fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-accent">&copy; {new Date().getFullYear()} Amara Hotel. All rights reserved.</p>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary-foreground/50 hover:text-accent transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              Follow @hotelamaragk
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
