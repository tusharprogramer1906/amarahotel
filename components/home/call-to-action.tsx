import Link from "next/link"

export function CallToAction() {
  return (
    <section className="section bg-primary text-primary-foreground fade-in-up">
      <div className="container text-center">
        <h2 className="text-headline text-primary-foreground mb-6">Plan Your Perfect Stay</h2>
        <p className="text-subheadline text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Whether you're visiting for business, leisure, or a special celebration, our team is dedicated to creating
          unforgettable memories.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          href="/booking"
          className="px-8 py-3 bg-[#c89347] text-white font-medium hover:bg-[#b8813a] transition-colors inline-block"
        >
            Book a Room
          </Link>
          <Link
            href="/banquet"
            className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors inline-block"
          >
            Events & Banquets
          </Link>
        </div>
      </div>
    </section>
  )
}
