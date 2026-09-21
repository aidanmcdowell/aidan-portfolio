import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, ArrowUpRight, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'armcdowell59@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-zinc-800/80">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 glow-emerald pointer-events-none -z-10 opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-xl shadow-2xl relative overflow-hidden text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            OPEN FOR DISCUSSIONS
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Let&apos;s Build Resilient Systems Together
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Interested in scaling distributed web utilities, hardening cloud infrastructure, or consulting on high-load software architecture? Reach out directly.
          </p>

          {/* Email Copy Card */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-10">
            <div className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-zinc-950/90 border border-zinc-800 text-sm font-mono text-zinc-300">
              <div className="flex items-center gap-2.5 truncate">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="ml-3 p-1.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-750 transition-colors shrink-0 flex items-center gap-1.5 text-xs font-sans font-medium"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-semibold text-black bg-zinc-100 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <span>Compose</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Social Channels Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-zinc-800/80 text-xs sm:text-sm">
            <a
              href="https://github.com/aidanmcdowell"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-850/60 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href="https://linkedin.com/in/aidan-mcdowell-826b9722a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-850/60 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
            >
              <Linkedin className="w-4 h-4 text-zinc-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-850/40 border border-zinc-800/60 text-zinc-400">
              <MapPin className="w-4 h-4 text-emerald-400/80" />
              <span>San Diego, CA (Remote Ready)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
