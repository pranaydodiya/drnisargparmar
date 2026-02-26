"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

// 4–6 SEO-friendly FAQ items per 01-content
const FAQ_ITEMS = [
  {
    q: "Who is the best neurosurgeon in Surat?",
    a: "Dr. Nisarg Parmar is a NIMHANS (Bangalore) trained neurosurgeon offering expert brain and spine care in Gujarat, with over 8 years of experience and 5000+ successful surgeries.",
  },
  {
    q: "What spine conditions do you treat?",
    a: "We treat disc problems, spinal deformity, trauma, and other spine conditions with comprehensive solutions including minimally invasive techniques where appropriate.",
  },
  {
    q: "Is 24/7 emergency neurosurgery available?",
    a: "Yes. We provide 24/7 emergency neurosurgical care for head injuries, spinal trauma, and stroke. Contact the emergency number for immediate assistance.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book through the Book Appointment page on this website, or call our contact number. We confirm appointments within 2 hours.",
  },
  {
    q: "Do you treat pediatric neurosurgery cases?",
    a: "Yes. Dr. Parmar offers specialized pediatric neurosurgery for children with neurological conditions, in addition to adult brain and spine care.",
  },
] as const;

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          id="faq-heading"
          title="Frequently Asked Questions"
          subtitle="Common questions about our practice and services."
          className="mb-12"
        />
        <div className="max-w-2xl mx-auto space-y-2">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-border rounded-xl bg-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 py-4 px-5 text-left font-medium text-foreground hover:bg-muted/50 focus-visible:ring-2 ring-ring ring-inset rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  {item.q}
                  <ChevronDown
                    className={cn("h-5 w-5 shrink-0 transition-transform", isOpen && "rotate-180")}
                    aria-hidden
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={cn(isOpen ? "block" : "hidden")}
                >
                  <p className="pb-4 px-5 pt-0 text-muted-foreground">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
