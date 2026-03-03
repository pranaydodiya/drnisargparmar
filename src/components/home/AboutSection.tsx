import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-10 md:py-14" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          id="about-heading"
          title="About Dr. Nisarg Parmar"
          subtitle="NIMHANS-trained neurosurgeon dedicated to expert neurological care in Gujarat."
          className="mb-8"
        />
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start text-muted-foreground">
          <div className="space-y-4 md:space-y-5">
            <p className="text-base md:text-lg">
              <strong className="text-foreground">Qualifications:</strong> MBBS, MS (General
              Surgery), MCh (Neurosurgery) — NIMHANS, Bangalore.
            </p>
            <p>
              Expert neurosurgeon, NIMHANS-trained, with over 15 years of experience and more
              than 5000 successful surgeries. Trusted across Gujarat for complex brain and
              spine care, combining advanced surgical techniques with a patient-centered
              approach.
            </p>
            <p>
              Every patient receives not just the best medical treatment, but compassion, clear
              communication, and hope — treating the whole person, not just the condition.
            </p>
          </div>

          <div className="space-y-4 md:space-y-5">
            <Card className="border-l-4 border-l-secondary bg-muted/30">
              <CardContent className="pt-6 pb-6">
                <blockquote className="text-foreground italic">
                  &ldquo;Every patient deserves not just the best medical treatment, but also
                  compassion, clear communication, and hope. I believe in treating the whole
                  person, not just the condition.&rdquo;
                </blockquote>
                <cite className="not-italic text-sm text-muted-foreground block mt-2">
                  — Dr. Nisarg Parmar
                </cite>
              </CardContent>
            </Card>
            <Card className="bg-white/80 border-slate-200 shadow-sm">
              <CardContent className="pt-5 pb-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary mb-1">
                  At a glance
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• NIMHANS, Bangalore trained neurosurgeon</li>
                  <li>• Complex brain &amp; spine surgery expertise</li>
                  <li>• Focus on clear communication &amp; follow-up</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button variant="secondary" className="rounded-full" asChild>
            <Link href="/about">Read full profile</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
