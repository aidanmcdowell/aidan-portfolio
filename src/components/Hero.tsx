import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, ShieldCheck, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 glow-cyan pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 w-80 h-80 glow-emerald pointer-events-none -z-10 opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-start max-w-3xl">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-6 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Select Opportunities</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-zinc-500" />
              San Diego, CA &amp; Remote
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Software Engineer <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500 bg-clip-text text-transparent">
              &amp; System Applications Architect
            </span>
          </h1>

          {/* High-Impact Value Proposition */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl font-normal">
            Architecting resilient high-throughput web platforms, automated cloud infrastructure, and low-level runtime systems serving millions of active users worldwide.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#systems"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-black bg-zinc-100 hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] transition-all duration-200"
            >
              <span>View Featured Systems</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/Aidan McDowell Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-zinc-300 bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 hover:text-white hover:bg-zinc-800/80 transition-all duration-200"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Hub Links */}
          <div className="flex items-center gap-5 pt-4 border-t border-zinc-800/80 w-full text-zinc-400 text-sm">
            <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Connect:</span>
            <a
              href="https://github.com/aidanmcdowell"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/aidan-mcdowell-826b9722a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:armcdowell59@gmail.com"
              className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-medium">armcdowell59@gmail.com</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
