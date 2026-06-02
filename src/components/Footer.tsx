import { Zap, Twitter, Github, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Developers: ['Documentation', 'API Reference', 'CLI', 'GitHub', 'Community'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a14', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #FF6584)' }}
              >
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Luminary</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The all-in-one platform for modern product teams.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Twitter className="w-4 h-4" />, href: '#' },
                { icon: <Github className="w-4 h-4" />, href: '#' },
                { icon: <Linkedin className="w-4 h-4" />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-brand/50 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-gray-200 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Luminary, Inc. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Made with ❤️ for builders everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
