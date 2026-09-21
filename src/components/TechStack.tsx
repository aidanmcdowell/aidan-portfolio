import React from 'react';
import { Code2, Layout, Server, GitBranch, Sparkles } from 'lucide-react';

interface StackDomain {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

const domains: StackDomain[] = [
  {
    title: 'Languages',
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    description: 'Strong typed & systems-level languages for high-load utilities.',
    skills: [
      'TypeScript',
      'JavaScript',
      'Python',
      'C++',
      'C#',
      'SQL (PostgreSQL / MySQL)',
      'Bash',
      'PowerShell',
    ],
  },
  {
    title: 'Frontend & UI Engineering',
    icon: <Layout className="w-5 h-5 text-cyan-400" />,
    description: 'Component architecture, DOM optimization, and sub-second renders.',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Modern State Management',
      'Responsive Architecture',
      'Core Web Vitals Optimization',
    ],
  },
  {
    title: 'Backend & Cloud Infrastructure',
    icon: <Server className="w-5 h-5 text-indigo-400" />,
    description: 'Distributed services, serverless execution, and scalable storage.',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'GraphQL',
      'Supabase',
      'Vercel Serverless',
      'AWS (EC2, S3, Lambda, CloudWatch)',
      'Docker',
    ],
  },
  {
    title: 'DevOps, Edge & Systems',
    icon: <GitBranch className="w-5 h-5 text-amber-400" />,
    description: 'Automated CI/CD gates, CDN caching shields, and reverse-engineering.',
    skills: [
      'GitHub Actions',
      'Jenkins',
      'Linux / Unix Systems',
      'Cloudflare Edge & CDN',
      'Reverse-Engineering & Memory Analysis',
      'Multi-Stage Container Builds',
    ],
  },
  {
    title: 'Applied AI & Data Pipelines',
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    description: 'Multimodal vision integration, asynchronous OCR, and analytics telemetry.',
    skills: [
      'Vision APIs (Google Gemini, Groq Vision)',
      'OCR Data Pipelines',
      'Asynchronous Event Streams',
      'Mixpanel Telemetry',
      'Google Analytics / Search Console',
    ],
  },
];

export const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-20 relative border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-cyan-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              CORE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Technical Stack &amp; Domains
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md mt-3 sm:mt-0">
            A comprehensive matrix of production languages, cloud infrastructure, and distributed tooling deployed across client and enterprise systems.
          </p>
        </div>

        {/* Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200 flex flex-col justify-between ${
                idx === domains.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-zinc-850 border border-zinc-700/60">
                    {domain.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {domain.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                  {domain.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-200 bg-zinc-800/60 border border-zinc-700/50 hover:border-emerald-500/40 hover:text-white transition-colors"
                    >
                      {skill}
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
