import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Mock data per 08-plan (static/mock)
const MOCK_TESTIMONIALS = [
  { name: "Patient A", location: "Surat", rating: 5, quote: "Exceptional care and clear communication. Highly recommend Dr. Parmar for spine concerns.", date: "Jan 2025" },
  { name: "Patient B", location: "Ahmedabad", rating: 5, quote: "My family is grateful for the expert neurotrauma care. Thank you, Doctor.", date: "Dec 2024" },
  { name: "Patient C", location: "Vadodara", rating: 5, quote: "From diagnosis to recovery, the entire experience was professional and reassuring.", date: "Nov 2024" },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          id="testimonials-heading"
          title="What Patients Say"
          subtitle="Real experiences from patients and families."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_TESTIMONIALS.map(({ name, location, rating, quote, date }) => (
            <Card key={name} className="border-border rounded-xl hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="flex gap-1 mb-2" aria-label={`${rating} out of 5 stars`}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" aria-hidden />
                  ))}
                </div>
                <p className="text-foreground italic mb-4">&ldquo;{quote}&rdquo;</p>
                <p className="text-sm font-medium text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{location} • {date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/testimonials"
            className="text-secondary font-medium hover:underline focus-visible:ring-2 ring-ring rounded"
          >
            View all testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
