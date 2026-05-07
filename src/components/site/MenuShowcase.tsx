import { useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import { menuItems, type MenuItem } from "@/lib/data";
import { cart } from "@/lib/cart-store";
import { Reveal } from "./Reveal";
import { toast } from "sonner";

const tabs = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Coffee" },
  { id: "pastry", label: "Pastry" },
  { id: "snacks", label: "Snacks" },
  { id: "meals", label: "Meals" },
] as const;

type Tab = typeof tabs[number]["id"];

export function MenuShowcase({ compact = false }: { compact?: boolean }) {
  const [tab, setTab] = useState<Tab>("all");
  const items = tab === "all" ? menuItems : menuItems.filter((i) => i.category === tab);
  const list = compact ? items.slice(0, 6) : items;

  const onAdd = (item: MenuItem) => {
    cart.add(item);
    toast.success(`${item.name} added`, { description: `$${item.price.toFixed(2)} · tap cart to review` });
  };

  return (
    <section id="menu" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-3 w-3" /> The Menu
          </span>
          <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]">
            Crafted for the <span className="text-gradient-gold italic">curious</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Every item is sourced, roasted, or cooked with intention. Tap to add — your cart slides in from the right.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                tab === t.id
                  ? "bg-gradient-gold text-primary-foreground shadow-glow"
                  : "glass text-foreground/70 hover:text-foreground hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <article className="group hover-lift relative overflow-hidden rounded-3xl glass shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-secondary to-card">
                      <span className="font-display text-6xl text-gradient-gold opacity-30">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                  {item.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground shadow-glow">
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-sm font-semibold text-primary">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <div className="relative p-6">
                  <h3 className="font-display text-2xl">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.description}</p>
                  <button
                    onClick={() => onAdd(item)}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full glass px-4 py-3 text-sm font-medium transition hover:bg-gradient-gold hover:text-primary-foreground hover:shadow-glow"
                  >
                    <Plus className="h-4 w-4" /> Add to Cart
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
