import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#07080B] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Start your growth sprint</h2>
          <p className="mt-2 text-white/70">Tell us about your goals. We’ll reply within one business day.</p>
        </div>

        <form action="mailto:hello@socialhouse.agency" method="post" encType="text/plain" className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Your Name" required />
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Business" />
          <input type="email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 md:col-span-2" placeholder="Email" required />
          <textarea className="min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 md:col-span-2" placeholder="What would you like to achieve?" />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium shadow-lg shadow-blue-500/20 transition hover:brightness-110 md:col-span-2">
            Send Message <Send className="h-4 w-4" />
          </button>
        </form>

        <a href="https://wa.me/919876543210" className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
          <MessageCircle className="h-4 w-4" /> Or chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
