import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface Position {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
  tech: string[];
}

const positions: Position[] = [
  {
    company: 'TruLuv',
    role: 'Lead Software Engineer',
    period: 'Dec 2025 – Present',
    location: 'Remote',
    current: true,
    highlights: [
      'Direct core web application architecture using React, TypeScript, and modern state management, optimizing DOM rendering cycles and eliminating client-side latency across core user workflows.',
      'Engineer RESTful API endpoints and integrate third-party services, standardizing JSON payload serialization, request validation, and backend error handling to cut response latency.',
      'Conduct systematic codebase refactoring across legacy repositories, resolving architectural technical debt, hardening edge-case handling, and increasing unit test coverage across critical user paths.',
    ],
    tech: ['React', 'TypeScript', 'State Management', 'REST APIs', 'Codebase Refactoring'],
  },
  {
    company: 'GALLI Media',
    role: 'Technical Project Manager',
    period: 'Oct 2025 – Dec 2025',
    location: 'Remote — Los Angeles, CA',
    highlights: [
      'Directed technical roadmaps, architectural requirements, and delivery milestones for media technology initiatives, running structured bi-weekly engineering sprints.',
      'Established standardized backlog grooming, automated QA testing workflows, and deployment gate checks to eliminate release blockers and guarantee predictable feature delivery.',
    ],
    tech: ['Agile Sprints', 'Technical Roadmaps', 'Automated QA', 'Gate Checks', 'Release Management'],
  },
  {
    company: 'Arrow',
    role: 'DevOps Engineer',
    period: 'Aug 2024 – May 2025',
    location: 'Remote',
    highlights: [
      'Architected and maintained automated CI/CD deployment pipelines in GitHub Actions, implementing automated test suites, linting gates, and multi-stage container builds to reduce release cycles by 40%.',
      'Provisioned and monitored scalable AWS cloud infrastructure (EC2, S3, CloudWatch) with automated health checks, maintaining 100% production uptime across production and staging environments.',
      'Collaborated with engineering teams to diagnose deployment bottlenecks, establish isolated staging environments, and audit cloud resource allocations to reduce infrastructure overhead.',
    ],
    tech: ['AWS (EC2, S3, CloudWatch)', 'GitHub Actions', 'Docker', 'Multi-Stage Builds', 'CI/CD'],
  },
  {
    company: 'Now Mobile Ordering',
    role: 'SEO Engineering Intern',
    period: 'Aug 2024 – Jan 2025',
    location: 'Remote',
    highlights: [
      'Audited search indexing, site architecture, and organic user traffic flows using Google Search Console and SE Ranking to pinpoint and resolve conversion bottlenecks.',
      'Optimized frontend asset delivery and Core Web Vitals (LCP, FID, CLS), accelerating page load speeds to drive double-digit conversion gains.',
      'Engineered dynamic JSON structured data schemas across landing pages and conducted controlled A/B split tests to enhance search visibility and keyword ranking.',
    ],
    tech: ['Core Web Vitals', 'JSON-LD Schemas', 'A/B Testing', 'Google Search Console', 'Asset Optimization'],
  },
  {
    company: 'National Youth Adoption Foundation',
    role: 'Web Developer Intern / Tech Lead',
    period: 'Jan 2024 – Jun 2024',
    location: 'Remote — Chicago, IL',
    highlights: [
      'Led the full-stack redesign and deployment of the organization’s primary web platform, implementing responsive UI component hierarchies and robust security practices.',
      'Managed technical onboarding and daily code reviews for new interns, enforcing Git branching workflows, code quality guidelines, and documentation standards.',
    ],
    tech: ['Web Platform Redesign', 'UI Components', 'Git Branching Standards', 'Code Reviews', 'Mentorship'],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-4 border-b border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              TRACK RECORD
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Career Experience
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md mt-3 sm:mt-0">
            Progressive engineering leadership delivering architecture stability, cloud automation, and high-velocity product shipping.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-5 before:w-0.5 before:bg-zinc-800/80 before:h-full">
          {positions.map((pos, idx) => (
            <div key={idx} className="relative pl-9 md:pl-14">
              
              {/* Timeline Indicator Dot */}
              <div className={`absolute left-1.5 md:left-3.5 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all ${
                pos.current 
                  ? 'bg-emerald-500 border-[#090a0f] ring-4 ring-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.5)]' 
                  : 'bg-zinc-800 border-[#090a0f] ring-2 ring-zinc-700/50'
              }`} />

              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200">
                
                {/* Position Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {pos.role}
                      </h3>
                      <span className="text-zinc-600 font-mono">•</span>
                      <span className="text-base sm:text-lg font-semibold text-emerald-400">
                        {pos.company}
                      </span>
                      {pos.current && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {pos.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {pos.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6 text-sm text-zinc-300">
                  {pos.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400/80 shrink-0 mt-1" />
                      <span className="text-zinc-400">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                  {pos.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
