import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"

import { blogPosts } from "@/lib/blog-posts"
import { siteConfig } from "@/lib/site-config"

const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-foreground">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-serif font-semibold mt-6 mb-3 text-foreground">{children}</h3>
  ),
  p: ({ children }) => <p className="leading-relaxed mb-4 last:mb-0">{children}</p>,
  ul: ({ children }) => (
    <ul className="list-disc list-outside space-y-2 ml-6 my-4 marker:text-muted-foreground">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside space-y-2 ml-6 my-4 marker:text-muted-foreground">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http://") || href?.startsWith("https://")
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c89347] hover:underline"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href || "#"} className="text-[#c89347] hover:underline">
        {children}
      </Link>
    )
  },
}

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
    dateModified: post.dateModified || post.date,
    ...(post.category && { articleSection: post.category }),
    ...(post.tags && post.tags.length > 0 && { keywords: post.tags.join(", ") }),
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
          <div className="prose prose-lg max-w-none text-muted-foreground prose-p:text-muted-foreground prose-headings:text-foreground">
            {post.content.map((block, index) => (
              <ReactMarkdown
                key={index}
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {block}
              </ReactMarkdown>
            ))}
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

