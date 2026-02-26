import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Specialties | Dr. Nisarg Parmar - Neurosurgeon",
  description: "Brain tumor surgery, spine surgery, neurotrauma, pediatric neurosurgery, vascular neurosurgery, minimally invasive surgery. Expert care in Gujarat.",
};

const SPECIALTIES = [
  { title: "Brain Tumor Surgery", description: "Advanced surgical treatment for brain tumors with precision and care." },
  { title: "Spine Surgery", description: "Comprehensive spine solutions for disc, deformity, and trauma cases." },
  { title: "Neurotrauma Care", description: "Emergency neurosurgical care for head and spine injuries." },
  { title: "Pediatric Neurosurgery", description: "Specialized care for children with neurological conditions." },
  { title: "Vascular Neurosurgery", description: "Treatment of aneurysms, AVMs, and vascular brain conditions." },
  { title: "Minimally Invasive Surgery", description: "Advanced techniques for faster recovery and minimal scarring." },
] as const;

export default function SpecialtiesPage() {
  return (
    <div className="py-16 md:py-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Specialties"
          subtitle="Comprehensive neurological and spine care. Link to appointments for each area."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map(({ title, description }) => (
            <Card key={title} className="border-border rounded-xl hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6">
                <h2 className="text-xl font-semibold text-foreground mb-3">{title}</h2>
                <p className="text-muted-foreground mb-6">{description}</p>
                <Button variant="secondary" size="sm" className="rounded-full" asChild>
                  <Link href="/appointments">Book Appointment</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="/contact">Contact & locations</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
