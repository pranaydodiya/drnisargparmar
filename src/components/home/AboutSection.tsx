import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          id="about-heading"
          title="About Dr. Nisarg Parmar"
          subtitle="NIMHANS-trained neurosurgeon dedicated to expert neurological care in Gujarat."
          className="mb-12"
        />
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
          <p className="text-base md:text-lg">
            <strong className="text-foreground">Qualifications:</strong> MBBS, MS (General Surgery), MCh (Neurosurgery) — NIMHANS, Bangalore.
          </p>
          <p>
            Expert neurosurgeon, NIMHANS-trained, with over 15 years of experience and more than 5000 successful surgeries. Trusted across Gujarat for complex brain and spine care, combining advanced surgical techniques with a patient-centered approach.
          </p>
          <p>
            Every patient receives not just the best medical treatment, but compassion, clear communication, and hope — treating the whole person, not just the condition.
          </p>
          <Card className="border-l-4 border-l-secondary bg-muted/30">
            <CardContent className="pt-6 pb-6">
              <blockquote className="text-foreground italic">
                &ldquo;Every patient deserves not just the best medical treatment, but also compassion, clear communication, and hope. I believe in treating the whole person, not just the condition.&rdquo;
              </blockquote>
              <cite className="not-italic text-sm text-muted-foreground block mt-2">— Dr. Nisarg Parmar</cite>
            </CardContent>
          </Card>
          <div className="pt-4">
            <Button variant="secondary" className="rounded-full" asChild>
              <Link href="/about">Read full profile</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
