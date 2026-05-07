import { createFileRoute } from "@tanstack/react-router";
import { MenuShowcase } from "@/components/site/MenuShowcase";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Lumière Café" },
      { name: "description", content: "Single-origin coffee, artisan pastries, brunch snacks and seasonal meals. Order online or browse our full menu." },
      { property: "og:title", content: "Menu — Lumière Café" },
      { property: "og:description", content: "Coffee, pastry, snacks and meals — crafted daily." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="font-display text-6xl md:text-7xl">The <span className="text-gradient-gold italic">Menu</span></h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">From morning espresso to candlelit dinners.</p>
      </div>
      <MenuShowcase />
    </div>
  );
}
