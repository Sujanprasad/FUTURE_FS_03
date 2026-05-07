import { useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { cart, useCart } from "@/lib/cart-store";
import { placeOrder } from "@/lib/api.functions";

export function CartDrawer() {
  const { lines, open } = useCart();
  const place = useServerFn(placeOrder);
  const total = lines.reduce((s, l) => s + l.qty * l.item.price, 0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onCheckout = async () => {
    try {
      const res = await place({ data: { items: lines.map(l => ({ id: l.item.id, name: l.item.name, qty: l.qty, price: l.item.price })), total } });
      toast.success(res.message, { description: `Order #${res.id.slice(0,8)} · ETA ${res.eta}` });
      cart.clear();
      cart.toggle(false);
    } catch {
      toast.error("Could not place order. Please try again.");
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => cart.toggle(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col glass-strong transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-border/50 p-6">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h3 className="font-display text-2xl">Your Order</h3>
          </div>
          <button onClick={() => cart.toggle(false)} aria-label="Close" className="rounded-full p-2 hover:bg-white/5">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="grid h-20 w-20 place-items-center rounded-full glass">
                <ShoppingBag className="h-8 w-8 text-primary/70" />
              </div>
              <p className="mt-4 font-display text-xl">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">Add a little something from the menu.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((l) => (
                <li key={l.item.id} className="flex gap-4 rounded-2xl glass p-4">
                  {l.item.image && (
                    <img src={l.item.image} alt={l.item.name} loading="lazy" width={80} height={80} className="h-20 w-20 rounded-xl object-cover" />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <p className="font-medium">{l.item.name}</p>
                      <p className="text-primary font-semibold">${(l.qty * l.item.price).toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{l.item.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <button onClick={() => cart.setQty(l.item.id, l.qty - 1)} className="grid h-7 w-7 place-items-center rounded-full glass hover:bg-white/10"><Minus className="h-3 w-3" /></button>
                      <span className="min-w-6 text-center text-sm">{l.qty}</span>
                      <button onClick={() => cart.setQty(l.item.id, l.qty + 1)} className="grid h-7 w-7 place-items-center rounded-full glass hover:bg-white/10"><Plus className="h-3 w-3" /></button>
                      <button onClick={() => cart.remove(l.item.id)} className="ml-auto text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-border/50 p-6">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-display text-3xl text-gradient-gold">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="mt-4 w-full rounded-full bg-gradient-gold px-6 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.01] hover:shadow-glow"
            >
              Place Order
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
