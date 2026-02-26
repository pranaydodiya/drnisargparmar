import { Award, Activity, Clock, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const STATS = [
  { label: "5+ Years Experience", icon: Award },
  { label: "5000+ Successful Surgeries", icon: Activity },
  { label: "24/7 Emergency Available", icon: Clock },
  { label: "NIMHANS Trained (Bangalore)", icon: GraduationCap },
] as const;

export function TrustIndicators() {
  return (
    <section id="trust" className="py-16 md:py-24 bg-muted/30" aria-labelledby="trust-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map(({ label, icon: Icon }) => (
            <Card
              key={label}
              className="border-border bg-card hover:shadow-md transition-shadow rounded-xl text-center"
            >
              <CardContent className="pt-6 pb-6">
                <Icon className="h-10 w-10 mx-auto mb-3 text-secondary" aria-hidden />
                <p className="font-semibold text-foreground">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
