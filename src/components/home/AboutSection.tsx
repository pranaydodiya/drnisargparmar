"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: inView ? { opacity: 1, y: 0 } : undefined,
          transition: { duration: 0.45, delay, ease: "easeOut" },
        };

  return (
    <section id="about" className="py-12 md:py-16" aria-labelledby="about-heading">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          id="about-heading"
          title="About Dr. Nisarg Parmar"
          subtitle="NIMHANS-trained neurosurgeon dedicated to expert neurological care in Gujarat."
          className="mb-8"
        />
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-[1.5fr_1fr] items-start">
          <motion.div {...fade(0)} className="space-y-4 text-foreground/65 text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-foreground">Qualifications:</strong> MBBS, MS (General
              Surgery), MCh (Neurosurgery) — NIMHANS, Bangalore.
            </p>
            <p>
              Expert neurosurgeon with over 15&nbsp;years of clinical experience and
              more than 5&nbsp;000 successful surgeries. Trusted across Gujarat for
              complex brain and spine care, combining advanced surgical techniques
              with a patient-centered approach.
            </p>
            <p>
              Every patient receives not just the best medical treatment, but
              compassion, clear communication, and hope — treating the whole
              person, not just the condition.
            </p>
          </motion.div>

          <div className="space-y-4">
            <motion.div {...fade(0.15)}>
              <Card className="border-l-4 border-l-secondary bg-muted/30">
                <CardContent className="pt-6 pb-6">
                  <blockquote className="text-foreground italic text-sm sm:text-base">
                    &ldquo;Every patient deserves not just the best medical treatment,
                    but also compassion, clear communication, and hope.&rdquo;
                  </blockquote>
                  <cite className="not-italic text-xs sm:text-sm text-foreground/50 block mt-2">
                    — Dr. Nisarg Parmar
                  </cite>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fade(0.25)}>
              <Card className="bg-card border-border shadow-sm">
                <CardContent className="pt-5 pb-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary mb-2">
                    At a glance
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/65">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      NIMHANS, Bangalore trained neurosurgeon
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      Complex brain &amp; spine surgery expertise
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      Focus on clear communication &amp; follow-up
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.div {...fade(0.3)} className="mt-8 text-center">
          <Button variant="secondary" className="rounded-full text-sm" asChild>
            <Link href="/about">Read full profile</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
