import React from 'react';
import { motion } from 'framer-motion';
import { Bolt, Target, BarChart3, Workflow } from 'lucide-react';

const services = [
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Paid Social & UGC',
    desc: 'Full-funnel strategy, creative testing sprints, and continuous optimization.'
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Analytics & Attribution',
    desc: 'Blended metrics, MMM direction, and decision frameworks that move the needle.'
  },
  {
    icon: <Bolt className="h-5 w-5" />,
    title: 'AI Creative Systems',
    desc: 'Rapid concepting, versioning, and motion graphics powered by AI tooling.'
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: 'Automation & CRM',
    desc: 'Lead scoring, instant replies, and lifecycle flows that scale reliably.'
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#0B0C12] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Services built for scale</h2>
          <p className="mt-2 text-white/70">From creative to automation, we ship outcomes—not just assets.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/30"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600/80 to-purple-600/80">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
