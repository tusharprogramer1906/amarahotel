"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function MotionGallery() {
  const galleryItems = [
    {
      title: "Luxurious Rooms",
      description: "Discover our collection of elegantly appointed accommodations",
      image: "/jourr.JPG",
      delay: 0,
    },
    {
      title: "Events & Banquet",
      description: "Savor world-class cuisine in our fine dining establishments",
      image: "25.JPG",
      delay: 0.1,
    },
    {
      title: "Lobby & Entrance",
      description: "Experience our world-class spa and wellness facilities",
      image: "/cooridor.JPG",
      delay: 0.2,
    },
    {
      title: "Cafe & Lobby",
      description: "Welcome to opulence and sophistication",
      image: "/coffee.JPG",
      delay: 0.3,
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
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500">
                <h3 className="text-white font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm mb-4">{item.description}</p>
                <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm font-medium">View Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
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
