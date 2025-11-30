"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface LightboxProps {
  image: { src: string; alt: string }
  onClose: () => void
}

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={onClose}>
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
        <img 
          src={image.src || "/placeholder.svg"} 
          alt={image.alt} 
          className="max-w-[calc(100vw-2rem)] max-h-[calc(100vh-10rem)] w-auto h-auto object-contain"
        />
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 z-10">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 inline-block mx-auto">
            <p className="text-white text-sm md:text-base text-center">{image.alt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
