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
    title: post.metaTitle ? post.metaTitle : `${post.title} | Amara Journal`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
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

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.image.startsWith("http") ? post.image : `${siteConfig.url}${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Amara Hotel",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Amara Hotel",
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
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
              // Check if paragraph is an H2 heading
              if (paragraph.startsWith('<h2>') && paragraph.endsWith('</h2>')) {
                const headingText = paragraph.replace(/<h2>|<\/h2>/g, '')
                return (
                  <h2 key={index} className="text-2xl font-serif font-semibold mt-8 mb-4 text-foreground">
                    {headingText}
                  </h2>
                )
              }
              
              // Check if paragraph is an H3 heading
              if (paragraph.startsWith('<h3>') && paragraph.endsWith('</h3>')) {
                const headingText = paragraph.replace(/<h3>|<\/h3>/g, '')
                return (
                  <h3 key={index} className="text-xl font-serif font-semibold mt-6 mb-3 text-foreground">
                    {headingText}
                  </h3>
                )
              }

              // Check if paragraph is an ordered list
              if (paragraph.startsWith('<ol>') && paragraph.endsWith('</ol>')) {
                const listContent = paragraph.replace(/<ol>|<\/ol>/g, '')
                const items = listContent.match(/<li>(.*?)<\/li>/g) || []
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 ml-4 my-4">
                    {items.map((item, itemIndex) => {
                      const itemText = item.replace(/<li>|<\/li>/g, '')
                      return <li key={itemIndex} className="leading-relaxed">{itemText}</li>
                    })}
                  </ol>
                )
              }

              // Check if paragraph is an unordered list
              if (paragraph.startsWith('<ul>') && paragraph.endsWith('</ul>')) {
                const listContent = paragraph.replace(/<ul>|<\/ul>/g, '')
                const items = listContent.match(/<li>(.*?)<\/li>/g) || []
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 ml-4 my-4">
                    {items.map((item, itemIndex) => {
                      const itemText = item.replace(/<li>|<\/li>/g, '')
                      return <li key={itemIndex} className="leading-relaxed">{itemText}</li>
                    })}
                  </ul>
                )
              }
              
              // Check if paragraph contains HTML links
              if (paragraph.includes('<a href=')) {
                // Parse HTML and convert anchor tags to Next.js Link components
                const parts: (string | React.ReactElement)[] = []
                const linkRegex = /<a href="([^"]+)"[^>]*>([^<]+)<\/a>/g
                let lastIndex = 0
                let match

                while ((match = linkRegex.exec(paragraph)) !== null) {
                  const href = match[1]
                  const isExternal = href.startsWith("http://") || href.startsWith("https://")
                  // Add text before the link
                  if (match.index > lastIndex) {
                    parts.push(paragraph.substring(lastIndex, match.index))
                  }
                  // Add Link or anchor for external (open in new tab)
                  if (isExternal) {
                    parts.push(
                      <a
                        key={`link-${index}-${parts.length}`}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#c89347] hover:underline"
                      >
                        {match[2]}
                      </a>
                    )
                  } else {
                    parts.push(
                      <Link
                        key={`link-${index}-${parts.length}`}
                        href={href}
                        className="text-[#c89347] hover:underline"
                      >
                        {match[2]}
                      </Link>
                    )
                  }
                  lastIndex = match.index + match[0].length
                }
                // Add remaining text after the last link
                if (lastIndex < paragraph.length) {
                  parts.push(paragraph.substring(lastIndex))
                }

                return (
                  <p key={index} className="leading-relaxed">
                    {parts.length > 0 ? parts : paragraph.replace(/<[^>]+>/g, '')}
                  </p>
                )
              }
              // Handle paragraphs with strong tags
              const processedParagraph = paragraph.replace(/<strong>(.*?)<\/strong>/g, '<strong>$1</strong>')
              return <p key={index} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: processedParagraph }} />
            })}
          </div>

          {post.faq && post.faq.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-3xl font-serif font-semibold mb-8">
                {post.slug === "plan-birthday-anniversary-party-hotel-south-delhi" 
                  ? "FAQs – Party Venue in South Delhi" 
                  : "Frequently Asked Questions"}
              </h2>
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

