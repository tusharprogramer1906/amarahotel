interface ServicesListProps {
  category: string
  items: string[]
}

export function ServicesList({ category, items }: ServicesListProps) {
  return (
    <div className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 p-6 rounded-sm">
      <h3 className="text-lg font-serif font-bold mb-4 text-primary-foreground">{category}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-primary-foreground/90">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
