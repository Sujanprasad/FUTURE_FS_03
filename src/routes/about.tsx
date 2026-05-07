import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero-cafe.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Lumière Café" },
      { name: "description", content: "From a corner table in a flower shop to Lisbon's most-loved café. The story behind Lumière, our roastery and our team." },
      { property: "og:title", content: "Our Story — Lumière Café" },
      { property: "og:description", content: "Six years of slow coffee and considered cooking." },
      { property: "og:image", content: hero },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">Our Story</span>
          <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95]">Six years of <span className="text-gradient-gold italic">slow coffee.</span></h1>
        </Reveal>

        <Reveal delay={120}>
          <img src={hero} alt="Lumière interior" loading="lazy" className="mt-14 aspect-[16/9] w-full rounded-3xl object-cover shadow-elegant" />
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/85">
          <Reveal><p>Lumière began as a single corner table inside a flower shop on Rua das Flores. We pulled shots on a tiny lever machine, served three pastries, and stayed open from 8 to 1.</p></Reveal>
          <Reveal delay={80}><p>Six years on, very little has changed in spirit. The room is bigger and the menu has grown — but every shot is still pulled by hand, every croissant still laminated overnight, every regular still greeted by name.</p></Reveal>
          <Reveal delay={160}><p>We source from a single farm in Yirgacheffe, roast in-house every Tuesday, and bake from 4am with butter from a small Portuguese dairy that’s been making it the same way since 1962.</p></Reveal>
        </div>

        <Reveal>
          <img src={g3} alt="Roasting beans" loading="lazy" className="mt-16 aspect-[16/9] w-full rounded-3xl object-cover shadow-elegant" />
        </Reveal>

        <Reveal>
          <div className="mt-20 grid gap-6 sm:grid-cols-3">
            {[
              { n: "10K+", l: "Cups poured monthly" },
              { n: "1,200+", l: "Five-star reviews" },
              { n: "100%", l: "Single-origin beans" },
            ].map((s) => (
              <div key={s.l} className="rounded-3xl glass p-8 text-center shadow-card">
                <p className="font-display text-5xl text-gradient-gold">{s.n}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
