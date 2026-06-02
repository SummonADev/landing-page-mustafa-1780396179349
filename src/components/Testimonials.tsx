import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Nexus Labs',
    avatar: 'SC',
    content: "Luminary cut our deployment time by 80%. What used to take our DevOps team half a day is now fully automated. I can't imagine going back.",
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'Lead Engineer',
    company: 'Orbit AI',
    avatar: 'MW',
    content: 'The developer experience is second to none. Preview environments on every PR, instant rollbacks, and the analytics dashboard is genuinely beautiful.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'VP of Product',
    company: 'Stackr',
    avatar: 'PP',
    content: "Our entire team — engineers, designers, PMs — all work inside Luminary now. It's removed so much friction from our workflow.",
    rating: 5,
  },
  {
    name: 'James Torres',
    role: 'Founder',
    company: 'Flowstate',
    avatar: 'JT',
    content: 'As a solo founder, Luminary gives me the infrastructure of a 20-person team. The pricing is insane value for what you get.',
    rating: 5,
  },
  {
    name: 'Lena Müller',
    role: 'Engineering Manager',
    company: 'Clarico',
    avatar: 'LM',
    content: 'We evaluated 6 platforms before choosing Luminary. The edge network performance and uptime have been flawless over 18 months.',
    rating: 5,
  },
  {
    name: 'Alex Kim',
    role: 'Full Stack Dev',
    company: 'Wavefront',
    avatar: 'AK',
    content: "The CLI is a joy to use and the GitHub integration just works out of the box. Luminary gets out of your way and lets you build.",
    rating: 5,
  },
];

const avatarColors = [
  '#6C63FF', '#FF6584', '#34d399', '#f59e0b', '#a89cff', '#60a5fa'
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28" style={{ backgroundColor: '#0f0f1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand">Testimonials</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-white">
            Loved by teams
            <br />
            <span className="gradient-text">around the world</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            Don't just take our word for it. Here's what builders are saying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="glass rounded-2xl p-7 border border-white/5 card-hover flex flex-col gap-4"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 opacity-20" style={{ color: avatarColors[idx] }} />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{t.content}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: avatarColors[idx] }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role} @ {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
