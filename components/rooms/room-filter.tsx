"use client"

interface RoomFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function RoomFilter({ selectedCategory, onCategoryChange }: RoomFilterProps) {
  const categories = [
    { id: "all", label: "All Rooms" },
    { id: "standard", label: "Deluxe Rooms" },
    { id: "suite", label: "Suites" },
    { id: "presidential", label: "Presidential" },
  ]

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => {
        const isActive = selectedCategory === category.id
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-2 font-medium transition-all ${
              isActive ? "bg-accent text-accent-foreground" : "bg-card text-foreground border border-border hover:border-accent"
            }`}
            aria-pressed={isActive}
            aria-label={`Show ${category.label}`}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}
