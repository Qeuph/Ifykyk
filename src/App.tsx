import { useMemo, useState, FormEvent } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Cpu, 
  Layers, 
  Zap, 
  Sliders, 
  ShieldCheck, 
  Compass, 
  Code2, 
  Heart, 
  Check, 
  HelpCircle,
  MessageSquare,
  Globe,
  Share2
} from 'lucide-react';

import Navbar from './components/Navbar';
import CapabilityShowcase from './components/CapabilityShowcase';
import InteractiveDemo from './components/InteractiveDemo';
import WorkflowNodes from './components/WorkflowNodes';
import FaqAccordion from './components/FaqAccordion';

import { 
  METRICS, 
  USE_CASES, 
  FEATURES, 
  TESTIMONIALS, 
  PRICING_PLANS 
} from './data';

export default function App() {
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);


  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-luxury-black text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-black">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* 1. Global Navigation Header */}
      <Navbar />

      <main id="main-content">
      {/* 2. Panoramic Cinema Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden border-b border-white/5">
        
        {/* Extreme spatial ambient spotlights */}
        <div className="absolute top-[15%] left-[5%] w-[45%] h-[45%] rounded-full ambient-spot-blue blur-[140px] pointer-events-none opacity-80"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full ambient-spot-purple blur-[140px] pointer-events-none opacity-70"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full ambient-spot-cyan blur-[120px] pointer-events-none opacity-40"></div>

        {/* Structural animated grid overlay */}
        <div className="absolute inset-0 grid-bg-overlay grid-mask opacity-55 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
          
          {/* Animated floating system chip badge */}
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-zinc-300 uppercase mb-8 transform hover:scale-102 transition-transform cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>AETHER COGNITIVE SUITE v4.2 RELEASE</span>
          </div>

          {/* Cinematic display title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-8xl text-white tracking-tight leading-none mb-6 max-w-5xl">
            The Creative <br className="hidden md:block" />
            <span className="text-gradient-creative text-glow">Intelligence Engine</span>
          </h1>

          {/* Luxury descriptive prompt subheadline */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mb-12 leading-relaxed font-light">
            Synthesize raw imaginative force into production-grade cinematic visuals, automated workspaces, and structured codebases autonomously. Designed specifically for next-generation world-class design studios.
          </p>

          {/* Interaction calls */}
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-20 z-20">
            <a
              href="#playground"
              className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-luxury-black font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-2xl"
              id="hero-primary-cta"
            >
              INITIALIZE PORTAL
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#capabilities"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/[0.01] hover:bg-white/[0.04] text-white font-mono text-xs font-medium uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300"
              id="hero-secondary-cta"
            >
              SYSTEM ANALYSIS
            </a>
          </div>

          {/* Massive Panoramic Showcase Window (Core Art preview) */}
          <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-zinc-950/60 p-4 backdrop-blur-3xl shadow-3xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/[0.02] pointer-events-none"></div>
            
            {/* Window HUD Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 font-mono text-[9px] text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/30"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/30"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/30"></span>
                <span className="ml-2">ACTIVE_NODE: [AETHER-CORE]</span>
              </div>
              <span>LATENT DIM: 16.2 GigaTokens</span>
            </div>

            {/* Immersive Custom Core Image */}
            <div className="relative rounded-xl overflow-hidden aspect-[16:9] border border-white/5">
              <img
                src="/src/assets/images/aether_core_engine_1779541743862.png"
                loading="lazy"
                alt="Aether Core Engine Spatial Art"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-luxury/90 via-transparent to-transparent"></div>

              {/* HUD graphics on image */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="text-left font-mono">
                  <span className="text-[8px] text-zinc-500 uppercase block">Spatial Render Terminal</span>
                  <span className="text-xs text-white font-bold tracking-wider">AETHER_CORE_ENGINE_3D.CJS</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-left font-mono text-[8px] text-zinc-400 bg-black/85 border border-white/5 p-3 rounded-lg backdrop-blur-md">
                  <div>
                    <span className="text-zinc-600 uppercase block">COMPUTING</span>
                    <span className="text-white font-bold">12,400 TFLOPS</span>
                  </div>
                  <div>
                    <span className="text-zinc-600 uppercase block">ALIGN_SEED</span>
                    <span className="text-white font-bold">0xFD89A23E</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </header>

      {/* 3. Metrics Strip */}
      <section className="py-16 bg-zinc-950/80 border-b border-white/5 relative z-15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {METRICS.map((met, index) => (
              <div key={index} className="flex flex-col border-l border-white/10 pl-6 group">
                <span className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-1 group-hover:text-luxury-neon-blue transition-colors">
                  {met.value}
                </span>
                <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider mb-2 font-semibold">
                  {met.label}
                </span>
                <span className="font-sans text-xs text-zinc-500 leading-normal">
                  {met.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Capabilities Section */}
      <CapabilityShowcase />

      {/* 5. Interactive Demo Section */}
      <InteractiveDemo />

      {/* 6. Workflow Connections Section */}
      <WorkflowNodes />

      {/* 7. Use cases Section */}
      <section id="usecases" className="py-24 bg-luxury-black relative overflow-hidden">
        {/* Spot ambient */}
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full ambient-spot-cyan blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-3">
              CREATIVE SPACES // 004
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight mb-4">
              Forged for Supreme Operations
            </h2>
            <p className="font-sans text-sm text-zinc-400 max-w-xl">
              See how leaders across visual media, architectural representation, and global systems leverage Aether for unmatched campaign velocities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {USE_CASES.map((uc) => (
              <div key={uc.id} className="glow-card rounded-2xl p-8 flex flex-col justify-between border border-white/5">
                
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase font-bold tracking-wider block mb-4">
                    {uc.category}
                  </span>
                  
                  <h3 className="font-display text-lg font-bold text-white tracking-wide mb-3 leading-snug">
                    {uc.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-8">
                    {uc.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-display text-2xl font-extrabold text-white tracking-tight">
                      {uc.metric}
                    </span>
                    <span className="font-sans text-[10px] text-zinc-500 font-medium">
                      {uc.metricLabel}
                    </span>
                  </div>
                  
                  <span className="font-mono text-[8px] bg-white/5 px-2.5 py-1 rounded text-zinc-400 border border-white/5 uppercase">
                    {uc.visualHighlight}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Advanced Features Bento */}
      <section id="features" className="py-24 bg-zinc-950/40 border-y border-white/5 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-3">
              ADVANCED SPECIFICATIONS // 005
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight mb-4">
              Microengineered Elements
            </h2>
            <p className="font-sans text-sm text-zinc-400 max-w-xl">
              Look inside the hyper-optimized pipelines designed to maximize render performance, model precision, and security bounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat) => (
              <div key={feat.id} className="glow-card rounded-xl p-6 border border-white/5 flex flex-col justify-between min-h-[200px]">
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white border border-white/5">
                    {feat.iconName === 'Zap' && <Zap className="w-4 h-4 text-amber-400" />}
                    {feat.iconName === 'Layers' && <Layers className="w-4 h-4 text-blue-400" />}
                    {feat.iconName === 'Sliders' && <Sliders className="w-4 h-4 text-violet-400" />}
                    {feat.iconName === 'ShieldAlert' && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                    {feat.iconName === 'Codexml' && <Code2 className="w-4 h-4 text-cyan-400" />}
                    {feat.iconName === 'Compass' && <Compass className="w-4 h-4 text-purple-400" />}
                  </div>

                  <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest font-bold">
                    {feat.chip}
                  </span>
                </div>

                <div className="mt-4">
                  <h4 className="font-display text-sm font-bold text-white mb-2 tracking-wide">
                    {feat.title}
                  </h4>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Premium Testimonials */}
      <section className="py-24 bg-luxury-black relative overflow-hidden">
        {/* Ambient Spot */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full ambient-spot-purple blur-[120px] pointer-events-none opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-3">
              CLIENT TESTIMONIALS // 006
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight mb-4">
              Approved by Leading Creatives
            </h2>
            <p className="font-sans text-sm text-zinc-400 max-w-xl">
              From premium brand designers to core systems platform architects. Discover how Aether re-shapes everyday production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div key={test.id} className="glow-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between relative">
                
                <p className="font-sans text-xs md:text-sm italic text-zinc-300 leading-relaxed mb-8">
                  {test.quote}
                </p>

                <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-bold text-white border"
                    style={{ borderColor: test.accentColor, backgroundColor: `${test.accentColor}20` }}
                  >
                    {test.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-white">
                      {test.name}
                    </span>
                    <span className="font-sans text-[10px] text-zinc-500">
                      {test.role}, <span className="text-zinc-400 font-medium">{test.company}</span>
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Pricing Section */}
      <section id="pricing" className="py-24 bg-zinc-950/60 border-t border-white/5 relative overflow-hidden">
        {/* Lights */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full ambient-spot-blue blur-3xl opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-3">
              PREMIUM MODELS // 007
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight mb-4">
              Simple Transparent Value
            </h2>
            <p className="font-sans text-sm text-zinc-400 max-w-xl">
              Unlock supreme creative automation. Choose the ideal pricing bounds calibrated perfectly for your platform tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan) => {
              const isSelected = plan.isPopular;
              return (
                <div 
                  key={plan.id} 
                  className={`rounded-2xl p-8 flex flex-col justify-between border transition-all duration-300 relative ${
                    isSelected 
                      ? 'bg-zinc-900/30 border-blue-500/50 shadow-2xl shadow-blue-500/5' 
                      : 'bg-zinc-950/40 border-white/5 hover:border-white/10'
                  }`}
                >
                  
                  {isSelected && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-500 text-luxury-black font-mono text-[9px] font-extrabold uppercase px-3 py-1 rounded-full tracking-widest">
                      RECOMMENDED CHOICE
                    </span>
                  )}

                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold tracking-widest block mb-1">
                      {plan.name}
                    </span>
                    
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="font-display font-bold text-4xl text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="font-sans text-xs text-zinc-500">
                        {plan.period}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    <div className="h-[1px] bg-white/5 my-6"></div>

                    {/* Features checklist */}
                    <ul className="space-y-3.5 mb-8">
                      {plan.features.map((feat, fI) => (
                        <li key={fI} className="flex items-start gap-2.5 font-sans text-xs text-zinc-300 leading-snug">
                          <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                                        className={`w-full py-3.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                      isSelected 
                        ? 'bg-white text-luxury-black hover:bg-zinc-200' 
                        : 'border border-white/10 text-white hover:bg-white/5'
                    }`}
                  >
                    {plan.cta}
                  </button>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 11. FAQ Accordion section */}
      <section className="py-24 bg-luxury-black relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-3">
              SUPPORT PROTOCOLS // 008
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-sm text-zinc-400 max-w-xl">
              Gain clarity on inference, brand-customized style seeding, memory state sanitizations, and autonomous deployments.
            </p>
          </div>

          <FaqAccordion />

        </div>
      </section>

      {/* 12. Final Cinematic CTA */}
      <section className="py-32 bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden border-t border-white/5">
        {/* Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full ambient-spot-purple blur-[140px] opacity-60 pointer-events-none"></div>
        <div className="absolute inset-0 grid-bg-overlay grid-mask opacity-30 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          
          <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-widest mb-4 block font-extrabold">
            TRANSITION TO AUTONOMOUS PRODUCTION
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-7xl text-white tracking-tight leading-none mb-6">
            Step Into <br className="hidden sm:block" />
            <span className="text-gradient-creative">Pure Imagination</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Empower your team with a complete, studio-grade creative system today. No credit cards required during initial node registration.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 items-stretch justify-center">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 rounded-xl px-5 py-3.5 bg-zinc-900 border border-white/5 focus:border-blue-500 focus:outline-none text-xs font-mono text-white placeholder-zinc-500"
              placeholder="Enter corporate email node..."
            />
            <button
              type="submit"
              className="bg-white text-luxury-black hover:bg-zinc-200 transition-colors px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-widest"
            >
              {subscribed ? 'REGISTERED' : 'REQUEST PORTAL ACCESS'}
            </button>
          </form>

        </div>
      </section>

      </main>

      {/* 13. Minimal Luxury Footer */}
      <footer className="py-12 bg-luxury-black border-t border-white/5 font-mono text-[10px] text-zinc-500 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left copyright and physical server metrics */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div>
              <span className="text-zinc-400 font-bold">AETHER PLATFORM INC.</span>
              <span className="mx-2">||</span>
              <span>© {currentYear} All rights reserved.</span>
            </div>
            
            <div className="flex gap-4 text-[9px] text-zinc-600">
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-zinc-600" />
                RELAY: NYC-7 [ONLINE]
              </span>
              <span>PING: 14ms</span>
            </div>
          </div>

          {/* Right legal and terms actions */}
          <div className="flex items-center gap-6">
            <a href="#playground" className="hover:text-white transition-colors">Workspace</a>
            <a href="#capabilities" className="hover:text-white transition-colors">API Keys</a>
            <a href="#pricing" className="hover:text-white transition-colors">SLA Agreement</a>
            <a href="#features" className="hover:text-white transition-colors">Privacy Shield</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
