import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const posts = [
  {
    title: 'Creative that Converts: 7 Ad Concepts for 2025',
    excerpt:
      'Fresh, swipe-stopping creative formulas built on behavioral insights and AI-assisted iteration.',
    tag: 'Creativity',
    read: '6 min read',
  },
  {
    title: 'The AI Growth Stack: Automations that Scale',
    excerpt:
      'From lead routing to campaign optimization—how to deploy an AI-first marketing operation.',
    tag: 'Automation',
    read: '8 min read',
  },
  {
    title: 'Attribution in a Post-Tracker World',
    excerpt:
      'A pragmatic approach to signal loss, MMM, and triangulating truth with blended metrics.',
    tag: 'Data',
    read: '9 min read',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="relative w-full bg-[#07080B] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Insights & Playbooks</h2>
            <p className="mt-2 text-white/70">Sharp, actionable guidance from the growth floor.</p>
          </div>
          <a href="#" className="hidden items-center gap-2 text-sm text-white/80 hover:text-white md:flex">
            View all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <Sparkles className="h-3.5 w-3.5" /> {p.tag}
              </div>
              <h3 className="text-xl font-semibold group-hover:text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/80">{p.excerpt}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 group-hover:text-white">
                {p.read}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/10 blur-2xl transition duration-300 group-hover:from-blue-600/30" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
