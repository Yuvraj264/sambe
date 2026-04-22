import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Linkedin } from "lucide-react";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";
import t5 from "@/assets/team-5.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Sambe Electricals" },
      { name: "description", content: "Meet the engineers and leaders behind Sambe Electricals." },
      { property: "og:title", content: "Our Team — Sambe Electricals" },
      { property: "og:description", content: "The people powering our work." },
    ],
  }),
  component: Team,
});

const members = [
  { img: t1, name: "Rajesh Sambe", role: "Founder & Managing Director", bio: "Two decades of building industrial power solutions. Mechanical engineer, IIT Bombay alum." },
  { img: t2, name: "Anil Kulkarni", role: "General Manager", bio: "Leads operations and growth strategy. Former plant head at a tier-1 OEM." },
  { img: t3, name: "Priya Deshmukh", role: "Operations Head", bio: "Runs end-to-end production with a focus on lean manufacturing and quality." },
  { img: t4, name: "Vikram Iyer", role: "Finance Head", bio: "CA with 15+ years across manufacturing finance and capital planning." },
  { img: t5, name: "Mahesh Patil", role: "Plant Supervisor", bio: "Ground-floor expertise across assembly, testing and dispatch operations." },
];

function Team() {
  return (
    <>
      <section className="relative h-[45vh] min-h-[340px] flex items-center bg-primary text-primary-foreground pt-16">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 50%, var(--electric), transparent 60%)" }} />
        <div className="relative container-x animate-fade-up">
          <span className="text-electric font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 max-w-3xl">The people powering our work.</h1>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 90}>
              <article className="group bg-card border border-border rounded-xl overflow-hidden card-lift">
                <div className="relative img-zoom h-80 overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" width={800} height={960} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                    <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-electric flex items-center justify-center text-electric-foreground">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <p className="text-electric text-sm font-semibold mb-3">{m.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
