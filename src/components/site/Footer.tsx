import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl">
              <span className="text-gradient-gold">Lumière</span> Café
            </h3>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              A quiet corner of the city where slow coffee, considered cooking, and warm light come together.
              Roasted in-house. Served with care.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full glass transition hover:bg-white/10 hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Visit</h4>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              42 Lantern Street<br />
              Lisbon, Portugal<br />
              Mon–Sun · 7am–10pm
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/menu" className="hover:text-foreground transition">Menu</Link></li>
              <li><Link to="/booking" className="hover:text-foreground transition">Reservations</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="gold-divider mt-12" />
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lumière Café · Crafted with intention.
        </p>
      </div>
    </footer>
  );
}
