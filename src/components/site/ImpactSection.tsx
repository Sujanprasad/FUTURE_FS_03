import { TrendingUp, Globe, Users, Calendar, Smartphone, BarChart3 } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Globe, title: "Online Visibility", text: "Show up in search the moment locals look for ‘best coffee near me’.", value: "4.2×" },
  { icon: Calendar, title: "Effortless Bookings", text: "Reservations without phone tag — guests book themselves, 24/7.", value: "+38%" },
  { icon: Users, title: "Customer Engagement", text: "A digital menu, gallery and story that turns curiosity into loyalty.", value: "6 min" },
  { icon: TrendingUp, title: "Revenue Growth", text: "Online ordering and table reservations open new revenue streams.", value: "+24%" },
  { icon: Smartphone, title: "Mobile-First", text: "Every visitor on a phone gets a flagship experience, not an afterthought.", value: "100%" },
  { icon: BarChart3, title: "Real Data", text: "API-backed forms feed bookings and orders into your business workflow.", value: "Live" },
];

export function ImpactSection() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">Business Impact</span>
          <h2 className="mt-6 font-display text-5xl md:text-6xl">How a great site <span className="text-gradient-gold italic">grows the café</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            More than aesthetics — every section here is engineered to move real business metrics.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="group hover-lift relative h-full overflow-hidden rounded-3xl glass p-7 shadow-card">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-gold opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30" />
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-gold text-primary-foreground shadow-glow">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl text-gradient-gold">{s.value}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
