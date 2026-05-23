import { useState } from 'react';
import { Sparkles, Cpu, MessageSquare, Terminal, Clipboard, Check, Layers, PlayCircle, Eye } from 'lucide-react';
import { CAPABILITIES } from '../data';
import { Capability } from '../types';

export default function CapabilityShowcase() {
  const [activeTabId, setActiveTabId] = useState<string>(CAPABILITIES[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  // For visual image grid controls
  const [visionScale, setVisionScale] = useState<number>(3);
  const [activeGridPoint, setActiveGridPoint] = useState<number>(4);

  const activeCap = CAPABILITIES.find(c => c.id === activeTabId) || CAPABILITIES[0];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="capabilities" className="py-24 relative overflow-hidden bg-luxury-black">
      {/* Absolute graphic grid divider */}
      <div className="absolute inset-0 grid-bg-overlay grid-mask opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col max-w-xl">
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-3">
              PLATFORM SUB-MACHINES // 002
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              An Architectural Leap in Intelligence
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-sm md:text-right leading-relaxed">
            Multi-modal parameters calibrated to visual balance, agentic reasoning, and luxurious styling consistency.
          </p>
        </div>

        {/* Tab Selection Hub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CAPABILITIES.map((cap) => {
            const isSelected = cap.id === activeTabId;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTabId(cap.id)}
                className={`text-left p-6 rounded-2xl glow-card border transition-all duration-300 relative group cursor-pointer ${
                  isSelected 
                    ? 'border-white/10 bg-zinc-950/40 shadow-inner' 
                    : 'border-transparent hover:border-white/5 bg-zinc-950/10'
                }`}
              >
                {/* Glow dot indicator */}
                <span className={`absolute top-6 right-6 w-1.5 h-1.5 rounded-full transition-transform ${
                  isSelected ? 'scale-100 bg-blue-500' : 'scale-0 bg-zinc-700'
                }`}></span>

                {/* Capability Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                    isSelected 
                      ? 'bg-white/5 border-white/20 text-white' 
                      : 'bg-zinc-950 border-white/5 text-zinc-500 group-hover:text-zinc-300'
                  }`}>
                    {cap.id === 'generative-vision' && <Sparkles className="w-4 h-4" />}
                    {cap.id === 'orchestration-logic' && <Cpu className="w-4 h-4" />}
                    {cap.id === 'linguistic-intelligence' && <MessageSquare className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase font-bold">{cap.badge}</span>
                    <h3 className="font-display text-sm font-semibold tracking-wide text-zinc-200">{cap.title}</h3>
                  </div>
                </div>

                <p className="font-sans text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {cap.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase">{cap.stats}</span>
                  <span className="font-mono text-[9px] text-zinc-500 font-bold hover:text-white transition-colors flex items-center gap-1">
                    DEPLOY MODULE →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Two Column Active Tab Details Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Model API Code Integration block */}
          <div className="lg:col-span-5 flex flex-col justify-between glow-card rounded-2xl p-6 border border-white/5">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 font-bold uppercase">
                  <Terminal className="w-3.5 h-3.5" />
                  STOCHASTIC SDK SPECIFICATION
                </div>
                
                <button
                  onClick={() => handleCopyCode(activeCap.codeSnippet)}
                  className="p-1 px-2.5 rounded bg-white/5 hover:bg-white/10 active:scale-95 text-[9px] font-mono text-zinc-400 hover:text-white transition-all flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      COPIED
                    </>
                  ) : (
                    <>
                      <Clipboard className="w-3 h-3" />
                      COPY
                    </>
                  )}
                </button>
              </div>

              {/* Code display screen */}
              <div className="bg-black/95 rounded-xl p-5 border border-white/5 overflow-x-auto">
                <pre className="font-mono text-[10px] text-zinc-300 leading-relaxed whitespace-pre font-medium">
                  <code>{activeCap.codeSnippet}</code>
                </pre>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-500 font-mono text-[9px]">
                <Layers className="w-3 h-3" />
                <span>DEPENDENCY: @aether/platform-core v4.2+</span>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/5 space-y-3">
              <span className="font-mono text-[9px] uppercase tracking-wider text-luxury-neon-blue font-bold">Latency Signature</span>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Deployed seamlessly on private tensor structures. Custom multi-attention weights bypass standard prompt dilution arrays to resolve values instantaneously.
              </p>
            </div>
          </div>

          {/* Right Column: Custom Interactive Model HUD/Visualization */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-950/50 border border-white/5 p-6 flex flex-col justify-between overflow-hidden min-h-[360px]">
            
            <div className="flex justify-between items-center mb-6 pl-2">
              <span className="font-mono text-[9px] text-zinc-400 font-bold uppercase tracking-widest">
                Active Interactive Simulator // {activeCap.id.toUpperCase()}
              </span>
              <span className="font-mono text-[8px] border border-blue-500/20 bg-blue-500/5 py-0.5 px-2 rounded text-blue-400 font-bold uppercase">
                Render Safe
              </span>
            </div>

            {/* Core Visualization States */}
            <div className="flex-1 flex items-center justify-center p-4">
              
              {/* VISUAL 1: Generative Vision Matrix */}
              {activeCap.id === 'generative-vision' && (
                <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                  {/* Grid control */}
                  <div className="grid grid-cols-4 gap-2 w-full">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <div
                        key={index}
                        onClick={() => setActiveGridPoint(index)}
                        className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                          activeGridPoint === index
                            ? 'bg-blue-500/10 border-blue-500 shadow-lg shadow-blue-500/10'
                            : 'bg-zinc-900/50 border-white/5 hover:border-white/20'
                        }`}
                      >
                        <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-400">{index}</span>
                        {activeGridPoint === index && (
                          <div className="absolute inset-x-0 bottom-0 top-0 bg-blue-500/10 flex items-center justify-center text-[8px] text-blue-400 font-mono font-bold animate-pulse">
                            ACTIVE
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/[0.02]"></div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between w-full border-t border-white/5 pt-4 text-[10px] font-mono text-zinc-500">
                    <span>Active Latent Nodes: {activeGridPoint} / 15</span>
                    <span>Contrast: {visionScale.toFixed(1)}x</span>
                  </div>
                </div>
              )}

              {/* VISUAL 2: Autonomous Workflows Graph */}
              {activeCap.id === 'orchestration-logic' && (
                <div className="w-full max-w-xs bg-black/50 border border-white/5 rounded-xl p-4 space-y-3 relative">
                  
                  {/* Connect wires representation */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-1/2 h-[1px] bg-gradient-to-r from-violet-500 to-cyan-500 rotate-45 transform"></div>
                    <div className="w-1/2 h-[1px] bg-gradient-to-r from-violet-500 to-cyan-500 -rotate-45 transform"></div>
                  </div>

                  <div className="flex justify-between items-center bg-zinc-900/80 p-2 rounded border border-white/5 relative z-10">
                    <span className="font-mono text-[9.5px] text-white">Trigger: Figma Push</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>

                  <div className="flex items-center justify-center z-10 relative py-2">
                    <div className="w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/20 animate-bounce">
                      <Cpu className="w-5 h-5 text-violet-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 relative z-10">
                    <div className="bg-zinc-900/60 p-2 rounded text-center border border-white/5">
                      <span className="font-mono text-[8px] text-zinc-500 block">NODE_A</span>
                      <span className="font-mono text-[9.5px] text-zinc-300 font-bold">Write Code</span>
                    </div>
                    <div className="bg-zinc-900/60 p-2 rounded text-center border border-white/5">
                      <span className="font-mono text-[8px] text-zinc-500 block">NODE_B</span>
                      <span className="font-mono text-[9.5px] text-zinc-300 font-bold">Verify Types</span>
                    </div>
                  </div>

                </div>
              )}

              {/* VISUAL 3: Cognitive Copy strings typewriter list */}
              {activeCap.id === 'linguistic-intelligence' && (
                <div className="w-full max-w-sm space-y-3">
                  <div className="bg-black/80 rounded-xl p-4 border border-white/5 space-y-2">
                    <div className="flex justify-between text-zinc-500 text-[8px] font-mono border-b border-white/5 pb-2">
                      <span>Linguistic Prompt Sequence</span>
                      <span>Target: LUXURY HEADER</span>
                    </div>
                    <p className="font-serif italic text-sm text-zinc-300 leading-normal pt-1">
                      &quot;Whispering intelligence into silicon channels; luxury aesthetics mapped directly to computational structures.&quot;
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 font-mono text-[8.5px] text-zinc-400 text-center">
                    <div className="bg-zinc-900 border border-white/5 p-1.5 rounded">
                      SYNTAX: OK
                    </div>
                    <div className="bg-zinc-900 border border-white/5 p-1.5 rounded">
                      BLOATS: ZERO
                    </div>
                    <div className="bg-zinc-900 border border-white/5 p-1.5 rounded">
                      ACC: 99.8%
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Metric Footer info */}
            <div className="border-t border-white/5 pt-4 flex justify-between text-[10px] font-mono text-zinc-500">
              <span>SYSTEM ALLOCATION: ON-DEMAND</span>
              <span>ENGINE: CORESYNC v4.28</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
