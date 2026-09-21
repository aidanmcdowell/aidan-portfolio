import React from 'react';
import { Users, Download, Activity, Zap } from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
  context: string;
  icon: React.ReactNode;
}

const metrics: MetricItem[] = [
  {
    value: '5M+',
    label: 'Monthly Active Users',
    context: 'TheBypasser Edge Architecture',
    icon: <Users className="w-4 h-4 text-cyan-400" />,
  },
  {
    value: '2M+',
    label: 'Global Downloads',
    context: 'Yoink Dynamic Runtime Utility',
    icon: <Download className="w-4 h-4 text-emerald-400" />,
  },
  {
    value: '100%',
    label: 'Production Uptime',
    context: 'Arrow Cloud Infrastructure (AWS)',
    icon: <Activity className="w-4 h-4 text-emerald-400" />,
  },
  {
    value: '40%',
    label: 'Release Cycle Reduction',
    context: 'Automated CI/CD Deployment Gates',
    icon: <Zap className="w-4 h-4 text-amber-400" />,
  },
];

export const MetricsBar: React.FC = () => {
  return (
    <section className="relative z-10 -mt-4 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl shadow-2xl shadow-black/60">
          {metrics.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-3 sm:p-4 rounded-xl transition-colors hover:bg-zinc-850/50 ${
                idx !== metrics.length - 1 ? 'md:border-r md:border-zinc-800/60' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                {item.icon}
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
                  {item.value}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                {item.label}
              </span>
              <span className="text-[11px] text-zinc-500 font-mono mt-0.5 truncate">
                {item.context}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
