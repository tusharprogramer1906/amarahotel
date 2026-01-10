"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is this the official website of Amara Hotel?",
    answer: "Yes, this is the official website of Amara Hotel Greater Kailash, South Delhi.",
  },
  {
    question: "Where is Amara Hotel located?",
    answer: "Amara Hotel is located in Greater Kailash 1, South Delhi, close to popular markets and business hubs.",
  },
  {
    question: "Is Amara Hotel suitable for family stays?",
    answer: "Yes, Amara Hotel is ideal for families, couples, and business travelers seeking a peaceful boutique stay.",
  },
  {
    question: "Does Amara Hotel have banquet facilities?",
    answer: "Yes, Amara Hotel offers an elegant banquet hall in Greater Kailash for weddings, parties, and corporate events.",
  },
]

export function HomepageFaq() {
  return (
    <section className="section bg-secondary/20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-serif font-semibold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg mb-4 px-6 border border-border/50">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
