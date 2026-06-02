import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import clsx from 'clsx';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 20);
    }, { passive: true });
  }

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center animate-pulse-glow" style={{ background: 'linear-gradient(135deg, #6C63FF, #FF6584)' }}>
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Luminary</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2">
              Sign in
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold text-white px-5 py-2.5 rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #a89cff)' }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={clsx(
            'md:hidden transition-all duration-300 overflow-hidden',
            mobileOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="mt-2 text-center text-sm font-semibold text-white px-5 py-2.5 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #a89cff)' }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
