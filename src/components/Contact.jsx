import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Inquiry - Social House");
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:hello@socialhouse.agency?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-4xl">Let's build your growth engine</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            We reply within 2 hours — yes, really.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-white/70">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-sky-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/70">Business Name</label>
                  <input
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-sky-500"
                    placeholder="Acme Co."
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-white/70">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-sky-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/70">Service Interested In</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-sky-500"
                  >
                    <option value="" className="bg-black">
                      Select a service
                    </option>
                    <option value="smm" className="bg-black">
                      Social Media Marketing
                    </option>
                    <option value="paid" className="bg-black">
                      Paid Advertising (Meta/Google)
                    </option>
                    <option value="content" className="bg-black">
                      Content Creation
                    </option>
                    <option value="ai" className="bg-black">
                      AI Automation Systems
                    </option>
                    <option value="branding" className="bg-black">
                      Branding & Design
                    </option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-sm text-white/70">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-sky-500"
                  placeholder="Tell us about your goals…"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 font-semibold text-black shadow-[0_0_40px_rgba(56,189,248,0.35)] transition hover:bg-sky-400"
                >
                  <Send className="h-4 w-4" /> Book a Free Strategy Call
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-white backdrop-blur hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <div className="text-xs text-white/60">We reply within 2 hours — yes, really.</div>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 md:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 p-6">
              <h4 className="font-semibold">Prefer to talk?</h4>
              <p className="mt-1 text-sm text-white/70">
                Call us at <a href="tel:+919876543210" className="text-sky-400">+91 98765 43210</a> or drop a line at
                <a href="mailto:hello@socialhouse.agency" className="text-sky-400"> hello@socialhouse.agency</a>
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h4 className="font-semibold">Newsletter</h4>
              <p className="mt-1 text-sm text-white/70">
                Join the Social House Insider Newsletter.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-sky-500"
                />
                <button className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 p-6">
              <h4 className="font-semibold">Free Brand Audit</h4>
              <p className="mt-1 text-sm text-white/70">
                Get a personalized audit with actionable wins in 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
