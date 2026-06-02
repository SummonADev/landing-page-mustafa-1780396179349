import type { Stat } from '@/types';

const stats: Stat[] = [
  { value: '99.9', suffix: '%', label: 'Uptime SLA' },
  { value: '4,800', suffix: '+', label: 'Teams worldwide' },
  { value: '2M', suffix: '+', label: 'Deployments monthly' },
  { value: '<50', suffix: 'ms', label: 'Average latency' },
];

export default function Stats() {
  return (
    <section className="py-16 border-y" style={{ borderColor: 'rgba(255,255,255,0.06)', backgroundColor: 'rgba(108,99,255,0.04)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl lg:text-5xl font-extrabold gradient-text">
                {stat.value}<span className="text-2xl">{stat.suffix}</span>
              </p>
              <p className="text-gray-400 mt-2 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
