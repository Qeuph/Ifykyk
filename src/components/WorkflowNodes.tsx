import { useState, useEffect } from 'react';
import { Cpu, Zap, Plus, Play, ChevronRight, CheckCircle2, RefreshCw, Layers, Sliders, Trash2 } from 'lucide-react';

interface WorkflowNode {
  id: string;
  name: string;
  type: 'trigger' | 'action' | 'utility';
  status: 'idle' | 'running' | 'completed' | 'failed';
  description: string;
  agentType: string;
}

export default function WorkflowNodes() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    {
      id: 'node-1',
      name: 'Figma File Watcher',
      type: 'trigger',
      status: 'idle',
      description: 'Listens for design commits, layout shifts, or key typography changes.',
      agentType: 'WatcherAgent v1.1'
    },
    {
      id: 'node-2',
      name: 'Vision Contrast Enhancer',
      type: 'action',
      status: 'idle',
      description: 'Parses assets, balances saturation, and applies an Obsidian luxury overlay.',
      agentType: 'PixelCore v2.4'
    },
    {
      id: 'node-3',
      name: 'Next.js Code Sync',
      type: 'action',
      status: 'idle',
      description: 'Synthesizes clean Tailwind layout modules and pushes them into GitHub.',
      agentType: 'DevCoder v5.1'
    },
  ]);

  const [simulationLogs, setSimulationLogs] = useState<string[]>([
    'System ready. Standing by to route instructions.'
  ]);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setSimulationLogs(['Initializing routing table...', 'Spawning micro-agent clusters...']);
    
    // Reset statuses
    setNodes(prev => prev.map(n => ({ ...n, status: 'idle' })));

    let nodeIndex = 0;
    const interval = setInterval(() => {
      if (nodeIndex < nodes.length) {
        // Change current node to running
        setNodes(prev => prev.map((n, idx) => {
          if (idx === nodeIndex) return { ...n, status: 'running' };
          if (idx === nodeIndex - 1) return { ...n, status: 'completed' };
          return n;
        }));

        const currentNodeName = nodes[nodeIndex].name;
        const currentAgent = nodes[nodeIndex].agentType;
        setSimulationLogs(prev => [
          ...prev, 
          `[${currentAgent}] Synthesizing processes inside "${currentNodeName}"...`,
          `[${currentAgent}] Execution block finished with code: 0x00`
        ]);
        
        nodeIndex++;
      } else {
        // Mark last node completed
        setNodes(prev => prev.map((n, idx) => {
          if (idx === nodes.length - 1) return { ...n, status: 'completed' };
          return n;
        }));
        setSimulationLogs(prev => [...prev, '✓ Sequence complete. Pipeline return factor synced.']);
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 2000);
  };

  const addNewNode = () => {
    if (isRunning) return;
    const items = [
      { name: 'Translation Guard', type: 'utility', desc: 'Auto-translates marketing copy into Japanese, French & Mandarin.', agent: 'Lingo v3.0' },
      { name: 'Slack Hook Dispatch', type: 'utility', desc: 'Dispatches high-fashion rich notifications with generated assets.', agent: 'Notify v1.2' },
      { name: 'CSS Purge Optimizer', type: 'utility', desc: 'Aligns brand variables and strips out redundant styling selectors.', agent: 'TailwindFix v4.0' }
    ];
    
    // Pick first item that isn't already added or random
    const pick = items[Math.floor(Math.random() * items.length)];
    const id = `node-${Date.now()}`;
    
    const newNode: WorkflowNode = {
      id,
      name: pick.name,
      type: 'action',
      status: 'idle',
      description: pick.desc,
      agentType: pick.agent
    };

    setNodes(prev => [...prev, newNode]);
    setSimulationLogs(prev => [...prev, `Added customized agent node "${pick.name}" mapped into sequence list.`]);
  };

  const removeNode = (id: string) => {
    if (isRunning) return;
    setNodes(prev => prev.filter(n => n.id !== id));
    setSimulationLogs(prev => [...prev, 'Deleted corresponding agent node from compilation graph.']);
  };

  const resetPipeline = () => {
    if (isRunning) return;
    setNodes(prev => prev.map(n => ({ ...n, status: 'idle' })));
    setSimulationLogs(['Standby mode. Pipeline systems flushed.']);
  };

  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-luxury-black/90 border-t border-white/5">
      {/* Absolute design visual spots */}
      <div className="absolute top-1/4 right-[10%] w-80 h-80 rounded-full ambient-spot-purple blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-3">
            AUTOMATION ORCHESTRATOR // 003
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight mb-4">
            Fluid Autonomous Workflows
          </h2>
          <p className="font-sans text-sm text-zinc-400 max-w-xl">
            Solder continuous chains of creation together. Our agentic microcomputer tracks events, rewrites source layers, and publishes complete portfolios automatically.
          </p>
        </div>

        {/* Workflow Sandbox Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN: Node visual editor block */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            <div className="bg-zinc-950/40 p-6 rounded-2xl border border-white/5 flex flex-col gap-6 relative">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="font-display text-xs font-bold uppercase text-white tracking-wider">
                    Creative Logic Chain Simulator
                  </span>
                </div>
                
                {/* Visual action triggers */}
                <div className="flex gap-2.5">
                  <button
                    onClick={addNewNode}
                    disabled={isRunning}
                    className="flex items-center gap-1 bg-white/5 hover:bg-white/10 text-white font-mono text-[10px] uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all disabled:opacity-40"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    ADD NODE
                  </button>

                  <button
                    onClick={runSimulation}
                    disabled={isRunning}
                    className="flex items-center gap-1.5 bg-white text-luxury-black font-mono text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all disabled:opacity-40 hover:bg-zinc-200"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    RUN PIPELINE
                  </button>
                </div>
              </div>

              {/* Dynamic visual graph list */}
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 p-4 rounded-xl border border-white/5 bg-zinc-900/10 relative overflow-x-auto min-h-[160px]">
                
                {nodes.map((node, index) => {
                  const isCurrent = node.status === 'running';
                  const isCompleted = node.status === 'completed';
                  
                  return (
                    <div key={node.id} className="flex-1 min-w-[190px] flex items-center gap-2 relative">
                      
                      {/* Grid card structure */}
                      <div className={`w-full p-4 rounded-xl transition-all duration-300 relative border flex flex-col justify-between h-full ${
                        isCurrent 
                          ? 'bg-blue-950/30 border-blue-500 shadow-md shadow-blue-500/10' 
                          : isCompleted 
                          ? 'bg-emerald-950/20 border-emerald-500/50' 
                          : 'bg-zinc-950/60 border-white/5 hover:border-white/10'
                      }`}>
                        
                        {/* Node status dot indicator */}
                        <div className="absolute top-3 right-3 flex items-center gap-1.5">
                          {isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                          )}
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            isCurrent ? 'bg-blue-400' : isCompleted ? 'bg-emerald-400' : 'bg-zinc-600'
                          }`}></span>
                        </div>

                        {/* Top Metadata */}
                        <div className="mb-2">
                          <span className="font-mono text-[7.5px] text-zinc-500 uppercase font-bold block mb-1">
                            {node.agentType}
                          </span>
                          <h4 className="font-display font-bold text-xs text-white leading-snug">
                            {node.name}
                          </h4>
                        </div>

                        <p className="font-sans text-[10px] text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                          {node.description}
                        </p>

                        <div className="flex items-center justify-between border-t border-white/5 pt-2 mt-auto">
                          <span className={`font-mono text-[8px] uppercase font-bold ${
                            isCurrent ? 'text-blue-400' : isCompleted ? 'text-emerald-400' : 'text-zinc-500'
                          }`}>
                            {node.status}
                          </span>
                          
                          {index > 1 && !isRunning && (
                            <button
                              onClick={() => removeNode(node.id)}
                              className="text-zinc-600 hover:text-red-400 transition-colors"
                              title="Delete Link"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>

                      </div>

                      {/* Connection arrows divider (only on desktop and not for the last item) */}
                      {index < nodes.length - 1 && (
                        <div className="hidden md:flex items-center justify-center text-zinc-700 mx-1">
                          <ChevronRight className={`w-5 h-5 ${isCompleted ? 'text-emerald-500' : 'text-zinc-700'}`} />
                        </div>
                      )}

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Console logging activity tracking block */}
          <div className="lg:col-span-4">
            
            <div className="bg-black border border-white/8 rounded-2xl p-6 h-full flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase font-extrabold flex items-center gap-1.5">
                    <RefreshCw className={`w-3 h-3 text-luxury-neon-purple ${isRunning ? 'animate-spin' : ''}`} />
                    Aether Core Relay logs
                  </span>
                  
                  <button
                    onClick={resetPipeline}
                    disabled={isRunning}
                    className="font-mono text-[8.5px] text-zinc-400 hover:text-white transition-colors"
                  >
                    FLUSH
                  </button>
                </div>

                {/* Simulated Logs Screen */}
                <div className="font-mono text-[10px] text-zinc-400 space-y-2 max-h-[190px] overflow-y-auto pr-1">
                  {simulationLogs.map((log, index) => (
                    <div key={index} className="flex gap-1.5 leading-normal">
                      <span className="text-zinc-600">❯</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer inside console pane */}
              <div className="border-t border-white/5 pt-4 mt-6">
                <div className="flex items-center justify-between font-mono text-[8.5px] text-zinc-500 mb-1">
                  <span>LATENT PIPELINE ROUTER</span>
                  <span>ONLINE</span>
                </div>
                <div className="w-full bg-zinc-900 rounded-full h-1 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-luxury-neon-blue to-luxury-neon-purple h-full transition-all duration-300"
                    style={{ width: isRunning ? '70%' : '10%' }}
                  ></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
