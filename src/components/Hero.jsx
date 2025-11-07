import { motion } from "framer-motion";
import { ArrowRight, Play, Rocket } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient overlays for cinematic vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute -inset-x-20 -top-40 h-80 rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/20 via-sky-500/10 to-transparent blur-3xl" />

      {/* Navbar */}
      <div className="sticky top-0 z-20">
        <nav className="mx-auto mt-4 flex w-[92%] items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md md:px-6">
          <div className="flex items-center gap-2 text-white">
            <Rocket className="h-5 w-5 text-sky-400" />
            <span className="font-semibold tracking-tight">Social House</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-sky-400"
          >
            Book a Call
          </a>
        </nav>
      </div>

      {/* Hero copy */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-balance bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl"
        >
          We Make Brands Go Viral — Creatively & Strategically.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-pretty text-base text-white/80 md:text-lg"
        >
          Social House blends creativity, data, and AI to turn your brand into a digital powerhouse.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-semibold text-black shadow-[0_0_40px_rgba(56,189,248,0.35)] transition hover:bg-sky-400"
          >
            Book a Free Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Play className="h-4 w-4" /> See Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
