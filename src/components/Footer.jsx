import React from 'react';
import { Mail, Phone, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0B0F] py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build your growth engine</h3>
            <p className="mt-2 max-w-md text-white/70">Book a quick strategy call. We’ll map your highest-leverage moves and build a path to scale.</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-medium shadow-lg shadow-blue-500/20 transition hover:brightness-110">
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="mb-3 text-sm font-semibold text-white/70">Contact</div>
              <a href="mailto:hello@socialhouse.agency" className="mb-2 flex items-center gap-2 text-white/80 hover:text-white"><Mail className="h-4 w-4" /> hello@socialhouse.agency</a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-white/80 hover:text-white"><Phone className="h-4 w-4" /> +91 98765 43210</a>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold text-white/70">Social</div>
              <a href="#" className="mb-2 flex items-center gap-2 text-white/80 hover:text-white"><Instagram className="h-4 w-4" /> Instagram</a>
              <a href="#" className="flex items-center gap-2 text-white/80 hover:text-white"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">© {new Date().getFullYear()} Social House. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
