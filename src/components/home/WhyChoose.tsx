import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const POINTS = [
  "NIMHANS (Bangalore) Trained Neurosurgeon",
  "8+ Years of Experience",
  "2000+ Successful Surgeries",
  "24/7 Emergency Availability",
  "Advanced Surgical Techniques",
  "Patient-Centered Care",
] as const;

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-16 md:py-24 bg-muted/30" aria-labelledby="why-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          id="why-heading"
          title="Why Choose Dr. Parmar"
          subtitle="Expertise, availability, and a commitment to your care."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {POINTS.map((point) => (
            <Card key={point} className="border-border rounded-xl hover:shadow-md transition-shadow">
              <CardContent className="pt-5 pb-5 flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" aria-hidden />
                <p className="font-medium text-foreground">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
