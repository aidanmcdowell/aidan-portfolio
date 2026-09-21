import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Terminal, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#090a0f]/85 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl shadow-black/40 py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center group-hover:border-emerald-500/60 transition-colors">
            <span className="font-mono text-xs font-semibold text-emerald-400 group-hover:scale-105 transition-transform">&lt;/&gt;</span>
          </div>
          <span className="font-semibold text-sm sm:text-base tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors">
            Aidan McDowell
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#systems" className="hover:text-zinc-100 transition-colors">Systems</a>
          <a href="#stack" className="hover:text-zinc-100 transition-colors">Architecture & Stack</a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">Contact</a>
        </nav>

        {/* Action Button: Resume */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="/Aidan McDowell Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-zinc-850 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d111a]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-zinc-300">
            <a 
              href="#systems" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-emerald-400 transition-colors"
            >
              Systems
            </a>
            <a 
              href="#stack" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-emerald-400 transition-colors"
            >
              Architecture & Stack
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-emerald-400 transition-colors"
            >
              Experience
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="pt-2 border-t border-zinc-800">
            <a 
              href="/Aidan McDowell Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Download Resume (Sept 2026)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
