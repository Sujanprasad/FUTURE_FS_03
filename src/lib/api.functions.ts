import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(30),
  date: z.string().min(1).max(20),
  time: z.string().min(1).max(20),
  guests: z.number().int().min(1).max(20),
  notes: z.string().max(500).optional(),
});

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

const orderSchema = z.object({
  items: z.array(z.object({ id: z.string(), name: z.string(), qty: z.number().int().min(1).max(50), price: z.number() })).min(1).max(50),
  total: z.number().min(0),
});

export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => bookingSchema.parse(d))
  .handler(async ({ data }) => {
    console.log("[BOOKING]", new Date().toISOString(), data);
    return { ok: true, id: crypto.randomUUID(), message: `Table reserved for ${data.guests} on ${data.date} at ${data.time}.` };
  });

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => contactSchema.parse(d))
  .handler(async ({ data }) => {
    console.log("[CONTACT]", new Date().toISOString(), data);
    return { ok: true, id: crypto.randomUUID(), message: `Thanks ${data.name} — we'll reply within 24 hours.` };
  });

export const placeOrder = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => orderSchema.parse(d))
  .handler(async ({ data }) => {
    console.log("[ORDER]", new Date().toISOString(), data);
    return { ok: true, id: crypto.randomUUID(), eta: "20–25 minutes", message: "Order received. Our barista is on it." };
  });
