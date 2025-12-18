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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1ed06fad-f1eb-47e4-9ac8-6aedf9abf96d",
          subject: `Contact Form: ${formData.subject}`,
          from_name: formData.name,
          from_email: formData.email,
          name: formData.name,
          email: formData.email,
          subject_type: formData.subject,
          message: formData.message,
          botcheck: false, // Hidden botcheck field for spam protection
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "general", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(result.message || "Failed to send message. Please try again or contact us directly.")
      }
    } catch (err) {
      setError("An error occurred. Please try again or contact us directly.")
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-card border border-border p-8">
      <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-sm">
          Thank you for your message! We'll get back to you within 24 hours.
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Hidden botcheck field for spam protection */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

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
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}
