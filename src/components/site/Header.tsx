import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cart, useCart } from "@/lib/cart-store";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Story" },
  { to: "/booking", label: "Reservations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lines } = useCart();
  const count = lines.reduce((s, l) => s + l.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-card" : ""}`}>
          <Link to="/" className="flex items-center gap-2 font-display text-xl tracking-tight">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-gold shadow-glow" />
            <span className="text-gradient-gold font-semibold">Lumière</span>
            <span className="text-foreground/80">Café</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-4 py-2 text-sm text-foreground/75 transition hover:bg-white/5 hover:text-foreground"
                activeProps={{ className: "rounded-full px-4 py-2 text-sm text-primary bg-white/5" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => cart.toggle(true)}
              className="relative inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm transition hover:bg-white/10"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4 text-primary" />
              <span className="hidden sm:inline">Cart</span>
              {count > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-gradient-gold text-[11px] font-semibold text-primary-foreground shadow-glow">
                  {count}
                </span>
              )}
            </button>
            <button
              className="md:hidden rounded-full glass p-2"
              onClick={() => setOpen((s) => !s)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-3xl glass-strong p-4 md:hidden animate-fade-in">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-foreground/80 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
