import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0B0F] text-white">
      {/* Hero with Spline 3D animation and layered gradients */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Testimonials / Social Proof */}
      <Testimonials />

      {/* Insights / Blog */}
      <Blog />

      {/* Floating CTA */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-medium shadow-xl shadow-blue-500/30 backdrop-blur supports-[backdrop-filter]:bg-white/10"
      >
        Book a Call
      </a>
    </div>
  );
}

export default App;
