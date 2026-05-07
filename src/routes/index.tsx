import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Coffee, Sparkles, MapPin, Clock } from "lucide-react";
import heroImg from "@/assets/hero-cafe.jpg";
import { MenuShowcase } from "@/components/site/MenuShowcase";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { ImpactSection } from "@/components/site/ImpactSection";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Café — Slow coffee, considered cooking" },
      { name: "description", content: "Single-origin coffee, artisan pastries and seasonal plates in the heart of Lisbon. Reserve a table or order online." },
      { property: "og:title", content: "Lumière Café — Slow coffee, considered cooking" },
      { property: "og:description", content: "Single-origin coffee, artisan pastries and seasonal plates. Reserve or order online." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <img
          src={heroImg}
          alt="Lumière Café interior at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-20 h-full w-full object-cover scale-110 animate-[fade-in_1.2s_ease-out]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,oklch(0.65_0.18_45/0.18),transparent_60%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 pt-32 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary animate-[float_6s_ease-in-out_infinite]">
              <Sparkles className="h-3 w-3" /> Est. 2018 · Lisbon
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.95] tracking-tight">
              Where every cup
              <br />
              <span className="text-gradient-gold italic">tastes like home.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-foreground/80 leading-relaxed">
              Slow-roasted beans, hand-laminated pastries, seasonal plates — served beneath warm light and quiet jazz.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.02] hover:shadow-glow"
              >
                <Coffee className="h-4 w-4" /> Order Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold transition hover:bg-white/10"
              >
                <Calendar className="h-4 w-4" /> Book a Table
              </Link>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="h-3 w-3 text-primary" /> 42 Lantern Street</span>
              <span className="flex items-center gap-2"><Clock className="h-3 w-3 text-primary" /> Open · 7am – 10pm</span>
              <span className="flex items-center gap-2">★★★★★ 4.9 · 1,200+ reviews</span>
            </div>
          </Reveal>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 animate-[float_3s_ease-in-out_infinite]">
          <div className="h-10 w-6 rounded-full border border-primary/40 p-1">
            <div className="h-2 w-1 mx-auto rounded-full bg-primary" />
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="relative overflow-hidden border-y border-border/50 py-6">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-16 whitespace-nowrap font-display text-2xl text-muted-foreground/60 italic">
          {Array.from({ length: 4 }).flatMap((_, j) =>
            ["Single Origin", "Slow Roasted", "Hand Crafted", "Locally Sourced", "Open Daily"].map((w, i) => (
              <span key={`${j}-${i}`} className="flex items-center gap-16">
                {w}
                <span className="text-primary">✦</span>
              </span>
            ))
          )}
        </div>
      </section>

      {/* STORY */}
      <section className="relative py-28">
        <div className="mx-auto max-w-6xl px-6 grid gap-14 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-20 blur-2xl" />
              <img src={heroImg} alt="café" loading="lazy" className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">Our Story</span>
            <h2 className="mt-6 font-display text-5xl leading-[1.05]">A small room, <span className="text-gradient-gold italic">a big idea.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Lumière began as a corner table in a flower shop. Six years later we still pull every shot ourselves, still know our regulars’ orders, still believe coffee is best when it’s slow.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We source from a single Ethiopian farm, roast in-house every Tuesday, and partner with a 3rd-generation pastry chef who arrives at 4am to laminate butter into magic.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold">
              Read the full story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <MenuShowcase compact />

      <ImpactSection />

      <Gallery />

      <Testimonials />

      {/* CTA */}
      <section className="relative py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-12 text-center shadow-card md:p-20">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.14_70/0.25),transparent_70%)]" />
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
              Save your <span className="text-gradient-gold italic">favourite seat.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">The window table fills up fast on weekends. Reserve in seconds.</p>
            <Link to="/booking" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.02] hover:shadow-glow">
              <Calendar className="h-4 w-4" /> Book a Table
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
