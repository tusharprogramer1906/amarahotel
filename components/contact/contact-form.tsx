"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "general", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="bg-card border border-border p-8">
      <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>

      {submitted && (
        <div className="mb-6 p-4 bg-accent/10 border border-accent text-accent rounded-sm">
          Thank you for your message! We'll get back to you within 24 hours.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Subject</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="general">General Inquiry</option>
            <option value="reservation">Reservation</option>
            <option value="event">Event Planning</option>
            <option value="complaint">Complaint</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
