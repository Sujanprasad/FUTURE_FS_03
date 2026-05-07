import { createFileRoute } from "@tanstack/react-router";
import { BookingForm } from "@/components/site/BookingForm";
import { Reveal } from "@/components/site/Reveal";
import { Clock, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Lumière Café" },
      { name: "description", content: "Book your table at Lumière Café. Available 7 days a week. We hold tables for parties of 1–20 guests." },
      { property: "og:title", content: "Reserve a Table — Lumière Café" },
      { property: "og:description", content: "Book a table at Lumière in seconds." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">Reservations</span>
            <h1 className="mt-6 font-display text-6xl md:text-7xl leading-[1]">Save your <span className="text-gradient-gold italic">seat.</span></h1>
            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              Tables are confirmed instantly. We hold reservations for 15 minutes past arrival.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                { icon: Clock, t: "Open daily", d: "7:00am — 10:00pm" },
                { icon: Users, t: "Group bookings", d: "Up to 20 guests — drop us a note." },
                { icon: Sparkles, t: "Private events", d: "Mention it in the notes — we’ll reach out." },
              ].map((f) => (
                <li key={f.t} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-gold text-primary-foreground"><f.icon className="h-4 w-4" /></span>
                  <div>
                    <p className="font-medium">{f.t}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{f.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
