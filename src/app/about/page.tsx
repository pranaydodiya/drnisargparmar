import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { EMERGENCY_PHONE, EMERGENCY_PHONE_TEL } from "@/content/site";

export const metadata: Metadata = {
  title: "About Dr. Nisarg Parmar | Neurosurgeon | Brain & Spine Specialist",
  description: "NIMHANS-trained neurosurgeon. Full bio, education, achievements, and core values. Expert neurological care in Gujarat.",
};

const CONTACT_EMAIL = "contact@drnisargparmar.com";

export default function AboutPage() {
  return (
    <div className="pb-16">
      {/* Hero / intro with photo */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
            <div className="relative w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden bg-muted shrink-0">
              <Image
                src="/dr-nisarg-parmar.png"
                alt="Dr. Nisarg Parmar - Neurosurgeon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 224px, 288px"
                priority
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Dr. Nisarg Parmar
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Neurosurgeon | Brain & Spine Specialist
              </p>
              <p className="text-foreground font-medium">
                MBBS, MS (General Surgery), <strong>MCh (Neurosurgery) — NIMHANS, Bangalore</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 md:py-16" aria-labelledby="bio-heading">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="bio-heading" className="text-2xl font-bold text-foreground mb-6">
            Biography
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Dr. Nisarg Parmar is an expert neurosurgeon, NIMHANS-trained, with over 15 years of experience and more than 5000 successful surgeries. He is trusted across Gujarat for complex brain and spine care, combining advanced surgical techniques with a patient-centered approach.
            </p>
            <p>
              Every patient receives not just the best medical treatment, but compassion, clear communication, and hope — treating the whole person, not just the condition.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-12 md:py-16 bg-muted/30" aria-labelledby="education-heading">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="education-heading" className="text-2xl font-bold text-foreground mb-6">
            Education
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>MBBS</li>
            <li>MS (General Surgery)</li>
            <li><strong className="text-foreground">MCh (Neurosurgery) — NIMHANS, Bangalore</strong></li>
          </ul>
        </div>
      </section>

      {/* Achievements & specializations */}
      <section className="py-12 md:py-16" aria-labelledby="achievements-heading">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="achievements-heading" className="text-2xl font-bold text-foreground mb-6">
            Achievements & Specializations
          </h2>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>NIMHANS (Bangalore) trained in Neurosurgery</li>
            <li>5000+ successful brain and spine surgeries</li>
            <li>24/7 emergency neurosurgical care</li>
            <li>Specialization in brain tumors, spine surgery, neurotrauma, pediatric neurosurgery, vascular neurosurgery, and minimally invasive techniques</li>
          </ul>
        </div>
      </section>

      {/* Core values */}
      <section className="py-12 md:py-16 bg-muted/30" aria-labelledby="values-heading">
        <div className="container mx-auto px-4">
          <SectionHeading id="values-heading" title="Core Values" centered className="mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["Compassion", "Clear communication", "Expertise", "Patient-centered care"].map((value) => (
              <Card key={value} className="border-border rounded-xl text-center">
                <CardContent className="pt-6 pb-6">
                  <p className="font-semibold text-foreground">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="py-12 md:py-16" aria-labelledby="philosophy-heading">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="philosophy-heading" className="text-2xl font-bold text-foreground mb-6">
            Philosophy
          </h2>
          <Card className="border-l-4 border-l-secondary bg-muted/30">
            <CardContent className="pt-6 pb-6">
              <blockquote className="text-foreground italic">
                &ldquo;Every patient deserves not just the best medical treatment, but also compassion, clear communication, and hope. I believe in treating the whole person, not just the condition.&rdquo;
              </blockquote>
              <cite className="not-italic text-sm text-muted-foreground block mt-2">— Dr. Nisarg Parmar</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact block */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4">
          <h2 id="contact-heading" className="text-2xl font-bold mb-6 text-center">
            Get in Touch
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
            <a
              href={`tel:${EMERGENCY_PHONE_TEL}`}
              className="flex items-center gap-2 text-primary-foreground hover:underline focus-visible:ring-2 ring-primary-foreground rounded"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Emergency: {EMERGENCY_PHONE}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-primary-foreground hover:underline focus-visible:ring-2 ring-primary-foreground rounded"
            >
              <Mail className="h-5 w-5" aria-hidden />
              {CONTACT_EMAIL}
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-primary-foreground hover:underline focus-visible:ring-2 ring-primary-foreground rounded"
            >
              <MapPin className="h-5 w-5" aria-hidden />
              View locations
            </Link>
          </div>
          <div className="text-center mt-8">
            <Button variant="secondary" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
              <Link href="/appointments">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
