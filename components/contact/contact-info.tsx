import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-lg font-bold mb-4">Contact Information</h3>

        <div className="space-y-4">
          <div className="flex gap-4">
            <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-medium">Address</p>
              <p className="text-sm text-muted-foreground">123 Luxury Street, Metropolitan City, MC 10000</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">info@amarahotel.com</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-medium">Hours</p>
              <p className="text-sm text-muted-foreground">24/7 Concierge Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <h4 className="font-serif font-bold mb-3">Response Time</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          We typically respond to inquiries within 24 hours during business hours. For urgent matters, please call our
          concierge line.
        </p>
      </div>

      <div className="pt-6 border-t border-border">
        <h4 className="font-serif font-bold mb-3">Department Extensions</h4>
        <ul className="space-y-2 text-xs text-muted-foreground">
          <li>Reservations: ext. 101</li>
          <li>Events: ext. 102</li>
          <li>Concierge: ext. 200</li>
          <li>Maintenance: ext. 300</li>
        </ul>
      </div>
    </div>
  )
}
