import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { blogPosts } from "@/lib/blog-posts"

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
          <h1 className="text-4xl md:text-5xl font-serif font-semibold">{post.title}</h1>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Link href="/blog" className="text-[#c89347] font-medium hover:underline">
              ← Back to all stories
            </Link>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>Share:</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-border rounded-full hover:border-[#c89347]">Instagram</button>
                <button className="px-3 py-1 border border-border rounded-full hover:border-[#c89347]">Pinterest</button>
                <button className="px-3 py-1 border border-border rounded-full hover:border-[#c89347]">Email</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

