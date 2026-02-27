import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroImage } from "./HeroImage";
import { EMERGENCY_PHONE, EMERGENCY_PHONE_TEL } from "@/content/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-primary text-primary-foreground"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="flex-1 space-y-5 text-center lg:text-left">
          <p className="text-primary-foreground/90 text-sm md:text-base font-medium">
            Alumni of NIMHANS, Bangalore • India&apos;s Top Neurosurgical Institution
          </p>
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Dr. Nisarg Parmar
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Neurosurgeon | Brain & Spine Specialist
          </p>
          <p className="text-base md:text-lg text-primary-foreground/85 max-w-xl mx-auto lg:mx-0">
            Welcome to the forefront of neurological care excellence. Providing expert care in Gujarat with over 8 years of experience in complex brain and spine surgeries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button
              variant="secondary"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full w-fit mx-auto lg:mx-0"
              asChild
            >
              <Link href="/appointments">Book Appointment</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary rounded-full w-fit mx-auto lg:mx-0 font-semibold"
              asChild
            >
              <a href={`tel:${EMERGENCY_PHONE_TEL}`}>
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                Emergency: {EMERGENCY_PHONE}
              </a>
            </Button>
          </div>
        </div>
        <div className="relative w-64 h-80 md:w-80 md:h-96 flex-shrink-0 rounded-2xl overflow-hidden bg-primary-foreground/10">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
