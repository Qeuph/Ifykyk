import { useState, useEffect, MouseEvent } from 'react';
import { Sparkles, Sliders, Play, RotateCcw, AlertCircle, CheckCircle2, Terminal, Code, Cpu, Eye, ArrowRight, Layers } from 'lucide-react';
import { DEMO_PRESETS } from '../data';
import { DemoPreset } from '../types';

export default function InteractiveDemo() {
  const [activePresetId, setActivePresetId] = useState<string>(DEMO_PRESETS[0].id);
  const [promptInput, setPromptInput] = useState<string>(DEMO_PRESETS[0].prompt);
  const [activeMode, setActiveMode] = useState<'image' | 'text' | 'workflow'>('image');
  
  // Custom Controls parameters
  const [guidance, setGuidance] = useState<number>(8.5);
  const [stepsCount, setStepsCount] = useState<number>(30);
  const [seed, setSeed] = useState<number>(759241);

  // Status Machine
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [activeLogStep, setActiveLogStep] = useState<number>(-1);
  const [showResult, setShowResult] = useState<boolean>(true);
  const [processingLogs, setProcessingLogs] = useState<string[]>([]);

  // Mouse hover glare coordinate state for images
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const currentPreset = DEMO_PRESETS.find(p => p.id === activePresetId) || DEMO_PRESETS[0];

  const handleSelectPreset = (preset: DemoPreset) => {
    if (isProcessing) return;
    setActivePresetId(preset.id);
    setPromptInput(preset.prompt);
    setActiveMode(preset.type);
    setShowResult(true);
    setProgressPercent(0);
    setActiveLogStep(-1);
    
    // Dynamic controls adjustment for authenticity
    if (preset.type === 'image') {
      setGuidance(8.5);
      setStepsCount(30);
    } else if (preset.type === 'text') {
      setGuidance(4.5);
      setStepsCount(15);
    } else {
      setGuidance(9.9);
      setStepsCount(50);
    }
  };

  const executeSynthesis = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setShowResult(false);
    setProgressPercent(0);
    setActiveLogStep(0);
    setProcessingLogs([]);

    const steps = currentPreset.steps;
    let logIndex = 0;
    
    // Progress interval
    const intervalTime = currentPreset.durationMs / 100;
    const progressTimer = setInterval(() => {
      setProgressPercent(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    // Logs incremental update
    const logTimer = setInterval(() => {
      if (logIndex < steps.length) {
        setProcessingLogs(prev => [...prev, steps[logIndex]]);
        setActiveLogStep(logIndex);
        logIndex++;
      } else {
        clearInterval(logTimer);
        setTimeout(() => {
          setIsProcessing(false);
          setShowResult(true);
        }, 300);
      }
    }, currentPreset.durationMs / steps.length);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // Generate random seed
  const randomizeSeed = () => {
    setSeed(Math.floor(Math.random() * 900000) + 100000);
  };

  return (
    <section id="playground" className="py-24 relative overflow-hidden bg-luxury-black/40 border-y border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full ambient-spot-blue blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full ambient-spot-purple blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/5 px-3 py-1 rounded-full text-xs font-mono tracking-widest text-luxury-neon-blue uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Core Workspace
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight mb-4 max-w-2xl">
            Test the Speed of Creative Thought
          </h2>
          <p className="font-sans text-sm text-zinc-400 max-w-xl">
            Tune stochastic factors and trigger live workflows or visuals. Watch as neural paths align and material artifacts coalesce in sub-second frames.
          </p>
        </div>

        {/* Workspace Bento Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Controls (Pane 1) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Presets tabs */}
            <div className="bg-zinc-950/60 p-1.5 rounded-xl border border-white/5 flex gap-2 overflow-x-auto">
              {DEMO_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  disabled={isProcessing}
                  className={`flex-1 min-w-[120px] rounded-lg py-2 px-3 font-mono text-[10px] uppercase tracking-widest font-semibold transition-all ${
                    activePresetId === preset.id
                      ? 'bg-white text-luxury-black shadow-lg shadow-white/5'
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  {preset.title}
                </button>
              ))}
            </div>

            {/* Main Interactive Workboard */}
            <div className="glow-card rounded-2xl p-6 flex flex-col gap-5 border border-white/5">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2 font-display text-xs tracking-wider font-bold uppercase text-white">
                  <Sliders className="w-4 h-4 text-luxury-neon-blue" />
                  Synthesis Controls
                </div>
                <div className="font-mono text-[9px] px-2 py-1 rounded bg-white/5 text-zinc-400">
                  ENG v4.28
                </div>
              </div>

              {/* Dynamic Action Selector Mode */}
              <div className="grid grid-cols-3 gap-2">
                {(['image', 'text', 'workflow'] as const).map((m) => {
                  const modeStyles = {
                    image: 'bg-blue-500/10 border-blue-500/50 text-blue-400',
                    text: 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400',
                    workflow: 'bg-violet-500/10 border-violet-500/50 text-violet-400'
                  } as const;
                  return (
                  <button
                    key={m}
                    onClick={() => {
                      if (isProcessing) return;
                      setActiveMode(m);
                      // Auto pick a matching preset
                      const match = DEMO_PRESETS.find(p => p.type === m);
                      if (match) handleSelectPreset(match);
                    }}
                    className={`border rounded-lg py-2 text-center font-mono text-[9px] uppercase tracking-widest font-bold transition-all ${
                      activeMode === m
                        ? modeStyles[m]
                        : 'border-white/5 text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {m} MODE
                  </button>
                  );
                })}
              </div>

              {/* Input Area */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  Active Instruction Pipeline
                </label>
                <div className="relative">
                  <textarea
                    value={promptInput}
                    onChange={(e) => {
                      if (!isProcessing) setPromptInput(e.target.value);
                    }}
                    disabled={isProcessing}
                    rows={3}
                    className="w-full text-xs font-mono p-4 rounded-xl glass-input text-white tracking-wide resize-none focus:outline-none"
                    placeholder="Enter design parameters or operational workflows..."
                  />
                  <div className="absolute right-3 bottom-3 flex gap-2">
                    <button
                      onClick={() => setPromptInput('')}
                      disabled={isProcessing}
                      className="p-1.5 rounded-md hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
                      title="Clear"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sliders Panels */}
              <div className="flex flex-col gap-4 border-t border-white/5 pt-4">
                
                {/* Sliders 1 */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">Aesthetic Guidance (CFG)</span>
                    <span className="font-mono text-[10px] text-luxury-neon-blue font-semibold">{guidance.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="15.0"
                    step="0.1"
                    value={guidance}
                    onChange={(e) => !isProcessing && setGuidance(parseFloat(e.target.value))}
                    disabled={isProcessing}
                    className="w-full h-1 bg-zinc-850 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                {/* Sliders 2 */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">Iterative Refinement Steps</span>
                    <span className="font-mono text-[10px] text-luxury-neon-purple font-semibold">{stepsCount}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    step="5"
                    value={stepsCount}
                    onChange={(e) => !isProcessing && setStepsCount(parseInt(e.target.value))}
                    disabled={isProcessing}
                    className="w-full h-1 bg-zinc-850 rounded-lg appearance-none cursor-pointer accent-violet-500"
                  />
                </div>

                {/* Seed selection */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">Stochastic System Seed</span>
                    <span className="font-mono text-[10px] text-zinc-300 font-bold">{seed}</span>
                  </div>
                  <button
                    onClick={randomizeSeed}
                    disabled={isProcessing}
                    className="px-3 py-1.5 rounded border border-white/5 bg-white/5 text-[9px] hover:text-white font-mono hover:bg-white/10 transition-colors disabled:opacity-50"
                  >
                    RESEED
                  </button>
                </div>

              </div>

              {/* Compile synthesis CTA Button */}
              <button
                onClick={executeSynthesis}
                disabled={isProcessing || !promptInput.trim()}
                className={`w-full mt-2 relative overflow-hidden bg-white text-luxury-black hover:bg-zinc-200 transition-all font-mono text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-2xl ${
                  isProcessing ? 'opacity-90 cursor-not-allowed' : 'active:scale-95'
                }`}
              >
                {isProcessing ? (
                  <>
                    <span className="animate-spin h-3.5 w-3.5 border-2 border-luxury-black border-t-transparent rounded-full mr-1"></span>
                    SYNTHESIZING VECTORS... {progressPercent}%
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-black" />
                    SYNTHESIZE CORE ENGINE
                  </>
                )}
              </button>

            </div>

          </div>

          {/* RIGHT: High-End Live Preview Screens (Pane 2) */}
          <div className="lg:col-span-7 h-full flex flex-col justify-stretch">
            
            <div className="bg-zinc-950/80 rounded-2xl border border-white/8 p-6 relative min-h-[460px] flex flex-col justify-between overflow-hidden">
              
              {/* Glass subtle lighting sweep inside preview pane */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-violet-500/20"></div>

              {/* Interactive Top Row indicator */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 z-10 relative">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`}></span>
                  <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                    PROJECTION SCREEN // {isProcessing ? 'CALCULATING' : 'IDLE STATE'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-zinc-500 font-mono text-[9px]">
                  <span>LATENCY: {isProcessing ? 'MEASURING..' : '340ms'}</span>
                  <span>MODE: {activeMode.toUpperCase()}</span>
                </div>
              </div>

              {/* CENTER SCREEN PORTAL */}
              <div className="my-6 flex-1 flex flex-col items-center justify-center relative z-10 min-h-[300px]">
                
                {/* 1. Processing Screen Grid */}
                {isProcessing && (
                  <div className="w-full h-full absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/70 backdrop-blur-sm z-30 p-6">
                    
                    {/* Glowing scanner sweep overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-1/2 w-full scan-line pointer-events-none"></div>

                    {/* Spinning Hologram Wireframe ring */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full border-2 border-dashed border-zinc-700 animate-spin flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full border-2 border-double border-zinc-600 animate-pulse flex items-center justify-center">
                          <Terminal className="w-5 h-5 text-luxury-neon-blue" />
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>
                    </div>

                    {/* Progress tracking numeric count */}
                    <span className="font-display text-4xl font-extrabold text-white mb-2 font-mono">
                      {progressPercent}%
                    </span>

                    {/* Progressive Logging terminal */}
                    <div className="w-full max-w-sm bg-black/90 rounded-lg p-3 border border-white/5 font-mono text-[9px] text-zinc-400 text-left space-y-1.5 h-24 overflow-y-auto">
                      <div className="text-zinc-500 flex justify-between uppercase font-semibold">
                        <span>SYSTEM AGENT JOURNAL</span>
                        <span>[STREAMING]</span>
                      </div>
                      {processingLogs.map((log, index) => (
                        <div key={index} className={`flex items-start gap-1 font-mono leading-normal transition-all duration-300 ${index === activeLogStep ? 'text-white' : 'text-zinc-500'}`}>
                          <span className="text-luxury-neon-cyan">❯</span>
                          <span>{log}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

                {/* 2. Visual Outcome rendering */}
                {showResult && !isProcessing && (
                  <div className="w-full h-full flex flex-col justify-center items-center animate-fade-in">
                    
                    {/* IMAGE CONTENT REVEAL */}
                    {activeMode === 'image' && currentPreset.output.imageUrl && (
                      <div 
                        className="relative rounded-xl overflow-hidden shadow-2xl aspect-[16:9] w-full max-w-lg cursor-crosshair group glow-card"
                        onMouseMove={handleMouseMove}
                      >
                        {/* Dynamic Glare Flash follow effect */}
                        <div 
                          className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity z-20"
                          style={{
                            background: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15) 0%, transparent 100%)`
                          }}
                        ></div>

                        <img 
                          src={currentPreset.output.imageUrl} 
                          alt={currentPreset.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Interactive HUD tags */}
                        <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md px-3.5 py-2.5 rounded-lg border border-white/5 flex items-center justify-between z-15">
                          <div className="flex flex-col">
                            <span className="font-display font-medium text-[11px] text-white tracking-wide">{currentPreset.title}</span>
                            <span className="font-mono text-[8px] text-zinc-400">Dim: 8192 × 4608 || Res: 300dpi</span>
                          </div>
                          <div className="flex items-center gap-1.5 font-mono text-[8px] text-luxury-neon-cyan bg-cyan-950/20 border border-cyan-800/30 px-2 py-1 rounded">
                            <Eye className="w-3 h-3" />
                            FIDELITY STATE: 0.98
                          </div>
                        </div>

                        {/* Top corner metadata tags */}
                        <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md px-2 py-1 rounded font-mono text-[8.5px] text-zinc-400 border border-white/5">
                          SEED: {seed}
                        </div>
                      </div>
                    )}

                    {/* TEXT CONTENT REVEAL */}
                    {activeMode === 'text' && currentPreset.output.textContent && (
                      <div className="w-full max-w-md bg-black/60 rounded-xl p-6 border border-white/5 relative">
                        <div className="absolute top-3 right-3 flex gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-700"></span>
                        </div>
                        
                        <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-4">
                          / GENERATED TEXT BLOCK
                        </div>
                        
                        <div className="font-serif italic text-base md:text-lg text-zinc-200 leading-relaxed whitespace-pre-wrap">
                          {currentPreset.output.textContent}
                        </div>

                        <div className="h-[1px] bg-white/5 my-4"></div>
                        
                        <div className="flex items-center justify-between font-mono text-[8px] text-zinc-500">
                          <span>TOKENS: {currentPreset.output.textLength || 120}</span>
                          <span>ALIGNMENT FACTOR: DETERMINISTIC</span>
                        </div>
                      </div>
                    )}

                    {/* WORKFLOW PIPELINE REVEAL */}
                    {activeMode === 'workflow' && currentPreset.output.automatedSteps && (
                      <div className="w-full max-w-md">
                        <div className="bg-black/80 rounded-xl p-5 border border-white/8">
                          
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-mono text-[9px] tracking-wider text-luxury-neon-purple uppercase font-bold">Agents State Terminal</span>
                            <span className="font-mono text-[8.5px] bg-zinc-900 border border-white/5 px-2 py-0.5 rounded text-white flex items-center gap-1">
                              <Cpu className="w-3 h-3 text-purple-400" />
                              Active Matrix: 4 Nodes
                            </span>
                          </div>

                          <div className="space-y-4 relative">
                            {/* Visual connection track line */}
                            <div className="absolute left-3.5 top-2 bottom-2 w-[1px] bg-gradient-to-b from-emerald-500 via-blue-500 to-zinc-800"></div>

                            {currentPreset.output.automatedSteps.map((step, sIdx) => (
                              <div key={sIdx} className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-3">
                                  <div className={`w-7 h-7 rounded-full flex items-center justify-center border font-mono text-[10px] ${
                                    step.status === 'completed' 
                                      ? 'bg-emerald-900/40 border-emerald-500 text-emerald-400' 
                                      : step.status === 'active' 
                                      ? 'bg-blue-950 border-blue-500 text-blue-400 animate-pulse' 
                                      : 'bg-zinc-900 border-zinc-700 text-zinc-500'
                                  }`}>
                                    {sIdx + 1}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className={`font-mono text-xs font-medium ${step.status === 'completed' ? 'text-zinc-200' : step.status === 'active' ? 'text-white font-bold' : 'text-zinc-500'}`}>
                                      {step.name}
                                    </span>
                                    <span className="font-mono text-[8px] text-zinc-500">
                                      {step.status === 'completed' ? 'Synced (0.42s)' : step.status === 'active' ? 'Compiling vectors..' : 'Awaiting sync...'}
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <span className={`font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 rounded text-left ${
                                    step.status === 'completed' 
                                      ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-800/30' 
                                      : step.status === 'active' 
                                      ? 'bg-blue-900/25 text-blue-400 border border-blue-800/20 animate-pulse' 
                                      : 'bg-zinc-900/40 text-zinc-500'
                                  }`}>
                                    {step.status}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                        </div>
                      </div>
                    )}

                  </div>
                )}

              </div>

              {/* Bottom control metrics footer */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between text-zinc-500 font-mono text-[9px] z-10 relative">
                <div className="flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-luxury-neon-purple" />
                  <span>AETHER STOCHASTIC INFERENCE ENGINE PLATFORM</span>
                </div>
                <span>SSL SECURE TENANT MATRIX</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
