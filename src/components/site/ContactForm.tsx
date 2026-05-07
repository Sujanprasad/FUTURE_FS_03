import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { submitContact } from "@/lib/api.functions";
import { Reveal } from "./Reveal";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const res = await send({ data: { name: String(fd.get("name") || ""), email: String(fd.get("email") || ""), message: String(fd.get("message") || "") } });
      toast.success("Message sent", { description: res.message });
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("Please check your details.");
    } finally { setLoading(false); }
  };

  return (
    <Reveal>
      <form onSubmit={onSubmit} className="rounded-3xl glass-strong p-6 sm:p-10 shadow-card space-y-4">
        <div className="relative">
          <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70" />
          <input name="name" required maxLength={100} placeholder="Your name" className="w-full rounded-2xl glass bg-input/40 px-4 py-4 pl-11 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70" />
          <input name="email" type="email" required maxLength={255} placeholder="Email" className="w-full rounded-2xl glass bg-input/40 px-4 py-4 pl-11 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-primary/70" />
          <textarea name="message" required maxLength={1000} rows={5} placeholder="How can we help?" className="w-full rounded-2xl glass bg-input/40 px-4 py-4 pl-11 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50" />
        </div>
        <button disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.01] hover:shadow-glow disabled:opacity-60">
          <Send className="h-4 w-4" /> {loading ? "Sending…" : "Send Message"}
        </button>
      </form>
    </Reveal>
  );
}
