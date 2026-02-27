import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Testimonials | Dr. Nisarg Parmar",
  description: "What patients say about Dr. Nisarg Parmar. Written and video testimonials from neuro and spine surgery patients.",
};

// Mock written testimonials
const WRITTEN = [
  { name: "Patient A", location: "Surat", rating: 5, quote: "Exceptional care and clear communication. Highly recommend Dr. Parmar for spine concerns.", date: "Jan 2025" },
  { name: "Patient B", location: "Ahmedabad", rating: 5, quote: "My family is grateful for the expert neurotrauma care. Thank you, Doctor.", date: "Dec 2024" },
  { name: "Patient C", location: "Vadodara", rating: 5, quote: "From diagnosis to recovery, the entire experience was professional and reassuring.", date: "Nov 2024" },
  { name: "Patient D", location: "Rajkot", rating: 5, quote: "Dr. Parmar explained everything clearly. The minimally invasive approach meant a faster recovery.", date: "Oct 2024" },
];

// Mock video testimonials: YouTube + Instagram (placeholder thumbnails; click opens link)
const VIDEO_MOCK = [
  { patientName: "Patient E", condition: "Spine surgery", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", type: "youtube" as const },
  { patientName: "Patient F", condition: "Brain tumor care", instagramReelUrl: "https://www.instagram.com/reel/example/", thumbnailUrl: undefined, type: "instagram" as const },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-[#FAFAF8] text-slate-900 pb-16">
      {/* Hero / intro */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Patient Testimonials"
            subtitle="Real experiences from patients and families who trusted Dr. Nisarg Parmar with their brain and spine care."
            className="mb-10"
          />
        </div>
      </section>

      {/* Written testimonials */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900 mb-4 md:text-xl">
            Written stories
          </h2>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-600">
            Every surgery and consultation is a personal story. These written testimonials
            highlight what patients valued most&mdash;clear communication, calm guidance,
            and careful follow-up before and after surgery.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {WRITTEN.map(({ name, location, rating, quote, date }) => (
              <Card
                key={name}
                className="border border-slate-200/80 bg-white/95 rounded-2xl shadow-sm"
              >
                <CardContent className="pt-6 pb-6">
                  <div
                    className="flex items-center gap-1 mb-2"
                    aria-label={`${rating} out of 5 stars`}
                  >
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-secondary text-secondary"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-800 mb-4">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-medium text-slate-900">{name}</p>
                      <p className="text-slate-500">
                        {location} &bull; {date}
                      </p>
                    </div>
                    <p className="text-slate-500">Verified patient</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900 mb-4 md:text-xl">
            Video testimonials
          </h2>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-600">
            Some patients and families chose to share their journey on video. Click a
            thumbnail to watch their story on YouTube or Instagram.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEO_MOCK.map((item, index) => {
              const href = item.type === "youtube" ? item.videoUrl : item.instagramReelUrl!;
              return (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:ring-2 ring-secondary"
                >
                  <div className="relative aspect-video bg-muted">
                    {item.thumbnailUrl ? (
                      <img
                        src={item.thumbnailUrl}
                        alt={`Video testimonial from ${item.patientName}`}
                        className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                        <span className="text-sm">
                          {item.type === "instagram" ? "Instagram Reel" : "Video testimonial"}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/45">
                      <Play className="h-12 w-12 text-white fill-white drop-shadow" aria-hidden />
                    </div>
                  </div>
                  <div className="bg-card p-4">
                    <p className="font-medium text-slate-900">{item.patientName}</p>
                    {item.condition && (
                      <p className="text-sm text-slate-600">{item.condition}</p>
                    )}
                    <p className="mt-1 text-xs text-slate-500">
                      Opens on {item.type === "youtube" ? "YouTube" : "Instagram"}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA card */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white/95 px-6 py-8 text-center shadow-sm md:px-10 md:py-10">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
              Next step
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Need an opinion or follow-up?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
              If you or a family member has been advised brain or spine surgery, or if
              you&apos;re recovering and need a review, you can book a consultation to
              discuss your reports and next steps.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 text-sm font-semibold tracking-[0.18em] text-secondary-foreground transition-colors duration-200 hover:bg-secondary/90 md:px-10 md:py-3.5"
              >
                <span>Book an appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
