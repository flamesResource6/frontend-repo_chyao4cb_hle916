import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0B0F] text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0B0F]/40 via-[#0A0B0F]/60 to-[#0A0B0F]" />
      <div className="pointer-events-none absolute -inset-x-20 -top-40 h-96 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-blue-500/10 to-transparent blur-3xl" />

      {/* Navbar */}
      <div className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg shadow-purple-500/20">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Social House</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#testimonials" className="text-sm text-white/80 hover:text-white">Testimonials</a>
            <a href="#blog" className="text-sm text-white/80 hover:text-white">Insights</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium shadow-lg shadow-blue-500/20 transition hover:brightness-110"
            >
              Book a Call
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-20 pt-8 md:grid-cols-2 md:pt-16">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Scale with AI-Powered Marketing
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-amber-300 bg-clip-text text-transparent">that looks and converts</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 max-w-xl text-white/80"
          >
            Bold creative. Data-driven growth. Automations that work while you sleep. We help modern brands win the attention game.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Explore Insights
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center"
          >
            {[
              { label: 'Avg. ROAS', value: '4.8x' },
              { label: 'Ad Spend Managed', value: '$12M+' },
              { label: 'Satisfied Clients', value: '120+' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/30">
                <div className="text-xl font-semibold text-white">{stat.value}</div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative card with glass + subtle motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent" />
          <div className="relative">
            <h3 className="mb-2 text-lg font-semibold">AI Voice Agent Aura</h3>
            <p className="mb-4 text-sm text-white/80">A futuristic, minimal animation that embodies our tech-forward creative approach.</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Campaign Automation</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Creative Iterations</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Real-time Insights</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Predictive Targeting</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
