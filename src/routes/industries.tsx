import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Factory, Zap, HardHat, Flame, Server, HeartPulse, ShieldCheck, Cpu, Layers, MapPin, ArrowRight } from "lucide-react";
import indMfg from "@/assets/industry-manufacturing.jpg";
import indPower from "@/assets/industry-power.jpg";
import indCons from "@/assets/industry-construction.jpg";
import indOil from "@/assets/industry-oilgas.jpg";
import indDc from "@/assets/industry-datacenter.jpg";
import indHc from "@/assets/industry-healthcare.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Sambe Electricals" },
      { name: "description", content: "Powering manufacturing, utilities, oil & gas, data centers, healthcare and construction across India." },
      { property: "og:title", content: "Industries We Serve — Sambe Electricals" },
      { property: "og:description", content: "Sectors powered by Sambe Electricals." },
    ],
  }),
  component: Industries,
});

const items = [
  { img: indMfg, name: "Manufacturing", tag: "Process & Automation", icon: Factory, desc: "Process automation and reliable power for production lines." },
  { img: indPower, name: "Power & Utilities", tag: "Grid & Substation", icon: Zap, desc: "Substation packages, switchgear, distribution gear." },
  { img: indCons, name: "Construction", tag: "Site Infrastructure", icon: HardHat, desc: "Site power, distribution boards, temporary infrastructure." },
  { img: indOil, name: "Oil & Gas", tag: "Hazardous Areas", icon: Flame, desc: "Hazardous-area rated panels and protection systems." },
  { img: indDc, name: "Data Centers", tag: "Mission Critical", icon: Server, desc: "Mission-critical UPS-grade power and clean distribution." },
  { img: indHc, name: "Healthcare", tag: "Isolated Power", icon: HeartPulse, desc: "Isolated power systems and emergency switchover panels." },
];

const trust = [
  { icon: ShieldCheck, title: "Reliable Systems", desc: "Built for 24/7 uptime with redundant protection." },
  { icon: Cpu, title: "High Precision Engineering", desc: "Tight tolerances, IS/IEC compliant assemblies." },
  { icon: Layers, title: "Scalable Solutions", desc: "Modular designs that grow with your operation." },
  { icon: MapPin, title: "Pan-India Deployment", desc: "Field commissioning and service across 28 states." },
];

function Industries() {
  return (
    <>
      <section className="relative h-[45vh] min-h-[340px] flex items-center bg-primary text-primary-foreground pt-16 overflow-hidden">
        {/* Industrial grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--electric) 1px, transparent 1px), linear-gradient(90deg, var(--electric) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Animated radial glow */}
        <div
          className="absolute inset-0 opacity-40 animate-zoom-slow"
          style={{ background: "radial-gradient(circle at 30% 50%, var(--electric), transparent 60%)" }}
        />
        {/* Bottom fade for depth */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary to-transparent" />

        <div className="relative container-x animate-fade-up">
          <span className="text-electric font-semibold text-sm uppercase tracking-wider">Industries</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 max-w-3xl">Powering the sectors that move India.</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/75">
            Engineered electrical systems trusted by manufacturers, utilities, and mission-critical operators nationwide.
          </p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.name} delay={(i % 3) * 120}>
                <article className="group relative rounded-xl overflow-hidden h-80 card-lift cursor-pointer ring-1 ring-border/50">
                  <img
                    src={it.img}
                    alt={it.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Bottom dark gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent transition-opacity duration-500 group-hover:from-primary group-hover:via-primary/80" />
                  {/* Electric tint on hover */}
                  <div className="absolute inset-0 bg-electric/0 group-hover:bg-electric/10 transition-colors duration-500" />

                  {/* Top tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium text-primary">
                    <Icon className="h-3.5 w-3.5 text-electric" />
                    {it.tag}
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground transition-transform duration-500 ease-out group-hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-8 w-8 rounded-lg bg-electric/90 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-electric-foreground" />
                      </span>
                      <h3 className="text-2xl font-bold">{it.name}</h3>
                    </div>
                    <p className="text-sm text-primary-foreground/75 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500">
                      {it.desc}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-electric opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Explore capability <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why Industries Trust Us */}
      <section className="section bg-surface">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-electric font-semibold text-sm uppercase tracking-wider">Why us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Why industries trust us</h2>
              <p className="mt-3 text-muted-foreground">
                Two decades of field-proven engineering, rigorous QA, and on-ground service make us a dependable partner.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trust.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.title} delay={i * 100}>
                  <div className="group h-full rounded-xl bg-card border border-border p-6 card-lift">
                    <div className="h-12 w-12 rounded-lg bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                      <Icon className="h-6 w-6 text-electric" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-foreground">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(circle at 80% 50%, var(--electric), transparent 55%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--electric) 1px, transparent 1px), linear-gradient(90deg, var(--electric) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative container-x py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-electric font-semibold text-sm uppercase tracking-wider">Let's build</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 max-w-2xl">Powering industries across India.</h2>
            <p className="mt-3 text-primary-foreground/75 max-w-xl">
              Tell us about your site, load profile, and timeline — we'll engineer the right solution.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-electric inline-flex items-center gap-2 rounded-lg px-7 py-3.5 font-semibold text-base"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
