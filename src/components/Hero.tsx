import { ArrowRight, Play, Star, Upload } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Hero() {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setPhotoSrc(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden hero-gradient noise-bg">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6C63FF, transparent)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #FF6584, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6C63FF, transparent)' }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-24 right-24 w-3 h-3 rounded-full bg-brand animate-float opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 left-32 w-2 h-2 rounded-full bg-accent animate-float opacity-50" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 right-32 w-4 h-4 rounded-full bg-brand-light animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-48 left-20 w-2 h-2 rounded-full bg-accent animate-float opacity-60" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left column — copy */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
              </span>
              <span className="text-sm text-gray-300">Now in public beta — </span>
              <span className="text-sm font-semibold gradient-text">Try it free</span>
              <ArrowRight className="w-3 h-3 text-brand" />
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Build the future,
              <br />
              <span className="gradient-text">ship it faster.</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-400 max-w-2xl lg:max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              Luminary is the all-in-one platform that empowers modern product teams to collaborate, iterate, and launch with unprecedented speed and confidence.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-fade-in-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              <a
                href="#pricing"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl animate-pulse-glow"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #a89cff)' }}
              >
                Start for free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-gray-300 text-lg glass hover:text-white transition-all duration-200 hover:scale-105"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(108,99,255,0.3)' }}>
                  <Play className="w-3 h-3 text-brand fill-brand" />
                </div>
                Watch demo
              </button>
            </div>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-fade-in-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <div className="flex -space-x-2">
                {['#6C63FF','#FF6584','#a89cff','#34d399','#f59e0b'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: color, borderColor: '#0f0f1a', zIndex: 5 - i }}
                  >
                    {['A','B','C','D','E'][i]}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">4,800+</span> teams already building with Luminary
              </p>
            </div>
          </div>

          {/* Right column — user photo */}
          <div
            className="flex-shrink-0 w-full max-w-sm lg:max-w-md xl:max-w-lg animate-fade-in-up"
            style={{ animationDelay: '0.45s', opacity: 0 }}
          >
            <div className="relative">
              {/* Glow ring behind image */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-40 scale-105"
                style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)' }}
              />
              {/* Image frame */}
              <div
                className="relative glass rounded-3xl p-1 shadow-2xl"
                style={{ boxShadow: '0 0 60px rgba(108,99,255,0.25), 0 40px 80px rgba(0,0,0,0.5)' }}
              >
                {photoSrc ? (
                  <img
                    src={photoSrc}
                    alt="Your photo"
                    className="w-full rounded-2xl object-cover"
                    style={{ aspectRatio: '4/5', maxHeight: '520px' }}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-200 hover:bg-white/5"
                    style={{ aspectRatio: '4/5', minHeight: '320px', background: 'rgba(108,99,255,0.07)', border: '2px dashed rgba(108,99,255,0.35)' }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(108,99,255,0.18)' }}
                    >
                      <Upload className="w-7 h-7" style={{ color: '#a89cff' }} />
                    </div>
                    <div className="text-center px-6">
                      <p className="text-white font-semibold text-lg mb-1">Upload your photo</p>
                      <p className="text-gray-400 text-sm">Click to select an image from your device</p>
                      <p className="text-gray-600 text-xs mt-2">JPG, PNG, WEBP — any size</p>
                    </div>
                    <span
                      className="px-5 py-2 rounded-xl text-sm font-semibold text-white"
                      style={{ background: 'linear-gradient(135deg, #6C63FF, #a89cff)' }}
                    >
                      Choose photo
                    </span>
                  </button>
                )}

                {/* Replace button — shown after upload */}
                {photoSrc && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white glass hover:bg-white/10 transition-all duration-200"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Replace
                  </button>
                )}

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />

                {/* Floating badge — top-left */}
                <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6C63FF, #a89cff)' }}>
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 leading-none mb-0.5">Rating</p>
                    <p className="text-sm font-bold text-white leading-none">5.0 / 5.0</p>
                  </div>
                </div>

                {/* Floating badge — bottom-right */}
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-sm font-semibold text-white">Available now</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Hero Dashboard Mockup — full width below */}
        <div
          className="mt-24 relative mx-auto max-w-5xl animate-fade-in-up"
          style={{ animationDelay: '0.65s', opacity: 0 }}
        >
          <div className="glass rounded-2xl p-1 shadow-2xl" style={{ boxShadow: '0 0 60px rgba(108,99,255,0.2), 0 40px 80px rgba(0,0,0,0.5)' }}>
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28C840' }} />
              </div>
              <div className="flex-1 mx-4 h-5 rounded-md flex items-center px-3 text-xs text-gray-500" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                app.luminary.io/dashboard
              </div>
            </div>
            {/* Dashboard content */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Active Projects', value: '24', change: '+12%', color: '#6C63FF' },
                  { label: 'Team Members', value: '128', change: '+5', color: '#34d399' },
                  { label: 'Deployments', value: '1,492', change: '+89', color: '#FF6584' },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs font-medium mt-1" style={{ color: stat.color }}>{stat.change} this week</p>
                  </div>
                ))}
              </div>
              {/* Chart bars */}
              <div className="glass rounded-xl p-4">
                <div className="flex items-end justify-between gap-2 h-20">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 11
                          ? 'linear-gradient(to top, #6C63FF, #a89cff)'
                          : 'rgba(108,99,255,0.25)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow below mockup */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 blur-3xl opacity-30" style={{ background: 'linear-gradient(90deg, #6C63FF, #FF6584)' }} />
        </div>
      </div>
    </section>
  );
}
