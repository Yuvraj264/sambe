import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Zap, Gauge, ShieldCheck, Cpu } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import vr from "@/assets/product-voltage-regulator.jpg";
import mcb from "@/assets/product-mcb.jpg";
import cp from "@/assets/product-control-panel.jpg";
import sg from "@/assets/product-switchgear.jpg";
import dist from "@/assets/product-distribution.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Sambe Electricals" },
      { name: "description", content: "Voltage regulators, MCBs, control panels and switchgear engineered for industrial reliability." },
      { property: "og:title", content: "Products — Sambe Electricals" },
      { property: "og:description", content: "Industrial-grade electrical products built to last." },
    ],
  }),
  component: Products,
});

type Cat = "All" | "Voltage Regulators" | "MCBs" | "Control Panels" | "Switchgear";

const products = [
  { img: vr, cat: "Voltage Regulators" as Cat, name: "Servo Voltage Stabilizer", specs: [{ i: Gauge, t: "5–500 KVA" }, { i: Zap, t: "±1% Accuracy" }, { i: ShieldCheck, t: "IP54" }] },
  { img: mcb, cat: "MCBs" as Cat, name: "Industrial MCB Series-X", specs: [{ i: Zap, t: "6–63 A" }, { i: ShieldCheck, t: "10 kA" }, { i: Cpu, t: "Type B/C/D" }] },
  { img: cp, cat: "Control Panels" as Cat, name: "PLC Control Panel", specs: [{ i: Cpu, t: "Modbus/Profibus" }, { i: Gauge, t: "Up to 2500 A" }, { i: ShieldCheck, t: "IP55" }] },
  { img: sg, cat: "Switchgear" as Cat, name: "LT Switchgear Cabinet", specs: [{ i: Zap, t: "415 V" }, { i: Gauge, t: "Up to 4000 A" }, { i: ShieldCheck, t: "Form 4b" }] },
  { img: dist, cat: "Switchgear" as Cat, name: "Distribution Board", specs: [{ i: Zap, t: "TPN/MCB" }, { i: ShieldCheck, t: "IP43" }, { i: Cpu, t: "Modular" }] },
  { img: vr, cat: "Voltage Regulators" as Cat, name: "Static Voltage Regulator", specs: [{ i: Gauge, t: "10–1000 KVA" }, { i: Zap, t: "<20ms response" }, { i: ShieldCheck, t: "Wall/Floor" }] },
];

const filters: Cat[] = ["All", "Voltage Regulators", "MCBs", "Control Panels", "Switchgear"];

function Products() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.cat === active);

  return (
    <>
      <section className="relative h-[45vh] min-h-[340px] flex items-center bg-primary text-primary-foreground pt-16">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 50%, var(--electric), transparent 60%)" }} />
        <div className="relative container-x animate-fade-up">
          <span className="text-electric font-semibold text-sm uppercase tracking-wider">Products</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 max-w-3xl">Built for industry. Tested for reality.</h1>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container-x py-4 flex gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface text-foreground hover:bg-electric/10 hover:text-electric"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="section bg-surface">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.name + i} delay={(i % 2) * 100}>
              <article className="card-lift bg-card border border-border rounded-xl overflow-hidden grid grid-cols-2 h-full min-h-[280px]">
                <div className="img-zoom">
                  <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover block" />
                </div>
                <div className="p-6 flex flex-col">
                  <span className="text-xs text-electric font-semibold uppercase tracking-wider">{p.cat}</span>
                  <h3 className="text-xl font-bold mt-1 mb-4">{p.name}</h3>
                  <ul className="space-y-2 mb-5 flex-1">
                    {p.specs.map((s) => (
                      <li key={s.t} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <s.i className="w-4 h-4 text-electric" /> {s.t}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-electric">
                    Request Datasheet <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
