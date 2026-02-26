"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

const POINTS = [
  "NIMHANS Trained Neurosurgeon",
  "8+ Years of Experience",
  "2000+ Successful Surgeries",
  "24/7 Emergency Availability",
  "Advanced Surgical Techniques",
  "Patient-Centered Care",
] as const;

const CARD_IMAGE = "/dr-nisarg-parmar.png";

export function WhyChoose() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="why-choose" className="py-10 md:py-14 bg-muted/30" aria-labelledby="why-heading">
      <div className="container mx-auto px-4">
        <SectionHeading
          id="why-heading"
          title="Why Choose Dr. Parmar"
          subtitle="Expertise, availability, and a commitment to your care."
          className="mb-8"
        />
        {/* One row, wide gallery so cards are big (minimal empty space) */}
        <div className="w-[95vw] max-w-[calc(100vw-2rem)] mx-auto flex flex-nowrap gap-3 sm:gap-4 overflow-x-auto overflow-y-visible pb-2 snap-x snap-mandatory">
          {POINTS.map((point, index) => (
            <div
              key={point}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "relative flex-1 min-w-[7rem] sm:min-w-[8rem] md:min-w-0 flex-shrink-0 snap-center rounded-2xl overflow-visible transition-all duration-300 ease-out cursor-default",
                "shadow-md",
                "motion-reduce:scale-100 motion-reduce:grayscale-0 motion-reduce:opacity-100",
                // Default: all cards slightly shrunk in one row
                hoveredIndex === null && "scale-[0.92]",
                // Hovered card: expand to full size
                hoveredIndex !== null && hoveredIndex === index &&
                  "scale-100 shadow-xl z-10 ring-2 ring-secondary/50",
                // Other cards when one is hovered: stay shrunk + grayscale
                hoveredIndex !== null && hoveredIndex !== index &&
                  "scale-[0.92] grayscale opacity-80"
              )}
            >
              <div className="aspect-[3/4] relative bg-muted rounded-2xl overflow-hidden w-full">
                <Image
                  src={CARD_IMAGE}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 180px, (max-width: 1024px) 220px, 280px"
                />
                {/* Bottom overlay: gradient + text (like ref "IMPACT Nutrition") */}
                <div
                  className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
                  aria-hidden
                />
                <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm md:text-base leading-tight drop-shadow-sm">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
