import Image from "next/image"

interface PageBannerProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export function PageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
  const imageSrc = backgroundImage || "/luxury-hotel-interior.png"
  
  return (
    <div className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image - LCP for inner pages */}
      <Image
        src={imageSrc}
        alt=""
        width={1920}
        height={1080}
        priority
        fetchPriority="high"
        quality={85}
        className="absolute inset-0 w-full h-full object-cover"
        sizes="100vw"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <h1 className="text-display text-white mb-4">{title}</h1>
        <p className="text-subheadline text-white/90 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  )
}
