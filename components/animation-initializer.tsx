"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const SELECTOR = ".fade-in-up, .slide-in-up, .fade-in"

export function AnimationInitializer() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const observeElements = (root: ParentNode | null = document) => {
      if (!root) return
      const elements = root.querySelectorAll(SELECTOR)
      elements.forEach((el) => {
        if (!el.classList.contains("animate")) {
          observer.observe(el)
        }
      })
    }

    observeElements()

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement || node instanceof SVGElement) {
            if (node.matches?.(SELECTOR) && !node.classList.contains("animate")) {
              observer.observe(node)
            }
            observeElements(node)
          }
        })
      })
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [pathname])

  return null
}
