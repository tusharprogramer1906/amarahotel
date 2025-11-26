"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isOnBannerPage = pathname === "/"

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Rooms", href: "/rooms" },
    { label: "Amenities", href: "/amenities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Banquet", href: "/banquet" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled || !isOnBannerPage ? "bg-white shadow-md border-b border-border" : "bg-transparent"
        }`}
      >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl font-serif font-bold transition-colors duration-300 ${
            isScrolled || !isOnBannerPage ? "text-primary" : "text-white"
          }`}
        >
          AMARA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled || !isOnBannerPage ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Book Button */}
        <Link
          href="/booking"
          className="hidden md:inline-block px-6 py-2 font-medium transition-all bg-[#c89347] text-white hover:bg-[#b8813a]"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors ${
            isScrolled || !isOnBannerPage ? "text-foreground" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden border-t border-border ${
            isScrolled || !isOnBannerPage ? "bg-white" : "bg-black/80"
          }`}
        >
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled || !isOnBannerPage ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="block px-6 py-2 bg-[#c89347] text-white font-medium text-center hover:bg-[#b8813a] transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
    {!isOnBannerPage && <div className="h-20" aria-hidden />}
  </>
  )
}
