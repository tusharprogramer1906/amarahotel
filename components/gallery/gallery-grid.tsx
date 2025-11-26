"use client"

interface GalleryGridProps {
  title: string
  description: string
  images: Array<{ src: string; alt: string }>
  onImageClick: (image: { src: string; alt: string }) => void
}

export function GalleryGrid({ title, description, images, onImageClick }: GalleryGridProps) {
  return (
    <section className="section bg-background border-b border-border">
      <div className="container">
        <div className="mb-12 fade-in-up">
          <h2 className="text-headline mb-2">{title}</h2>
          <p className="text-subheadline text-muted-foreground">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-card cursor-pointer h-64 md:h-80 fade-in-up"
              onClick={() => onImageClick(image)}
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
