"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";

const CARD_WIDTH_VW = 52;
const CARD_GAP_VW = 4;
const TRACK_WIDTH_VW = 6 * CARD_WIDTH_VW + 5 * CARD_GAP_VW;
const TAIL_PADDING_VW = 14;
const SCROLL_RUNWAY_VH = 400;

const SPECIALTIES = [
  { title: "Brain Tumor Surgery", category: "Neurosurgery", description: "Advanced surgical treatment for brain tumors with precision and care.", bullets: ["Precision imaging & planning", "Minimal access techniques", "Comprehensive follow-up care"] },
  { title: "Spine Surgery", category: "Spine Care", description: "Comprehensive spine solutions for disc, deformity, and trauma cases.", bullets: ["Disc & decompression", "Spinal fusion & instrumentation", "Rehabilitation support"] },
  { title: "Neurotrauma Care", category: "Emergency", description: "Emergency neurosurgical care for head and spine injuries.", bullets: ["24/7 emergency response", "Head & spinal trauma", "Critical care coordination"] },
  { title: "Pediatric Neurosurgery", category: "Pediatrics", description: "Specialized care for children with neurological conditions.", bullets: ["Child-focused protocols", "Family-centered care", "Developmental considerations"] },
  { title: "Vascular Neurosurgery", category: "Vascular", description: "Treatment of aneurysms, AVMs, and vascular brain conditions.", bullets: ["Aneurysm clipping & coiling", "AVM treatment", "Stroke intervention"] },
  { title: "Minimally Invasive Surgery", category: "Advanced", description: "Advanced techniques for faster recovery and minimal scarring.", bullets: ["Endoscopic approaches", "Faster recovery times", "Reduced scarring"] },
] as const;

function CinematicCard({
  title,
  category,
  description,
  bullets,
  index,
  translateX,
  isMobile,
  onExplore,
}: {
  title: string;
  category: string;
  description: string;
  bullets: readonly string[];
  index: number;
  translateX: number;
  isMobile: boolean;
  onExplore: () => void;
}) {
  const cardCenterVw = index * (CARD_WIDTH_VW + CARD_GAP_VW) + CARD_WIDTH_VW / 2;
  const viewportCenterInTrackVw = 50 - translateX;
  const distance = Math.abs(cardCenterVw - viewportCenterInTrackVw);
  const isActive = distance < 45;
  const scale = isActive ? 1.02 : 0.96;
  const opacity = isActive ? 1 : 0.88;

  return (
    <div
      className={cn(
        "flex-shrink-0 rounded-[34px] md:rounded-[40px] overflow-hidden shadow-2xl transition-all duration-300 ease-out",
        "border border-white/10",
        !isMobile && "will-change-transform"
      )}
      style={
        isMobile
          ? undefined
          : {
              width: "52vw",
              height: "78vh",
              transform: `scale(${scale})`,
              opacity,
            }
      }
    >
      <Link
        href="/appointments"
        onClick={(e) => {
          if (window.innerWidth >= 768) {
            e.preventDefault();
            onExplore();
          }
        }}
        className="group block h-full w-full relative"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/50 to-black/20"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 lg:p-12 text-left">
          <div>
            <p className="text-white/90 text-xs font-medium uppercase tracking-[0.2em] mb-2">
              {category}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-3 drop-shadow-sm">
              {title}
            </h3>
            <p className="text-white/95 text-sm md:text-base max-w-md font-sans">
              {description}
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm text-white group-hover:bg-white/35 transition-all duration-300 group-hover:scale-110">
              <ArrowRight className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-sm font-medium text-white uppercase tracking-wider">
              Explore Specialty
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

function MobileCard({
  title,
  category,
  description,
}: {
  title: string;
  category: string;
  description: string;
}) {
  return (
    <div className="relative w-full aspect-[4/5] max-h-[85vh] rounded-[32px] overflow-hidden shadow-xl">
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
        <p className="text-white/80 text-xs font-medium uppercase tracking-[0.2em] mb-2">
          {category}
        </p>
        <h3 className="font-serif text-2xl font-semibold text-white tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-white/90 text-sm font-sans">{description}</p>
        <Link
          href="/appointments"
          className="mt-4 inline-flex items-center gap-2 text-white font-medium text-sm uppercase tracking-wider hover:underline"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export function SpecialtiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [overlayCard, setOverlayCard] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOverlayCard(null);
    };
    if (overlayCard !== null) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [overlayCard]);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const scrollStart = el.offsetTop;
      const scrollRange = Math.max(1, ((SCROLL_RUNWAY_VH - 100) / 100) * vh);
      const progress = Math.max(0, Math.min(1, (scrollY - scrollStart) / scrollRange));
      setScrollProgress(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted, isMobile]);

  if (!mounted) {
    return (
      <section id="specialties" className="min-h-[100vh] bg-neutral-100 flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </section>
    );
  }

  if (isMobile) {
    return (
      <section id="specialties" className="py-16 md:py-20 bg-neutral-100/80" aria-labelledby="specialties-heading">
        <div className="container mx-auto px-4">
          <h2 id="specialties-heading" className="font-serif text-3xl font-semibold text-center text-foreground mb-2">
            Our Specialties
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Comprehensive neurological and spine care.
          </p>
          <div className="flex flex-col gap-8">
            {SPECIALTIES.map((s, index) => (
              <MobileCard
                key={s.title}
                title={s.title}
                category={s.category}
                description={s.description}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 text-secondary font-medium hover:underline"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const maxTranslate = -(TRACK_WIDTH_VW - 100 + TAIL_PADDING_VW);
  const translateX = scrollProgress * maxTranslate;

  return (
    <>
      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${SCROLL_RUNWAY_VH}vh` }}
        aria-labelledby="specialties-heading"
      >
        <div className="sticky top-[96px] left-0 w-full h-[calc(100vh-96px)] overflow-hidden bg-neutral-100/90 rounded-t-[32px] md:rounded-t-[40px]">
          <div className="absolute top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm select-text">
            <div className="container mx-auto px-4 py-5">
              <SectionHeading
                id="specialties-heading"
                title="Our Specialties"
                subtitle="Scroll to explore"
                centered
                className="mb-0"
              />
            </div>
          </div>
          <div
            className="absolute inset-0 flex items-center pl-[15vw] pt-[112px]"
            style={{
              transform: `translateX(${translateX}vw)`,
            }}
          >
            <div className="flex flex-nowrap gap-[4vw] pr-[15vw]">
              {SPECIALTIES.map((s, index) => (
                <CinematicCard
                  key={s.title}
                  title={s.title}
                  category={s.category}
                  description={s.description}
                  bullets={s.bullets}
                  index={index}
                  translateX={translateX}
                  isMobile={false}
                  onExplore={() => setOverlayCard(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detail overlay */}
      {overlayCard !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setOverlayCard(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="overlay-title"
        >
          <div
            className="bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const s = SPECIALTIES[overlayCard];
              if (!s) return null;
              return (
                <>
                  <div className="relative h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 rounded-t-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <p className="text-white/80 text-xs font-medium uppercase tracking-widest">
                        {s.category}
                      </p>
                      <h2 id="overlay-title" className="font-serif text-2xl font-semibold text-white">
                        {s.title}
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOverlayCard(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors focus-visible:ring-2 ring-white"
                      aria-label="Close"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="p-6 md:p-8">
                    <Link
                      href="/appointments"
                      className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-6 py-3 font-medium hover:bg-secondary/90 transition-colors mb-6"
                    >
                      Book Appointment
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <p className="text-muted-foreground mb-6">{s.description}</p>
                    <ul className="space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-foreground">
                          <span className="text-secondary mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}