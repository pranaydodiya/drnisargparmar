import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SPECIALTIES = [
  { title: "Brain Tumor Surgery", description: "Advanced surgical treatment for brain tumors with precision and care." },
  { title: "Spine Surgery", description: "Comprehensive spine solutions for disc, deformity, and trauma cases." },
  { title: "Neurotrauma Care", description: "Emergency neurosurgical care for head and spine injuries." },
  { title: "Pediatric Neurosurgery", description: "Specialized care for children with neurological conditions." },
  { title: "Vascular Neurosurgery", description: "Treatment of aneurysms, AVMs, and vascular brain conditions." },
  { title: "Minimally Invasive Surgery", description: "Advanced techniques for faster recovery and minimal scarring." },
] as const;

export function SpecialtiesSection() {
  return (
    <section id="specialties" className="py-16 md:py-24" aria-labelledby="specialties-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          id="specialties-heading"
          title="Our Specialties"
          subtitle="Comprehensive neurological and spine care."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map(({ title, description }) => (
            <Card key={title} className="border-border rounded-xl hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="secondary" className="rounded-full" asChild>
            <Link href="/specialties">View all specialties</Link>
          </Button>
          <Button variant="outline" className="rounded-full ml-3" asChild>
            <Link href="/appointments">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
