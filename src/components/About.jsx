import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold md:text-4xl">The House That Builds Brands.</h2>
            <p className="mt-4 text-white/80">
              Social House was built on one belief — brands don’t need more ads; they need attention that matters. We’re a team of strategists and creators obsessed with helping brands go viral, grow fast, and stay relevant.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Quote className="h-5 w-5 text-sky-400" />
              <p className="mt-3 text-lg italic text-white/90">
                "We don’t guess. We test, iterate, and scale what works — with the precision of data and the soul of creativity."
              </p>
              <div className="mt-3 text-sm text-white/70">— Aryan Mehta, Founder & CEO</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {[
              { k: "Campaigns Launched", v: "100+" },
              { k: "Average ROAS", v: "4.8x" },
              { k: "Organic Views", v: "3M+" },
              { k: "Happy Clients", v: "20+" },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 p-6"
              >
                <div className="text-3xl font-extrabold text-white">{item.v}</div>
                <div className="text-sm text-white/70">{item.k}</div>
              </div>
            ))}

            <div className="col-span-full rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 p-6">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Sparkles className="h-4 w-4 text-fuchsia-400" /> Where human creativity meets machine precision
              </div>
              <p className="mt-2 text-white/80">
                We use AI to analyze engagement, generate content, and even reply to leads — so your brand never misses a chance to connect.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
