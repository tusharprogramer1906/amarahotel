export function setupAnimationObserver() {
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

  const elements = document.querySelectorAll(".fade-in-up, .slide-in-up, .fade-in")
  elements.forEach((el) => observer.observe(el))

  return observer
}
