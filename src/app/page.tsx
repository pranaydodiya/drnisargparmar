import { SectionReveal } from "@/components/shared/SectionReveal";
import { Hero } from "@/components/home/Hero";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChoose } from "@/components/home/WhyChoose";
import { SpecialtiesSection } from "@/components/home/SpecialtiesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { ContactLocationsSection } from "@/components/home/ContactLocationsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { MedicalDisclaimer } from "@/components/home/MedicalDisclaimer";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionReveal>
        <TrustIndicators />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <AboutSection />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <WhyChoose />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <SpecialtiesSection />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <TestimonialsSection />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <AppointmentCTA />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <ContactLocationsSection />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <FAQSection />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <MedicalDisclaimer />
      </SectionReveal>
    </>
  );
}
