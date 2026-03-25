"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

const BOOKING_URL =
  "https://hotels.eglobe-solutions.com/amarahoteldelhi/booking/hotels/amara-hotel-new-delhi"

const faqs = [
  {
    question: "Is Amara Hotel couple friendly?",
    answer:
      "Yes, Amara Hotel is a couple friendly hotel in Greater Kailash 1, South Delhi. We welcome couples and ensure a comfortable, discreet, and warm stay experience.",
  },
  {
    question: "Where is Amara Hotel located?",
    answer:
      "Amara Hotel is located in Greater Kailash 1 (GK1), South Delhi — minutes from Nehru Place IT hub, GK Metro Station, and M Block Market.",
  },
  {
    question: "How far is Amara Hotel from Nehru Place?",
    answer:
      "Amara Hotel is approximately 10 minutes from Nehru Place by cab or auto. It's one of the most conveniently located hotels in GK1 for business travelers visiting Nehru Place.",
  },
  {
    question: "What is the best budget hotel in GK1 South Delhi?",
    answer:
      "Amara Hotel is widely regarded as one of the best boutique stays in Greater Kailash 1, offering premium comfort at competitive rates with direct booking discounts on this website.",
  },
  {
    question: "Does Amara Hotel have banquet facilities for events?",
    answer:
      "Yes, Amara Hotel features an elegant banquet hall in Greater Kailash, ideal for weddings, corporate events, birthday parties, and private celebrations. Contact us for availability and packages.",
  },
]

export function HomepageFaq() {
  return (
    <section className="py-16 md:py-24 bg-[#faf7f4]">
      <div className="container max-w-3xl">
        <div className="text-center mb-10 fade-in-up">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c89347] mb-3 font-semibold">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 fade-in-up">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl px-6 border border-[#e8e1d8] shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#1a1a1a] hover:no-underline py-5 text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#666] leading-relaxed pb-5 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Post-FAQ conversion nudge — users who read FAQs are decision-ready */}
        <div className="mt-10 bg-[#1a1a1a] rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5 fade-in-up">
          <div>
            <p className="font-serif text-xl font-bold text-white mb-1">Still have questions?</p>
            <p className="text-white/55 text-sm">Our team is available 24/7. Or book now and reach out after.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c89347] text-white font-semibold text-sm rounded-xl hover:bg-[#b8813a] transition-colors"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white/80 font-medium text-sm rounded-xl hover:border-white/50 hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
