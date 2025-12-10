"use client"

import { DayPicker } from "react-day-picker"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import "react-day-picker/dist/style.css"

interface DatePickerProps {
  selected: Date | null
  onChange: (date: Date | null) => void
  minDate?: Date
  placeholderText?: string
}

export function DatePicker({ selected, onChange, minDate, placeholderText = "Pick a date" }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-4 py-2 text-left border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent flex items-center justify-between",
          !selected && "text-muted-foreground"
        )}
      >
        <span>{selected ? format(selected, "dd MMM, yyyy") : placeholderText}</span>
        <CalendarIcon className="w-4 h-4" />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 mt-1 bg-card border border-border rounded-lg shadow-lg p-4">
            <DayPicker
              mode="single"
              selected={selected || undefined}
              onSelect={(date) => {
                onChange(date || null)
                setIsOpen(false)
              }}
              disabled={{ before: minDate }}
              className="rounded-md"
            />
          </div>
        </>
      )}
    </div>
  )
}

