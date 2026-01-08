import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { blogPosts } from "@/lib/blog-posts"
import { siteConfig } from "@/lib/site-config"

interface BlogPostPageProps {
  params: Promise<{
    slug: string | string[]
  }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slugParam =
    typeof resolvedParams.slug === "string"
      ? decodeURIComponent(resolvedParams.slug)
      : Array.isArray(resolvedParams.slug)
        ? decodeURIComponent(resolvedParams.slug[0])
        : ""

  const post = blogPosts.find((article) => article.slug === slugParam)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Amara Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const slugParam =
    typeof resolvedParams.slug === "string"
      ? decodeURIComponent(resolvedParams.slug)
      : Array.isArray(resolvedParams.slug)
        ? decodeURIComponent(resolvedParams.slug[0])
        : ""

  if (!slugParam) {
    notFound()
  }

  const post = blogPosts.find((article) => article.slug === slugParam)

  if (!post) {
    notFound()
  }

  return (
    <>
      {post.faq && post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.faq.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="relative z-10 container text-white pb-16 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">{post.date}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white">{post.title}</h1>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {post.content.map((paragraph, index) => {
              // Check if paragraph contains HTML links
              if (paragraph.includes('<a href=')) {
                // Parse HTML and convert anchor tags to Next.js Link components
                const parts: (string | React.ReactElement)[] = []
                const linkRegex = /<a href="([^"]+)"[^>]*>([^<]+)<\/a>/g
                let lastIndex = 0
                let match

                while ((match = linkRegex.exec(paragraph)) !== null) {
                  // Add text before the link
                  if (match.index > lastIndex) {
                    parts.push(paragraph.substring(lastIndex, match.index))
                  }
                  // Add the Link component
                  parts.push(
                    <Link
                      key={`link-${index}-${parts.length}`}
                      href={match[1]}
                      className="text-[#c89347] hover:underline"
                    >
                      {match[2]}
                    </Link>
                  )
                  lastIndex = match.index + match[0].length
                }
                // Add remaining text after the last link
                if (lastIndex < paragraph.length) {
                  parts.push(paragraph.substring(lastIndex))
                }

                return (
                  <p key={index}>
                    {parts.length > 0 ? parts : paragraph.replace(/<[^>]+>/g, '')}
                  </p>
                )
              }
              return <p key={index}>{paragraph}</p>
            })}
          </div>

          {post.faq && post.faq.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-3xl font-serif font-semibold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faq.map((faq, index) => (
                  <div key={index} className="bg-secondary/30 rounded-lg p-6 border border-border/50">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 border-t border-border pt-8">
            <Link href="/blog" className="text-[#c89347] font-medium hover:underline">
              ← Back to all stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

