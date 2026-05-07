import { useSyncExternalStore } from "react";
import type { MenuItem } from "./data";

type CartLine = { item: MenuItem; qty: number };
type State = { lines: CartLine[]; open: boolean };

let state: State = { lines: [], open: false };
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const cart = {
  add(item: MenuItem) {
    const existing = state.lines.find((l) => l.item.id === item.id);
    state = {
      ...state,
      open: true,
      lines: existing
        ? state.lines.map((l) => (l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l))
        : [...state.lines, { item, qty: 1 }],
    };
    emit();
  },
  remove(id: string) {
    state = { ...state, lines: state.lines.filter((l) => l.item.id !== id) };
    emit();
  },
  setQty(id: string, qty: number) {
    if (qty <= 0) return cart.remove(id);
    state = { ...state, lines: state.lines.map((l) => (l.item.id === id ? { ...l, qty } : l)) };
    emit();
  },
  clear() { state = { ...state, lines: [] }; emit(); },
  toggle(open?: boolean) { state = { ...state, open: open ?? !state.open }; emit(); },
  subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); },
  get() { return state; },
};

export function useCart() {
  return useSyncExternalStore(cart.subscribe, cart.get, cart.get);
}
