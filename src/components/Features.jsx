import { Sparkles, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Glassy Aesthetics",
    desc: "Tasteful blur, soft borders, and premium gradients create an immediate wow factor.",
    accent: "from-fuchsia-500 to-cyan-400",
  },
  {
    icon: Shield,
    title: "Production‑Ready",
    desc: "Responsive, accessible, and optimized for performance out of the box.",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Ultra Smooth",
    desc: "Micro‑interactions and silky transitions feel delightful and modern.",
    accent: "from-violet-500 to-fuchsia-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 bg-[#0B0B0F] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built to Impress, Designed to Convert
          </h2>
          <p className="mt-4 text-white/70">
            Every detail is crafted to feel premium—from typography to motion.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="absolute inset-px rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-10 from-white/60 to-transparent" />
              <div className="relative z-10">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-lg shadow-black/30`}>
                  <f.icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-white/70">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
