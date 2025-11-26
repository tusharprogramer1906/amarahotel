interface PageBannerProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export function PageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
  return (
    <div
      className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage || "/luxury-hotel-interior.png"})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <h1 className="text-display text-white mb-4">{title}</h1>
        <p className="text-subheadline text-white/90 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  )
}
