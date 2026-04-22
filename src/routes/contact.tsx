import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sambe Electricals" },
      { name: "description", content: "Get in touch for quotes, datasheets and engineering consultations." },
      { property: "og:title", content: "Contact Sambe Electricals" },
      { property: "og:description", content: "Let's power your next project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative h-[45vh] min-h-[340px] flex items-center bg-primary text-primary-foreground pt-16">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 30%, var(--electric), transparent 60%)" }} />
        <div className="relative container-x animate-fade-up">
          <span className="text-electric font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 max-w-3xl">Let's talk power.</h1>
          <p className="text-primary-foreground/80 mt-4 max-w-xl">Quotes within 24 hours. Engineering consults free of charge.</p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              {sent ? (
                <div className="p-6 bg-electric/10 border border-electric/30 rounded-lg text-center">
                  <p className="font-semibold text-electric">Message sent!</p>
                  <p className="text-sm text-muted-foreground mt-1">Our team will reach out within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  <div className="sm:col-span-1">
                    <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                    <input required className="w-full px-3 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-electric/40" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-sm font-medium mb-1.5 block">Company</label>
                    <input className="w-full px-3 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-electric/40" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email</label>
                    <input required type="email" className="w-full px-3 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-electric/40" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone</label>
                    <input type="tel" className="w-full px-3 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-electric/40" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <textarea required rows={5} className="w-full px-3 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-electric/40 resize-none" />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold btn-electric">
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Visit Us", lines: ["Plot 42, Industrial Area Phase II", "Pune, Maharashtra 411019"] },
                { icon: Phone, title: "Call", lines: ["+91 98765 43210", "+91 20 2712 0000"] },
                { icon: Mail, title: "Email", lines: ["info@sambeelectricals.in", "sales@sambeelectricals.in"] },
                { icon: Clock, title: "Hours", lines: ["Mon–Sat: 9:00 – 18:30", "Sun: Closed"] },
              ].map((c) => (
                <div key={c.title} className="bg-card border border-border rounded-xl p-5 flex gap-4 card-lift">
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-electric/10 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{c.title}</h3>
                    {c.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-16 bg-background">
        <div className="container-x">
          <div className="rounded-xl overflow-hidden border border-border h-96">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.79%2C18.49%2C73.93%2C18.59&layer=mapnik"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
