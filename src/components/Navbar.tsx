import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('13:08:16 UTC');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Update time dynamically in real-time
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
      setCurrentTime(timeStr);
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <nav aria-label="Primary" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-luxury-black/90 border-b border-white/5 backdrop-blur-xl' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-3 group" aria-label="Aether home">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-luxury-neon-blue to-luxury-neon-purple p-[1px] flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-luxury-neon-blue to-luxury-neon-purple blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>
            <div className="w-full h-full bg-luxury-black rounded-[7px] flex items-center justify-center relative z-10">
              <span className="font-display font-bold text-sm tracking-widest text-white">Æ</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-medium text-sm tracking-wider text-white group-hover:text-luxury-neon-blue transition-colors duration-300">
              AETHER
            </span>
            <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
              Creative Core
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Capabilities', href: '#capabilities' },
            { label: 'Playground', href: '#playground' },
            { label: 'Workflow', href: '#workflow' },
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-mono font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wider relative group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-luxury-neon-blue to-luxury-neon-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Desktop Controls */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 border border-white/5 bg-white/[0.02] px-3 py-1.5 rounded-full font-mono text-[10px] text-zinc-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>{currentTime}</span>
          </div>
          
          <a
            href="#pricing"
            className="relative inline-flex items-center gap-1 bg-white hover:bg-zinc-200 text-luxury-black px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
            id="nav-cta-btn"
          >
            INITIALIZE
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div className="font-mono text-[9px] text-zinc-400 border border-white/5 py-1 px-2.5 rounded-md">
            SYS:LIVE
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-zinc-400 hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-luxury-black/95 border-b border-white/5 backdrop-blur-2xl py-6 px-6 flex flex-col gap-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {[
              { label: 'Capabilities', href: '#capabilities' },
              { label: 'Playground', href: '#playground' },
              { label: 'Workflow', href: '#workflow' },
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-mono tracking-widest text-zinc-400 hover:text-white transition-colors uppercase py-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="h-[1px] bg-white/5 w-full"></div>

          <div className="flex flex-col gap-4">
            <div className="font-mono text-[10px] text-zinc-500">
              LIVE CONSOLE: {currentTime}
            </div>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="w-full bg-white hover:bg-zinc-200 text-luxury-black py-3 rounded-full font-mono text-center text-xs font-semibold tracking-widest transition-colors block"
            >
              INITIALIZE PORTAL
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
