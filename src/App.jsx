import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white selection:bg-sky-500/40 selection:text-white">
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />

      {/* Footer & CTA */}
      <footer className="border-t border-white/10 bg-black/80 py-12">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="mb-8 rounded-2xl bg-gradient-to-br from-sky-500/10 to-indigo-500/10 p-8 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Ready to Take Your Brand to the Next Level?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/70">
              We don’t just grow brands — we build movements. Let’s make your brand the next big story online.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 font-semibold text-black shadow-[0_0_40px_rgba(56,189,248,0.35)] transition hover:bg-sky-400"
            >
              Book Your Free Strategy Call
            </a>
          </div>

          <div className="grid gap-6 text-sm md:grid-cols-3">
            <div>
              <div className="font-semibold">Social House Marketing Agency</div>
              <div className="mt-2 text-white/70">
                Built with creativity, powered by data, fueled by Social House.
              </div>
            </div>
            <div>
              <div className="font-semibold">Contact</div>
              <div className="mt-2 text-white/70">Email: <a className="text-sky-400" href="mailto:hello@socialhouse.agency">hello@socialhouse.agency</a></div>
              <div className="text-white/70">Phone: <a className="text-sky-400" href="tel:+919876543210">+91 98765 43210</a></div>
            </div>
            <div>
              <div className="font-semibold">Social</div>
              <div className="mt-2 flex gap-4 text-white/70">
                <a className="hover:text-white" href="#" aria-label="Instagram">Instagram</a>
                <a className="hover:text-white" href="#" aria-label="LinkedIn">LinkedIn</a>
                <a className="hover:text-white" href="#" aria-label="YouTube">YouTube</a>
                <a className="hover:text-white" href="#" aria-label="Discord">Discord</a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Social House. All rights reserved.
          </div>
        </div>

        {/* Floating CTA */}
        <a
          href="#contact"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-sky-500 px-5 py-3 font-semibold text-black shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
        >
          Book a Call
        </a>

        {/* WhatsApp bubble */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/10"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" /> Chat on WhatsApp
        </a>
      </footer>
    </div>
  );
}

export default App;
