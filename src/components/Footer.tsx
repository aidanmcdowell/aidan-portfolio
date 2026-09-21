import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Cloud, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-800/80 bg-[#07080c] text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2 text-zinc-300 font-semibold">
            <span className="font-mono text-emerald-400 font-bold">&lt;/&gt;</span>
            <span>Aidan McDowell</span>
          </div>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <p>© {new Date().getFullYear()} Aidan McDowell. All rights reserved.</p>
        </div>

        {/* Center: Tech Badge */}
        <div className="flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
          <span className="flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            TypeScript &amp; Tailwind CSS
          </span>
          <span className="text-zinc-700">•</span>
          <span className="flex items-center gap-1 text-emerald-400/90">
            <Cloud className="w-3.5 h-3.5" />
            Deployed on Cloudflare Pages
          </span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-1.5 font-mono text-[11px]"
          aria-label="Back to Top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
