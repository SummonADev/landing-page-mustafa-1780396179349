import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ backgroundColor: '#0f0f1a' }}>
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[300px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(ellipse, #6C63FF, #FF6584, transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="glass rounded-3xl p-12 md:p-16 border"
          style={{
            borderColor: 'rgba(108,99,255,0.3)',
            background: 'linear-gradient(145deg, rgba(108,99,255,0.1), rgba(255,101,132,0.05))',
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="text-sm text-gray-300">No credit card required</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Ready to build
            <br />
            <span className="gradient-text">something great?</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Join thousands of teams already shipping faster with Luminary. Start free, upgrade whenever you're ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #a89cff)' }}
            >
              Start for free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-300 text-lg glass hover:text-white transition-all duration-200 hover:scale-105"
            >
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
