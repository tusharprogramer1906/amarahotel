import Image from "next/image"
import Link from "next/link"

import { PageBanner } from "@/components/ui/page-banner"
import { blogPosts, featuredPostSlug } from "@/lib/blog-posts"

export default function BlogPage() {
  const featuredArticle = blogPosts.find((post) => post.slug === featuredPostSlug) ?? blogPosts[0]
  const otherArticles = blogPosts.filter((post) => post.slug !== featuredPostSlug)

  return (
    <>
      <PageBanner
        title="Amara Journal"
        subtitle="Stories of design, gastronomy, and the people behind our signature experiences"
          backgroundImage="/jour.JPG"
      />

      <section className="section bg-background">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Featured Story</p>
            <h2 className="text-headline">{featuredArticle.title}</h2>
            <p className="text-muted-foreground">{featuredArticle.excerpt}</p>
            <p className="text-sm text-muted-foreground">Published {featuredArticle.date}</p>
            <Link href={`/blog/${featuredArticle.slug}`} className="inline-flex items-center gap-2 text-[#c89347] font-medium hover:underline">
              Continue reading →
            </Link>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-black/10">
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-secondary/20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-headline">Latest Entries</h2>
              <p className="text-muted-foreground">
                Insights from our culinary, design, and guest experience teams.
              </p>
            </div>
            <a
              href="/booking"
              className="inline-block px-8 py-3 bg-[#c89347] text-white font-medium rounded-md hover:bg-[#b8813a] transition-colors"
            >
              Book a Stay
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {otherArticles.map((article) => (
              <article key={article.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-56 w-full">
                  <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{article.date}</p>
                  <h3 className="text-2xl font-serif font-semibold">{article.title}</h3>
                  <p className="text-muted-foreground flex-1">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`} className="self-start text-[#c89347] font-medium hover:underline">
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

