import { motion } from "framer-motion";
import { TrendingUp, PlayCircle, BarChart3 } from "lucide-react";

const cases = [
  {
    title: "230% Engagement Growth in 30 Days",
    brand: "Fitness Brand",
    metric: "+230%",
    stat: "Engagement",
    gradient: "from-sky-500/20 to-indigo-500/20",
  },
  {
    title: "5x ROAS from Meta Ads",
    brand: "Local Retail Brand",
    metric: "5x",
    stat: "ROAS",
    gradient: "from-fuchsia-500/20 to-purple-500/20",
  },
  {
    title: "1M+ Views from Social Reels",
    brand: "Lifestyle Brand",
    metric: "1M+",
    stat: "Views",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Results that speak</h2>
            <p className="mt-2 max-w-xl text-white/70">
              We blend creativity, data, and AI to drive measurable growth.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10 md:inline-block"
          >
            Book a Strategy Call
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${c.gradient} p-5`}
            >
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-black/40 p-2">
                  <TrendingUp className="h-5 w-5 text-sky-400" />
                </div>
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-white/70">
                  {c.brand}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-4xl font-extrabold tracking-tight text-white">
                    {c.metric}
                  </div>
                  <div className="text-sm text-white/60">{c.stat}</div>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs text-white/90 hover:bg-black/60">
                  <PlayCircle className="h-4 w-4" />
                  View Breakdown
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini social proof strip */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-4">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-sky-400" />
            <div>
              <div className="text-sm font-semibold">100+ Campaigns</div>
              <div className="text-xs text-white/60">launched</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-sky-400" />
            <div>
              <div className="text-sm font-semibold">4.8x Avg ROAS</div>
              <div className="text-xs text-white/60">across verticals</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-sky-400" />
            <div>
              <div className="text-sm font-semibold">3M+ Organic Views</div>
              <div className="text-xs text-white/60">generated</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-sky-400" />
            <div>
              <div className="text-sm font-semibold">24/7 AI Systems</div>
              <div className="text-xs text-white/60">running in realtime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
