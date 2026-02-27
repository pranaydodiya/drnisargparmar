import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { EMERGENCY_PHONE, EMERGENCY_PHONE_TEL } from "@/content/site";
import { PhilosophySection } from "@/components/about/PhilosophySection";

export const metadata: Metadata = {
  title: "About Dr. Nisarg Parmar | Neurosurgeon | Brain & Spine Specialist",
  description: "NIMHANS-trained neurosurgeon. Full bio, education, achievements, and core values. Expert neurological care in Gujarat.",
};

const CONTACT_EMAIL = "contact@drnisargparmar.com";

export default function AboutPage() {
  return (
    <div className="bg-[#FAFAF8] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-14 md:pt-24 md:pb-16">
        <div className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
          {/* Background image + overlays */}
          <div className="absolute inset-0">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/dr-nisarg-parmar.png')" }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-12 text-center md:py-16">
            <div className="container mx-auto max-w-3xl">
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary ring-1 ring-white/20 backdrop-blur">
                About the neurosurgeon
              </div>
              <h1 className="mt-8 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                Precise brain &amp; spine surgery,
                <span className="block italic text-secondary">
                  deeply human care.
                </span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">
                NIMHANS-trained neurosurgeon providing expert neurological care in
                Gujarat&mdash;combining advanced surgery with calm, clear guidance for every
                patient and family.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 text-left text-slate-100">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary/80">
                    Surgeries
                  </p>
                  <p className="text-2xl font-semibold">2000+</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary/80">
                    Experience
                  </p>
                  <p className="text-2xl font-semibold">8+ yrs</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary/80">
                    Training
                  </p>
                  <p className="text-2xl font-semibold">NIMHANS</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-200/90 md:text-sm">
                <Button
                  size="sm"
                  className="rounded-full bg-secondary px-5 py-2 text-xs font-semibold tracking-[0.18em] text-secondary-foreground hover:bg-secondary/90"
                  asChild
                >
                  <Link href="/appointments">Book an appointment</Link>
                </Button>
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" aria-hidden />
                  24/7 Emergency: {EMERGENCY_PHONE}
                </span>
              </div>
            </div>

            {/* Scroll hint */}
            <a
              href="#philosophy"
              className="mt-12 flex flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-200/80"
            >
              <span>Scroll to explore</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                <span className="animate-bounce text-white">⌄</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy + stats with animation */}
      <PhilosophySection />

      {/* Doctor story */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
            {/* Sticky image + quote */}
            <div className="md:sticky md:top-28">
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-xl">
                <div className="relative h-80 w-full">
                  <Image
                    src="/dr-nisarg-parmar.png"
                    alt="Dr. Nisarg Parmar - Neurosurgeon"
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-sm text-slate-100">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                    Doctor profile
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">
                    &ldquo;Every patient deserves not just the best medical treatment, but
                    also compassion, clear communication, and hope. I believe in treating
                    the whole person, not just the condition.&rdquo;
                  </p>
                  <p className="mt-2 text-xs text-slate-300">— Dr. Nisarg Parmar</p>
                </div>
              </div>
            </div>

            {/* Chapters */}
            <div className="space-y-8">
              {[
                {
                  chapter: "MCh (Neurosurgery)",
                  title: "NIMHANS, Bangalore",
                  body: "Super-specialization in neurosurgery at NIMHANS, India’s leading neurosurgical institute, shaped his approach to complex brain and spine surgeries with evidence-based practice and meticulous planning.",
                },
                {
                  chapter: "MS (General Surgery)",
                  title: "Strong surgical foundation",
                  body: "Postgraduate training in General Surgery built a strong base in safe, precise surgical care before focusing on neurosurgery.",
                },
                {
                  chapter: "MBBS & practice in Gujarat",
                  title: "Serving patients and families",
                  body: "From MBBS onwards, clinical experience in Gujarat has centered on listening to patients, guiding families, and planning treatment journeys together.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                    {item.chapter}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values / Our DNA */}
      <section
        className="bg-[#FAFAF8] py-16 md:py-20"
        aria-labelledby="values-heading"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
              Our DNA
            </p>
            <h2
              id="values-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"
            >
              How care feels in this practice
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Compassion first",
                body: "Every conversation is calm, respectful, and paced so patients and families never feel rushed.",
              },
              {
                title: "Clear explanations",
                body: "Imaging, diagnoses, and surgical plans are explained in simple language, with room for every question.",
              },
              {
                title: "Evidence-based surgery",
                body: "Decisions are grounded in current neurosurgical standards and tailored to each patient’s situation.",
              },
              {
                title: "Family-centered follow-up",
                body: "Support continues beyond the operation, with guidance on recovery, rehabilitation, and long-term care.",
              },
            ].map((value) => (
              <Card
                key={value.title}
                className="group border border-slate-200 bg-white/80 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <span className="text-sm font-semibold">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {value.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / timeline */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                Journey
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                From training to trusted care
              </h2>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto pb-4">
            <div className="flex min-w-full gap-6">
              {[
                {
                  label: "Phase 1",
                  title: "Foundations in medicine",
                  description:
                    "MBBS and MS (General Surgery) built a strong base in safe, precise surgical care.",
                  ghost: "01",
                },
                {
                  label: "Phase 2",
                  title: "Neurosurgery at NIMHANS",
                  description:
                    "MCh (Neurosurgery) at NIMHANS, Bangalore, deepened expertise in complex brain and spine surgery.",
                  ghost: "02",
                },
                {
                  label: "Phase 3",
                  title: "Practice in Gujarat",
                  description:
                    "Focused neurosurgical practice combining emergency care, brain tumors, spine surgery, and pediatric cases.",
                  ghost: "03",
                },
                {
                  label: "Phase 4",
                  title: "Advanced techniques",
                  description:
                    "Adoption of minimally invasive and vascular techniques to reduce pain, scarring, and recovery time.",
                  ghost: "04",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative min-w-[260px] flex-1 rounded-3xl border border-slate-200 bg-[#FAFAF8] px-6 py-6 shadow-sm"
                >
                  <div className="pointer-events-none absolute inset-0 text-right text-5xl font-semibold text-slate-200/80">
                    <span className="pr-2 pt-4">{item.ghost}</span>
                  </div>
                  <div className="relative">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Questions patients often ask
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                q: "What conditions does Dr. Parmar treat?",
                a: "Brain tumors, spine problems (disc, deformity, trauma), neurotrauma, pediatric neurosurgical conditions, vascular neurosurgery, and minimally invasive brain and spine procedures.",
              },
              {
                q: "Is emergency neurosurgical care available 24/7?",
                a: "Yes. Emergency neurosurgery for head injuries, spinal trauma, and stroke is available 24/7. In an emergency, call the emergency number listed on this site so care can be coordinated immediately.",
              },
              {
                q: "How can I book an appointment?",
                a: "You can book through the appointments page on this website, call the clinic numbers, or contact the listed hospitals where Dr. Parmar practices. After you submit a request, the team will confirm your slot and share visit details.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white/80 p-4 md:p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-900 md:text-base group-open:text-secondary">
                    {item.q}
                  </span>
                  <span className="shrink-0 text-slate-400 transition-transform group-open:rotate-180">
                    ˅
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
