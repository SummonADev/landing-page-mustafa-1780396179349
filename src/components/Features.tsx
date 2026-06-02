import { Zap, Shield, Layers, Globe, GitBranch, BarChart3, Bell, Code2 } from 'lucide-react';
import clsx from 'clsx';

type FeatureCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
  large?: boolean;
};

const features: FeatureCard[] = [
  {
    icon: <Zap />,
    title: 'Blazing Fast Deploys',
    description: 'Ship code from commit to production in under 60 seconds. Our edge-optimized pipeline ensures zero-downtime deployments every single time.',
    accent: '#6C63FF',
    large: true,
  },
  {
    icon: <Shield />,
    title: 'Enterprise Security',
    description: 'SOC2 Type II certified with end-to-end encryption, audit logs, and fine-grained access control.',
    accent: '#34d399',
  },
  {
    icon: <Layers />,
    title: 'Unified Workspace',
    description: 'Code, docs, tasks, and deployments — all in one beautifully designed workspace.',
    accent: '#f59e0b',
  },
  {
    icon: <Globe />,
    title: 'Global Edge Network',
    description: 'Deploy to 60+ regions worldwide. Your users always get served from the nearest node.',
    accent: '#FF6584',
    large: true,
  },
  {
    icon: <GitBranch />,
    title: 'Smart Branching',
    description: 'Automatic preview environments for every branch. Review changes in context before merging.',
    accent: '#a89cff',
  },
  {
    icon: <BarChart3 />,
    title: 'Real-time Analytics',
    description: 'Deep insights into performance, errors, and user behavior. Act on data, not guesses.',
    accent: '#6C63FF',
  },
  {
    icon: <Bell />,
    title: 'Smart Alerts',
    description: 'AI-powered anomaly detection that notifies you before your users notice a problem.',
    accent: '#f59e0b',
  },
  {
    icon: <Code2 />,
    title: 'Developer First',
    description: 'Powerful CLI, GitHub integration, and a rich API. Works exactly how you expect.',
    accent: '#34d399',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28" style={{ backgroundColor: '#0f0f1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand">Features</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Everything your team needs
            <br />
            <span className="gradient-text">in one place</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            Stop juggling between tools. Luminary brings your entire workflow under one roof.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={clsx(
                'glass rounded-2xl p-7 card-hover border border-white/5',
                feature.large && idx < 3 ? 'lg:col-span-1' : ''
              )}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${feature.accent}22` }}
              >
                <span style={{ color: feature.accent }}>
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
