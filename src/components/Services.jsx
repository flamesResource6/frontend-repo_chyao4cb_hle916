import { motion } from "framer-motion";
import { Bot, Sparkles, Camera, Megaphone, BadgeDollarSign, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Build loyal communities and convert followers into fans.",
    accent: "from-sky-500/20 to-indigo-500/20",
  },
  {
    icon: BadgeDollarSign,
    title: "Paid Advertising (Meta & Google)",
    desc: "Data-driven campaigns that deliver measurable ROI.",
    accent: "from-purple-500/20 to-fuchsia-500/20",
  },
  {
    icon: Camera,
    title: "Content Creation",
    desc: "Scroll-stopping reels, thumbnails, and carousels.",
    accent: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    icon: Bot,
    title: "AI Automation Systems",
    desc: "Smart workflows that handle leads and analytics automatically.",
    accent: "from-pink-500/20 to-violet-500/20",
  },
  {
    icon: Paintbrush,
    title: "Branding & Design",
    desc: "Beautiful visual identity that sells and inspires.",
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Sparkles,
    title: "Consulting & Strategy",
    desc: "Roadmaps that align creativity with business outcomes.",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-4xl">Services built for scale</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Every service is engineered to drive attention, conversion, and lifetime value.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${s.accent} p-6`}
            >
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-black/40 p-2">
                  <s.icon className="h-5 w-5 text-sky-400" />
                </div>
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-white/70">
                  Premium
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/90 backdrop-blur transition group-hover:bg-white/10">
                Learn more
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
