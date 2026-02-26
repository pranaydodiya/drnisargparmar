import { AlertCircle } from "lucide-react";

export function MedicalDisclaimer() {
  return (
    <section id="disclaimer" className="py-12 md:py-16 border-t border-border" aria-labelledby="disclaimer-heading">
      <div className="container mx-auto px-4">
        <div className="flex gap-3 max-w-3xl mx-auto p-4 rounded-xl bg-muted/50">
          <AlertCircle className="h-6 w-6 text-muted-foreground shrink-0 mt-0.5" aria-hidden />
          <div>
            <h2 id="disclaimer-heading" className="text-sm font-semibold text-foreground mb-1">
              Medical Disclaimer
            </h2>
            <p className="text-sm text-muted-foreground">
              The information provided on this website is for educational purposes only and should not be considered as medical advice. Always consult a qualified healthcare provider for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
