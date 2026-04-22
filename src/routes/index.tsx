import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Factory, ShieldCheck, Wrench, CheckCircle2 } from "lucide-react";
// import heroImg from "@/assets/hero-factory.jpg";
import aboutImg from "@/assets/about-team.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import indMfg from "@/assets/industry-manufacturing.jpg";
import indPower from "@/assets/industry-power.jpg";
import indCons from "@/assets/industry-construction.jpg";
import indOil from "@/assets/industry-oilgas.jpg";
import indDc from "@/assets/industry-datacenter.jpg";
import indHc from "@/assets/industry-healthcare.jpg";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";
import { Reveal, Counter } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sambe Electricals — Industrial Power & Control Solutions" },
      { name: "description", content: "Premium electrical manufacturing: voltage regulators, MCBs, control panels and switchgear engineered for India's industries." },
      { property: "og:title", content: "Sambe Electricals — Industrial Power Solutions" },
      { property: "og:description", content: "20+ years engineering reliable industrial power across India." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Trusted Clients" },
  { value: 50, suffix: "K+", label: "Units Delivered" },
  { value: 28, suffix: "", label: "States Served" },
];

const services = [
  { icon: Cpu, title: "Power Electronics", desc: "Precision voltage regulators and stabilizers built for industrial loads." },
  { icon: Factory, title: "Control Panels", desc: "Custom-engineered LT/HT panels for manufacturing & process plants." },
  { icon: ShieldCheck, title: "Switchgear", desc: "Reliable protection devices certified to international standards." },
  { icon: Wrench, title: "After-sales Support", desc: "Pan-India service network with 24/7 maintenance contracts." },
];

const projects = [
  { img: p1, tag: "Manufacturing", title: "Smart Control System", desc: "Turnkey control panel rollout across 12 production lines for a leading auto-component plant." },
  { img: p2, tag: "Utilities", title: "33 kV Substation", desc: "Engineered, supplied and commissioned a complete substation package in 90 days." },
  { img: p3, tag: "Renewables", title: "1.4 MW Rooftop Solar", desc: "Integrated switchgear and protection for a captive industrial solar installation." },
];

const industriesPreview = [
  { img: indMfg, name: "Manufacturing" },
  { img: indPower, name: "Power & Utilities" },
  { img: indCons, name: "Construction" },
  { img: indOil, name: "Oil & Gas" },
  { img: indDc, name: "Data Centers" },
  { img: indHc, name: "Healthcare" },
];

const partners = ["TATA POWER", "L&T", "SIEMENS", "ABB", "RELIANCE", "ADANI", "BHEL", "GODREJ", "MAHINDRA", "JSW"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <video
          src="https://drive.google.com/uc?export=download&id=1MNxaM3nbBhbpcbEfyquvpc7NERnmYueL"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60" />
        <div className="relative h-full container-x flex items-center">
          <div className="max-w-2xl text-primary-foreground animate-fade-up">
            <span className="inline-block px-3 py-1 rounded-full bg-electric/20 text-electric text-xs font-semibold tracking-wider uppercase mb-5 border border-electric/30">
              Industrial Power Engineered Right
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-5">
              Powering India's<br />
              <span className="text-electric">Industrial Backbone.</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              From precision voltage regulators to mission-critical switchgear — we manufacture electrical solutions trusted by 500+ enterprises.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold btn-electric">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold border border-white/30 text-primary-foreground hover:bg-white/10 transition">
                Talk to Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-5xl font-bold font-display text-electric">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section bg-background">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-electric font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Complete electrical solutions, end-to-end.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="card-lift bg-card border border-border rounded-xl p-6 h-full">
                  <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-5">
                    <s.icon className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section bg-surface">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="text-electric font-semibold text-sm uppercase tracking-wider">Featured Projects</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">Selected work.</h2>
              </div>
              <Link to="/products" className="text-sm font-semibold text-primary hover:text-electric inline-flex items-center gap-1">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="group card-lift bg-card border border-border rounded-xl overflow-hidden h-full">
                  <div className="img-zoom h-56">
                    <img src={p.img} alt={p.title} loading="lazy" width={1280} height={800} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-electric font-semibold uppercase tracking-wider">{p.tag}</span>
                    <h3 className="text-xl font-bold mt-2 mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section bg-background">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-electric font-semibold text-sm uppercase tracking-wider">Industries</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Trusted across sectors.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {industriesPreview.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 60}>
                <div className="img-zoom relative rounded-xl overflow-hidden h-44 card-lift">
                  <img src={ind.img} alt={ind.name} loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-primary-foreground font-semibold text-lg">{ind.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section bg-surface">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="img-zoom rounded-xl overflow-hidden">
              <img src={aboutImg} alt="Engineers reviewing blueprint" loading="lazy" width={1280} height={960} className="w-full h-[420px] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <span className="text-electric font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-5">Two decades of engineering excellence.</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sambe Electricals designs and manufactures industrial-grade power and control equipment from our facility in Pune. Every unit ships tested, certified, and built to last in the toughest environments.
              </p>
              <ul className="space-y-3 mb-8">
                {["ISO 9001:2015 & CE certified", "In-house R&D and testing labs", "Pan-India service & support"].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-electric" /> {b}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container-x">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">Trusted by leading enterprises</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="text-2xl font-display font-bold text-muted-foreground/60 hover:text-electric transition">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="section bg-surface">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="text-electric font-semibold text-sm uppercase tracking-wider">Our Team</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">People behind the power.</h2>
              </div>
              <Link to="/team" className="text-sm font-semibold text-primary hover:text-electric inline-flex items-center gap-1">
                Meet the team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: t1, name: "Rajesh Sambe", role: "Founder & MD" },
              { img: t2, name: "Anil Kulkarni", role: "General Manager" },
              { img: t3, name: "Priya Deshmukh", role: "Operations Head" },
              { img: t4, name: "Vikram Iyer", role: "Finance Head" },
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="img-zoom card-lift bg-card border border-border rounded-xl overflow-hidden">
                  <div className="h-64">
                    <img src={m.img} alt={m.name} loading="lazy" width={800} height={960} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold">{m.name}</h3>
                    <p className="text-xs text-muted-foreground">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 50%, var(--electric), transparent 60%)" }} />
        <div className="relative container-x text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Let's power your next project.</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Get a free engineering consultation and quote within 24 hours.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold btn-electric">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
