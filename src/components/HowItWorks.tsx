import { MousePointer2, Rocket, Users, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <MousePointer2 className="w-6 h-6" />,
    title: 'Create your workspace',
    description: 'Sign up and set up your team workspace in under 2 minutes. No credit card required to get started.',
    color: '#6C63FF',
  },
  {
    number: '02',
    icon: <Users className="w-6 h-6" />,
    title: 'Invite your team',
    description: 'Bring everyone on board with a single link. Set roles and permissions with granular controls.',
    color: '#a89cff',
  },
  {
    number: '03',
    icon: <Rocket className="w-6 h-6" />,
    title: 'Connect & deploy',
    description: 'Link your GitHub, GitLab, or Bitbucket repo. Your first deploy happens automatically on push.',
    color: '#FF6584',
  },
  {
    number: '04',
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Ship with confidence',
    description: 'Monitor, iterate, and improve. Our platform gives you all the data you need to build better.',
    color: '#34d399',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28" style={{ backgroundColor: '#16162a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand">How it works</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Up and running
            <br />
            <span className="gradient-text">in minutes</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            Getting started with Luminary is dead simple. Follow these four steps and you're live.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%-8rem)] h-0.5 opacity-20"
            style={{ background: 'linear-gradient(90deg, transparent, #6C63FF, #FF6584, transparent)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center flex flex-col items-center">
                {/* Step number circle */}
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 z-10 transition-transform duration-300 hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}33, ${step.color}11)`,
                    border: `1.5px solid ${step.color}55`,
                    boxShadow: `0 0 20px ${step.color}22`,
                    color: step.color,
                  }}
                >
                  {step.icon}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white"
                    style={{ background: step.color }}
                  >
                    {step.number.replace('0', '')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
