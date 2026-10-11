import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!response.ok) throw new Error("Message delivery failed");
      form.reset();
      toast.success("Message sent! I'll get back to you soon.");
    } catch {
      toast.error("Couldn't send your message. Please try again or email yassine19265@gmail.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 section-padding">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Let's build something{" "}
            <span className="text-gradient">great</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md font-light text-muted-foreground">
            Have a project in mind or just want to say hello? My inbox is always
            open.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-panel space-y-5 rounded-3xl p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              required
              name="name"
              aria-label="Your name"
              autoComplete="name"
              placeholder="Your name"
              className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <input
              required
              type="email"
              name="email"
              aria-label="Your email"
              autoComplete="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
          <textarea
            required
            name="message"
            aria-label="Your message"
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
          <button
            type="submit"
            disabled={sending}
            className="glow-primary flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
          >
            {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {sending ? "Sending..." : "Send message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
