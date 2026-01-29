"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function MotionGallery() {
  const galleryItems = [
    {
      title: "Luxurious Rooms",
      description: "Discover our collection of elegantly appointed accommodations",
      image: "/jourr.JPG",
      delay: 0,
      href: "/rooms",
    },
    {
      title: "Events & Banquet",
      description: "Savor world-class cuisine in our fine dining establishments",
      image: "/25.JPG",
      delay: 0.1,
      href: "/banquet",
    },
    {
      title: "Lobby & Entrance",
      description: "Experience our world-class spa and wellness facilities",
      image: "/cooridor.JPG",
      delay: 0.2,
      href: "/gallery",
    },
    {
      title: "Cafe",
      description: "Welcome to opulence and sophistication",
      image: "/coffee.JPG",
      delay: 0.3,
      href: "/gallery",
    },
  ]

  return (
    <section className="section bg-background py-24">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-headline mb-4">Explore Amara</h2>
          <p className="text-subheadline max-w-2xl mx-auto">
            Immerse yourself in the elegance and sophistication that define our hotel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Link key={index} href={item.href || "/gallery"}>
            <motion.div
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg h-64"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                quality={75}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500">
                <h3 className="text-white font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm mb-4">{item.description}</p>
                <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm font-medium">
                      {item.href === "/banquet" ? "View Banquet" : item.href === "/rooms" ? "View Rooms" : "View Gallery"}
                    </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/gallery"
            className="inline-block px-8 py-3 bg-[#c89347] text-white font-medium hover:bg-[#b8813a] transition-colors"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
