import { useEffect, useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-cafe.jpg";
import meal from "@/assets/menu-meal.jpg";
import { Reveal } from "./Reveal";

const images = [
  { src: g1, span: "row-span-2" },
  { src: g2, span: "" },
  { src: hero, span: "" },
  { src: g3, span: "row-span-2" },
  { src: g4, span: "" },
  { src: meal, span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">Gallery</span>
          <h2 className="mt-6 font-display text-5xl md:text-6xl">A glimpse <span className="text-gradient-gold italic">inside</span></h2>
        </Reveal>
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 50} className={img.span}>
              <button
                onClick={() => setOpen(img.src)}
                className="group relative h-full w-full overflow-hidden rounded-2xl shadow-card"
              >
                <img
                  src={img.src}
                  alt="café gallery"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[80] grid place-items-center bg-background/95 p-6 backdrop-blur-md animate-fade-in"
        >
          <button className="absolute right-6 top-6 rounded-full glass p-3" onClick={() => setOpen(null)} aria-label="Close">
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-elegant" />
        </div>
      )}
    </section>
  );
}
