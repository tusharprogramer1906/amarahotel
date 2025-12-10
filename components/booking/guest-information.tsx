"use client"

"use client"

import { useState } from "react"
import { User, Mail, Phone, MapPin, Globe, MessageSquare } from "lucide-react"

interface GuestInformationProps {
  onContinue: () => void
  onBack: () => void
}

export function GuestInformation({ onContinue, onBack }: GuestInformationProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "India",
    specialRequests: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store in sessionStorage or context for payment step
    sessionStorage.setItem("guestInfo", JSON.stringify(formData))
    onContinue()
  }

  return (
    <div className="bg-card border border-border p-6 rounded-lg">
      <h2 className="text-2xl font-serif font-bold mb-6">Guest Information</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  defaultValue="+91"
                  className="w-20 px-2 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="+91">IN +91</option>
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="flex-1 pl-10 pr-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">City</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Country of Residence</label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message / Special Requests to Property</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={4}
              className="w-full pl-10 pr-4 py-2 border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="Any special requests or preferences..."
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 border border-border hover:bg-muted transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  )
}

