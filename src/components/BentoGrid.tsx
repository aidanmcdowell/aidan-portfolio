import React from 'react';
import { ExternalLink, Lock } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  badgeHighlight?: string;
  metricsBadge?: string;
  description: string;
  tags: string[];
  link?: string;
  proprietary?: boolean;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Menutrition',
    category: 'Multimodal Vision AI & Nutrition Engine',
    badgeHighlight: 'Multimodal Vision AI',
    metricsBadge: 'Gemini & Groq Vision OCR',
    description:
      'Automated asynchronous OCR data extraction pipeline leveraging Google Gemini and Groq Vision APIs to parse physical menu photography into verified JSON nutritional datasets. Built with React, TypeScript, and Vercel serverless architecture, delivering instantaneous client-side calculations with zero perceived latency.',
    tags: ['React', 'TypeScript', 'Vision APIs', 'Tailwind CSS', 'Vercel Serverless', 'Supabase'],
    proprietary: true,
    featured: true,
  },
  {
    title: 'Popcorn Pirate',
    category: 'Distributed Media Streaming',
    badgeHighlight: 'Cloudflare Edge Caching',
    metricsBadge: 'Origin Shield Architecture',
    description:
      'Media indexing and event streaming platform handling concurrent high-bandwidth playback via Cloudflare CDN caching and origin shields, ensuring resilient video delivery across global nodes.',
    tags: ['React', 'Supabase', 'Cloudflare CDN', 'Video Streaming', 'HLS'],
    proprietary: true,
  },
  {
    title: 'TheBypasser',
    category: 'High-Throughput Edge Infrastructure',
    badgeHighlight: '5M+ Monthly Active Users',
    metricsBadge: 'AWS Edge Architecture',
    description:
      'Scaled an open-access web utility stripping multi-layer ad-wall redirects and forced interaction scripts under massive traffic spikes exceeding 5M+ monthly users. Directed a 5-developer engineering team, reverse-engineered upstream anti-scraping defenses, and deployed real-time DOM parser patches within hours of upstream changes.',
    tags: ['AWS', 'Edge Caching', 'DOM Reverse-Engineering', 'Node.js', 'High-Throughput'],
    proprietary: true,
  },
  {
    title: 'Pike Status',
    category: 'Autonomous State Monitoring',
    badgeHighlight: 'Real-Time Layout Watcher',
    metricsBadge: 'Sub-Second Alerts',
    description:
      'Automated web monitoring utility tracking real-time layout and state mutations to dispatch location-based webhook alerts with zero false-positives during high-demand release windows.',
    tags: ['DOM Parsing', 'Webhooks', 'State Monitoring', 'Node.js', 'Automation'],
    link: 'https://pikestatus.pages.dev/',
  },
  {
    title: 'Yoink Executor',
    category: 'Low-Level Systems & Runtime Injection',
    badgeHighlight: '2M+ Global Downloads',
    metricsBadge: 'C++ & C# Native',
    description:
      'Engineered a high-performance desktop execution utility in C++ and C# for dynamic script injection and game runtime modification. Reverse-engineered runtime memory structures and dynamic link libraries (DLLs), releasing weekly compatibility patches.',
    tags: ['C++', 'C#', 'DLL Injection', 'Reverse Engineering', 'Memory Structures'],
    proprietary: true,
  },
];

export const BentoGrid: React.FC = () => {
  return (
    <section id="systems" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              PORTFOLIO ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Systems &amp; Scale
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md mt-3 sm:mt-0">
            Selected engineering highlights spanning distributed edge utilities, applied multimodal AI, and high-concurrency platforms.
          </p>
        </div>

        {/* Bento Grid Layout: 5 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const isWide = project.featured;

            return (
              <div
                key={idx}
                className={`group relative rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 ${
                  isWide 
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-zinc-900/70 via-zinc-900/40 to-zinc-950/90' 
                    : 'col-span-1'
                }`}
              >
                {/* Ambient Card Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Card Meta / Top Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.badgeHighlight && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                          {project.badgeHighlight}
                        </span>
                      )}
                      {project.metricsBadge && (
                        <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                          {project.metricsBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Action Links */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 transition-colors"
                          aria-label={`Visit ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <span 
                          className="p-1.5 rounded-lg text-zinc-500 bg-zinc-800/40 border border-zinc-800 flex items-center gap-1 text-[11px] font-mono"
                          title="Proprietary Source / Enterprise Architecture"
                        >
                          <Lock className="w-3.5 h-3.5 text-zinc-500" />
                          <span className="hidden sm:inline">Proprietary</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags Bottom Strip */}
                <div className="pt-4 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                    >
                      <span>Explore Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
