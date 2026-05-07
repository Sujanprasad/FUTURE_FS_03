import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lumière Café" },
      { name: "description", content: "Visit Lumière Café at 42 Lantern Street, Lisbon. Open daily 7am–10pm. Reach us by phone, email or the form." },
      { property: "og:title", content: "Contact — Lumière Café" },
      { property: "og:description", content: "Visit, call, or message us." },
    ],
  }),
  component: ContactPage,
});

const info = [
  { icon: MapPin, t: "Visit", d: "42 Lantern Street, Lisbon, PT" },
  { icon: Phone, t: "Call", d: "+351 210 555 042" },
  { icon: Mail, t: "Write", d: "hello@lumierecafe.co" },
  { icon: Clock, t: "Hours", d: "Mon–Sun · 7am – 10pm" },
];

function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">Contact</span>
            <h1 className="mt-6 font-display text-6xl md:text-7xl leading-[1]">Say <span className="text-gradient-gold italic">hello.</span></h1>
            <p className="mt-6 max-w-md text-muted-foreground">We answer everything within 24 hours.</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {info.map((f) => (
                <li key={f.t} className="rounded-2xl glass p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-gold text-primary-foreground"><f.icon className="h-4 w-4" /></span>
                  <p className="mt-3 text-xs uppercase tracking-widest text-primary">{f.t}</p>
                  <p className="mt-1 text-sm">{f.d}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 overflow-hidden rounded-3xl border border-border/50 shadow-card">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-9.155%2C38.715%2C-9.135%2C38.725&layer=mapnik"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
