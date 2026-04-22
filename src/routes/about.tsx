import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Counter } from "@/components/site/Reveal";
import { Award, ShieldCheck, Leaf, Cpu, Factory, Zap } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sambe Electricals" },
      { name: "description", content: "Two decades of building industrial-grade electrical equipment in India. Our story, milestones and certifications." },
      { property: "og:title", content: "About Sambe Electricals" },
      { property: "og:description", content: "20+ years of engineering excellence in industrial electrical manufacturing." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2003", title: "Founded", desc: "Started as a small workshop in Pune, building voltage stabilizers." },
  { year: "2008", title: "ISO Certified", desc: "Achieved ISO 9001 certification and expanded into LT panels." },
  { year: "2014", title: "New Facility", desc: "Inaugurated a 40,000 sq.ft. manufacturing plant." },
  { year: "2019", title: "500+ Clients", desc: "Crossed 500 enterprise clients across India." },
  { year: "2024", title: "Smart Manufacturing", desc: "Adopted IoT-enabled QC and digital twin testing." },
];

const solutions = [
  { icon: Cpu, img: p1, title: "Power Electronics", desc: "High-precision regulators." },
  { icon: Factory, img: p2, title: "Control Systems", desc: "Custom LT/HT panels." },
  { icon: Zap, img: p3, title: "Energy Solutions", desc: "Renewable integration." },
];

const certs = [
  { name: "ISO 9001:2015", icon: ShieldCheck },
  { name: "CE Marked", icon: Award },
  { name: "RoHS Compliant", icon: Leaf },
  { name: "BIS Certified", icon: ShieldCheck },
];

function About() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-center bg-primary overflow-hidden pt-16">
        <img src={aboutImg} alt="" width={1280} height={960} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        <div className="relative container-x text-primary-foreground animate-fade-up">
          <span className="text-electric font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 max-w-3xl">Engineering trust, one circuit at a time.</h1>
        </div>
      </section>

      {/* STORY */}
      <section className="section bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="img-zoom rounded-xl overflow-hidden">
              <img src={aboutImg} alt="Our facility" loading="lazy" width={1280} height={960} className="w-full h-[460px] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <span className="text-electric font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5">From a Pune workshop to a national brand.</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Sambe Electricals was founded in 2003 with a simple belief: industrial India deserves power equipment that just works — every shift, every monsoon, every load surge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today we manufacture across four product lines, ship to 28 states, and back every unit with a service network that responds in under 24 hours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section bg-surface">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-electric font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Two decades of milestones.</h2>
            </div>
          </Reveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <div className={`relative flex md:items-center mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-electric -translate-x-1/2 mt-2 md:mt-0 ring-4 ring-surface" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className="bg-card border border-border rounded-xl p-5 card-lift">
                      <div className="text-electric font-display font-bold text-2xl">{t.year}</div>
                      <h3 className="font-semibold mt-1">{t.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="section bg-background">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-electric font-semibold text-sm uppercase tracking-wider">Industrial Solutions</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Built for the toughest environments.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="card-lift bg-card border border-border rounded-xl overflow-hidden">
                  <div className="img-zoom h-44">
                    <img src={s.img} alt={s.title} loading="lazy" width={1280} height={800} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <s.icon className="w-5 h-5 text-electric" />
                      <h3 className="font-semibold">{s.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 py-14">
          {[
            { v: 20, s: "+", l: "Years" },
            { v: 500, s: "+", l: "Clients" },
            { v: 50, s: "K+", l: "Units" },
            { v: 40, s: "K", l: "Sq. Ft. Plant" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-display text-electric">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section bg-surface">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-electric font-semibold text-sm uppercase tracking-wider">Certifications</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Quality, certified.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {certs.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div className="card-lift bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-electric/10 flex items-center justify-center mb-4">
                    <c.icon className="w-7 h-7 text-electric" />
                  </div>
                  <h3 className="font-semibold text-sm">{c.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
