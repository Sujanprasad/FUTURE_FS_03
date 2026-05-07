import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Calendar, Clock, Users, Mail, Phone, User, Send } from "lucide-react";
import { toast } from "sonner";
import { submitBooking } from "@/lib/api.functions";
import { Reveal } from "./Reveal";

export function BookingForm() {
  const book = useServerFn(submitBooking);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      date: String(fd.get("date") || ""),
      time: String(fd.get("time") || ""),
      guests: Number(fd.get("guests") || 2),
      notes: String(fd.get("notes") || ""),
    };
    setLoading(true);
    try {
      const res = await book({ data });
      toast.success("Reservation confirmed", { description: res.message });
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("Please check the form fields and try again.");
    } finally {
      setLoading(false);
    }
  };

  const Field = ({ icon: Icon, ...props }: any) => (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70" />
      <input
        {...props}
        className="w-full rounded-2xl glass bg-input/40 px-4 py-4 pl-11 text-sm text-foreground placeholder:text-muted-foreground/70 transition focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
    </div>
  );

  return (
    <Reveal>
      <form onSubmit={onSubmit} className="rounded-3xl glass-strong p-6 sm:p-10 shadow-card">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field icon={User} name="name" required maxLength={100} placeholder="Full name" />
          <Field icon={Mail} name="email" type="email" required maxLength={255} placeholder="Email" />
          <Field icon={Phone} name="phone" required maxLength={30} placeholder="Phone" />
          <Field icon={Users} name="guests" type="number" min={1} max={20} defaultValue={2} required placeholder="Guests" />
          <Field icon={Calendar} name="date" type="date" required />
          <Field icon={Clock} name="time" type="time" required defaultValue="19:00" />
        </div>
        <textarea
          name="notes"
          maxLength={500}
          rows={3}
          placeholder="Any special requests? (optional)"
          className="mt-4 w-full rounded-2xl glass bg-input/40 px-4 py-4 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button
          disabled={loading}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.01] hover:shadow-glow disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {loading ? "Reserving…" : "Reserve a Table"}
        </button>
      </form>
    </Reveal>
  );
}
