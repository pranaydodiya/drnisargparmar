import Link from "next/link";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppointmentCTA() {
  return (
    <section id="book-appointment" className="py-16 md:py-24 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 text-center">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Schedule Your Consultation?
        </h2>
        <p className="text-primary-foreground/90 text-lg max-w-xl mx-auto mb-8">
          Book an appointment today. We&apos;ll confirm within 2 hours.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full gap-2"
          asChild
        >
          <Link href="/appointments">
            <Calendar className="h-5 w-5" aria-hidden />
            Book an Appointment
          </Link>
        </Button>
      </div>
    </section>
  );
}
