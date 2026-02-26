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
    <div className="py-16 md:py-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Patient Testimonials"
          subtitle="Written and video experiences from patients and families."
          className="mb-12"
        />

        <h2 className="text-xl font-bold text-foreground mb-6">Written Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {WRITTEN.map(({ name, location, rating, quote, date }) => (
            <Card key={name} className="border-border rounded-xl">
              <CardContent className="pt-6 pb-6">
                <div className="flex gap-1 mb-2" aria-label={`${rating} out of 5 stars`}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" aria-hidden />
                  ))}
                </div>
                <p className="text-foreground italic mb-4">&ldquo;{quote}&rdquo;</p>
                <p className="text-sm font-medium text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{location} • {date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-xl font-bold text-foreground mb-6">Video Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_MOCK.map((item, index) => {
            const href = item.type === "youtube" ? item.videoUrl : item.instagramReelUrl!;
            return (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow focus-visible:ring-2 ring-ring"
              >
                <div className="aspect-video bg-muted relative">
                  {item.thumbnailUrl ? (
                    <img
                      src={item.thumbnailUrl}
                      alt={`Video testimonial from ${item.patientName}`}
                      className="w-full h-full object-cover group-hover:opacity-90"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                      <span className="text-sm">Instagram Reel</span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <Play className="h-12 w-12 text-white fill-white" aria-hidden />
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <p className="font-medium text-foreground">{item.patientName}</p>
                  {item.condition && <p className="text-sm text-muted-foreground">{item.condition}</p>}
                </div>
              </a>
            );
          })}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Click a video to open on YouTube or Instagram.
        </p>

        <div className="mt-12 text-center">
          <Link
            href="/appointments"
            className="text-secondary font-medium hover:underline focus-visible:ring-2 ring-ring rounded"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
