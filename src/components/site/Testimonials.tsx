import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
            Voices
          </span>
          <h2 className="mt-6 font-display text-5xl md:text-6xl">
            Loved by <span className="text-gradient-gold italic">regulars</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 min-h-[280px]">
          {testimonials.map((q, idx) => (
            <div
              key={q.name}
              className={`absolute inset-0 transition-all duration-700 ${idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
            >
              <Quote className="mx-auto h-10 w-10 text-primary/60" />
              <p className="mx-auto mt-6 max-w-3xl font-display text-2xl md:text-3xl leading-relaxed text-foreground/95 italic">
                "{q.quote}"
              </p>
              <div className="mt-6 flex justify-center gap-1">
                {Array.from({ length: q.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm font-medium">{q.name}</p>
              <p className="text-xs text-muted-foreground">{q.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-gradient-gold" : "w-1.5 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
