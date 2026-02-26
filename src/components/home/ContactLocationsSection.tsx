import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";
import { EMERGENCY_PHONE, EMERGENCY_PHONE_TEL } from "@/content/site";
import { MOCK_LOCATIONS } from "@/content/mock-data";

export function ContactLocationsSection() {
  return (
    <section id="contact" className="py-16 md:py-24" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          id="contact-heading"
          title="Contact & Locations"
          subtitle="Reach out for appointments, inquiries, or emergency consultations."
          className="mb-12"
        />
        <div className="mb-8 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
          <p className="font-semibold text-foreground">24/7 Emergency Neurosurgery</p>
          <p className="text-sm text-muted-foreground mt-1">
            Head injuries, spinal trauma, stroke — immediate care available.
          </p>
          <a
            href={`tel:${EMERGENCY_PHONE_TEL}`}
            className="inline-flex items-center gap-2 mt-2 text-destructive font-medium hover:underline focus-visible:ring-2 ring-ring rounded"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {EMERGENCY_PHONE}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_LOCATIONS.map(({ name, address, phone, mapLink }) => (
            <Card key={name} className="border-border rounded-xl hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
                <p className="text-muted-foreground text-sm flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden />
                  {address}
                </p>
                <p className="text-sm mt-2">{phone}</p>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-secondary font-medium hover:underline focus-visible:ring-2 ring-ring rounded"
                >
                  <MapPin className="h-4 w-4" aria-hidden />
                  View on Google Maps
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="text-secondary font-medium hover:underline focus-visible:ring-2 ring-ring rounded"
          >
            View all locations & contact details
          </Link>
        </div>
      </div>
    </section>
  );
}
