import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava Martinez',
    role: 'CMO, NovaWear',
    quote:
      'Social House elevated our brand with stunning creative and data-backed targeting. Our CAC dropped 32% in the first month.',
  },
  {
    name: 'Liam Thompson',
    role: 'Founder, FlowOps',
    quote:
      'They integrated AI-driven automations across our funnel. Lead response time went from hours to seconds.',
  },
  {
    name: 'Maya Chen',
    role: 'Head of Growth, Klaro',
    quote:
      'From strategy to execution, the team shipped fast. We hit our Q3 MRR goal in 6 weeks.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full bg-[#0A0B0F] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">What clients say</h2>
            <p className="mt-2 text-white/70">Proof that creativity + data wins.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/30"
            >
              <div className="mb-4 flex items-center gap-1 text-amber-300">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-300" />
                ))}
              </div>
              <p className="text-white/90">“{t.quote}”</p>
              <div className="mt-6 text-sm text-white/70">
                <span className="font-medium text-white">{t.name}</span> · {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
