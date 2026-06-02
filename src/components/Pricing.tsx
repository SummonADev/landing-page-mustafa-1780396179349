import { Check, Zap } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import type { PricingPlan } from '@/types';

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '0',
    period: 'forever',
    description: 'Perfect for solo developers and side projects.',
    features: [
      '3 projects',
      '1 team member',
      '5 GB storage',
      'Community support',
      'Basic analytics',
      '1 environment per project',
    ],
    highlighted: false,
    cta: 'Get started free',
  },
  {
    name: 'Pro',
    price: '29',
    period: 'per month',
    description: 'For growing teams that need more power and flexibility.',
    features: [
      'Unlimited projects',
      'Up to 15 team members',
      '100 GB storage',
      'Priority support',
      'Advanced analytics',
      'Unlimited environments',
      'Custom domains',
      'Auto-scaling',
    ],
    highlighted: true,
    cta: 'Start Pro trial',
  },
  {
    name: 'Enterprise',
    price: '99',
    period: 'per month',
    description: 'For large organizations that require enterprise-grade features.',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      '1 TB storage',
      'Dedicated support',
      'SSO & SAML',
      'SLA guarantee',
      'On-premise option',
      'Custom contracts',
    ],
    highlighted: false,
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  function getPrice(price: string): string {
    if (price === '0') return '0';
    const num = parseInt(price, 10);
    if (annual) return String(Math.round(num * 0.8));
    return price;
  }

  return (
    <section id="pricing" className="py-28" style={{ backgroundColor: '#16162a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand">Pricing</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-white">
            Simple, transparent
            <br />
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            No hidden fees. Cancel anytime. Start free, upgrade when you're ready.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 glass rounded-full px-2 py-2">
            <button
              onClick={() => setAnnual(false)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                !annual ? 'text-white' : 'text-gray-400 hover:text-white'
              )}
              style={!annual ? { background: 'linear-gradient(135deg, #6C63FF, #a89cff)' } : {}}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2',
                annual ? 'text-white' : 'text-gray-400 hover:text-white'
              )}
              style={annual ? { background: 'linear-gradient(135deg, #6C63FF, #a89cff)' } : {}}
            >
              Annual
              <span className="text-xs px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: '#FF6584' }}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'rounded-2xl p-8 border transition-all duration-300',
                plan.highlighted
                  ? 'border-brand relative'
                  : 'glass border-white/5 card-hover'
              )}
              style={plan.highlighted ? {
                background: 'linear-gradient(145deg, rgba(108,99,255,0.15), rgba(168,156,255,0.08))',
                boxShadow: '0 0 40px rgba(108,99,255,0.25), 0 20px 60px rgba(0,0,0,0.4)',
              } : {}}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #6C63FF, #FF6584)' }}>
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-white">${getPrice(plan.price)}</span>
                  <span className="text-gray-400 text-sm pb-2">/{plan.period}</span>
                </div>
                {annual && plan.price !== '0' && (
                  <p className="text-xs text-green-400 mt-1">Billed annually — you save 20%</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: plan.highlighted ? 'rgba(108,99,255,0.3)' : 'rgba(255,255,255,0.06)' }}
                    >
                      <Check className="w-3 h-3" style={{ color: plan.highlighted ? '#a89cff' : '#6b7280' }} />
                    </div>
                    <span className="text-sm text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={clsx(
                  'block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105',
                  plan.highlighted
                    ? 'text-white hover:opacity-90'
                    : 'text-gray-300 hover:text-white glass border border-white/10'
                )}
                style={plan.highlighted ? { background: 'linear-gradient(135deg, #6C63FF, #a89cff)' } : {}}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
