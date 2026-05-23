import { Capability, DemoPreset, Feature, Testimonial, PricingPlan, FaqItem, UseCase } from './types';

export const METRICS = [
  { value: '340ms', label: 'Average Latency', description: 'Industry-leading real-time responsiveness' },
  { value: '1.2B', label: 'Assets Synthesized', description: 'Powering studios and designers globally' },
  { value: '99.99%', label: 'API Trust Score', description: 'Guaranteed mission-critical uptime' },
  { value: '25x', label: 'Workflow Velocity', description: 'Accelerating concept-to-production pipelines' },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'generative-vision',
    title: 'Generative Vision',
    description: 'Synthesize highly cinematic, high-fashion graphics and structural designs instantly with advanced spatial multi-modal models.',
    iconName: 'Sparkles',
    badge: 'Vision v4.2',
    stats: '8K UHD Resolution',
    accentColor: '#3b82f6',
    codeSnippet: `const frame = await aether.vision.synthesize({
  prompt: "minimal glass pavilion hovering in canyon, misty morning",
  aspectRatio: "16:9",
  fidelity: 0.98,
  guidance: 8.5
});`
  },
  {
    id: 'orchestration-logic',
    title: 'Autonomous Workflows',
    description: 'Deploy context-aware micro-agents to crawl assets, update source codes, chain production tasks, and trigger webhooks autonomously.',
    iconName: 'Cpu',
    badge: 'Agentic Core',
    stats: '250+ Parallel Agents',
    accentColor: '#8b5cf6',
    codeSnippet: `const workflow = await aether.agents.orchestrate({
  task: "Monitor brand mentions, write summary, layout PR, post to web",
  agents: ["Crawler", "Editorial", "LayoutManager"],
  maxHops: 12
});`
  },
  {
    id: 'linguistic-intelligence',
    title: 'Cognitive Copy',
    description: 'Generate multi-tier copywriting, brand manifests, technical documentations, and code snippets tuned perfectly to your tone of voice.',
    iconName: 'MessageSquare',
    badge: 'Cognitive v5.0',
    stats: '99th Percentile Nuance',
    accentColor: '#06b6d4',
    codeSnippet: `const branding = await aether.cognitive.generate({
  topic: "Next-gen spatial interfaces",
  tone: ["Cinematic", "Sargasso-Dark", "Minimalist"],
  deliverable: "brand-manifesto"
});`
  }
];

export const DEMO_PRESETS: DemoPreset[] = [
  {
    id: 'preset-cyberpunk',
    type: 'image',
    title: 'Cyberpunk Wanderer',
    prompt: '/imagine a breathtaking cinematic portrait of a neon cyberpunk nomad looking at glowing ancient digital calligraphy',
    steps: [
      'Deconstructing linguistic prompt tokens...',
      'Mapping latent visual vectors (Dimension: 512)...',
      'Executing iterative noise diffusion steps (30 iterations)...',
      'Compiling spatial detail grids & upscaling textures to 8K...',
    ],
    durationMs: 3500,
    output: {
      imageUrl: '/src/assets/images/cyberpunk_neon_1779541769409.png',
      textContent: 'Synthesis completed in 1.48s. Style signature: Cinematic Noir. Color Profile: Vivid Gold & Deep Amber.'
    }
  },
  {
    id: 'preset-architecture',
    type: 'image',
    title: 'Floating Pavilion',
    prompt: '/imagine architectural rendering of a minimalist glass pavilion hovering over a misty green forest canyon',
    steps: [
      'Decompressing structural blueprints database...',
      'Solving gravity equations and mist atmospheric light scattering...',
      'Running shadow raytracing at 64 samples per pixel...',
      'Perfecting photorealistic ambient occlusion...',
    ],
    durationMs: 4000,
    output: {
      imageUrl: '/src/assets/images/gravity_architecture_1779541793259.png',
      textContent: 'Synthesis completed in 1.92s. Structure: Spatial Glass Tension. Lighting: Soft Sunrise Diffuse.'
    }
  },
  {
    id: 'preset-copy',
    type: 'text',
    title: 'Brand Manifesto',
    prompt: '/write create a high-fashion luxury tech manifesto introducing multi-modal creative neural networks',
    steps: [
      'Evaluating premium tone vectors (luxurious, minimalist, cinematic)...',
      'Synthesizing semantic hook paragraphs...',
      'Polishing rhythmic flow and professional word structures...',
    ],
    durationMs: 2500,
    output: {
      textLength: 124,
      textContent: `THE FUTURE BELONGS TO THE VISIONARIES.

We do not simply build tools; we forge spatial conduits of pure design. Aether is the bridge between human imagination and synthetic form. For the global creators, the luxury architects, the ultimate developers:

A pristine, silent intelligence is here. Breathe your prompt into existence.`
    }
  },
  {
    id: 'preset-workflow',
    type: 'workflow',
    title: 'Asset Pipeline Auto',
    prompt: '/automate watch figma project, summarize change, upscale components, push to nextjs github repository',
    steps: [
      'Initializing Figma Webhook Trigger...',
      'Spawning 3 micro-agents: FigmaExtractor, UpscaleVision, GitCommitter...',
      'Simulating task execution logs...'
    ],
    durationMs: 3800,
    output: {
      nodesCount: 4,
      connectionsCount: 3,
      textContent: 'Workflow running autonomously. Last sync felt 2.4s ago. Uptime: 100%.',
      automatedSteps: [
        { name: 'Parse Figma Design Trees', status: 'completed' },
        { name: 'Upscale Raster Assets (8K HD)', status: 'completed' },
        { name: 'Refactor React Components', status: 'active' },
        { name: 'Github Commit & Push Branch', status: 'pending' }
      ]
    }
  }
];

export const USE_CASES: UseCase[] = [
  {
    id: 'creative-studios',
    category: 'Creative Studios',
    title: 'Symphony-grade Visual Production',
    description: 'Transform quick concept ideation into elite-tier production layouts, cinematic mood boards, and immersive visual backdrops in seconds instead of weeks.',
    metric: '92%',
    metricLabel: 'Reduction in initial design ideation time',
    visualHighlight: 'Aether Canvas Workspace'
  },
  {
    id: 'industrial-design',
    category: 'Spatial Design',
    title: 'Next-Gen Architectural Blueprints',
    description: 'Architects drop material constraints and environmental variables into Aether to render gorgeous organic geometry layouts aligned perfectly to luxury sensibilities.',
    metric: '10x',
    metricLabel: 'Faster client aesthetic approvals',
    visualHighlight: 'Spatial Engine Suite'
  },
  {
    id: 'automated-enterprises',
    category: 'Automated Operations',
    title: 'Self-Updating Campaign Assets',
    description: 'Keep your digital spaces feeling alive. Automate agents to check live conversion analytics, rewrite headers, and re-theme key banners dynamically.',
    metric: '3.4M',
    metricLabel: 'Tasks automated per hour continuously',
    visualHighlight: 'Agentic Control Center'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'real-time-sub-second',
    title: 'Sub-Second Synthesis',
    description: 'Leveraging highly tuned custom cluster inference, visual tokens materialize almost faster than the cursor can blink.',
    chip: 'Latency',
    iconName: 'Zap'
  },
  {
    id: 'context-buffer',
    title: '2 Million Token Buffer',
    description: 'Ingest full design systems, code repositories, manuals, and entire media libraries to feed your active agents with absolute state consistency.',
    chip: 'Context Window',
    iconName: 'Layers'
  },
  {
    id: 'deterministic-seed',
    title: 'Aesthetic Alignment Controller',
    description: 'Maintain absolute creative consistency across thousands of assets. Enforce style seeds, brand guidelines, and color boards perfectly.',
    chip: 'Precision',
    iconName: 'Sliders'
  },
  {
    id: 'hybrid-compute-native',
    title: 'Obsidian Security Shield',
    description: 'Enterprise grade sandboxing. Your input vectors and trained parameters are strictly yours — never leaked, never reused for base training.',
    chip: 'Security',
    iconName: 'ShieldAlert'
  },
  {
    id: 'sdk-integration-one-click',
    title: 'Developer Experience (DX+)',
    description: 'Elegant TypeScript, Python, and Rust SDKs let you orchestrate powerful agents directly in your existing source control workflow.',
    chip: 'Integration',
    iconName: 'Codexml'
  },
  {
    id: 'infinite-variations',
    title: 'Stochastic Fine-Tuning',
    description: 'Optimize styles on-the-fly. Blend up structures, contrast levels, and ambient light values in a reactive tactile user workspace.',
    chip: 'Variables',
    iconName: 'Compass'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Helena Vance',
    role: 'Principal Creative Director',
    company: 'Vanguard Brand Labs',
    quote: '"Before Aether, our visual brainstorming and rendering took up to twelve business days. We now render spatial branding and beautiful interactive prototypes synchronously in front of our key partners. It feels like touching the future of design."',
    avatarSeed: 'helena',
    accentColor: '#3b82f6'
  },
  {
    id: 't-2',
    name: 'Marcus Kaelen',
    role: 'VP of Platform Architecture',
    company: 'Hyperion Automation',
    quote: '"We connected Aether\'s Multi-Modal Agent to our continuous delivery streams. It tracks production performance metrics and writes optimization pull requests autonomously with perfect style and type safety. Absolutely unbelievable."',
    avatarSeed: 'marcus',
    accentColor: '#8b5cf6'
  },
  {
    id: 't-3',
    name: 'Serena Thorne',
    role: 'Lead Architect',
    company: 'Aetherius Spatial Design Group',
    quote: '"The spatial light scattering models inside Aether are significantly superior to standard engines. Renders are not merely realistic — they showcase a deep artistic maturity in natural shadows and physics representation."',
    avatarSeed: 'serena',
    accentColor: '#06b6d4'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'tier-personal',
    name: 'CREATIVE',
    price: '$49',
    period: '/month',
    description: 'Perfect for elite individual designers, copywriters, and developers crafting high-quality assets.',
    features: [
      'Sub-second text and asset generation',
      'Unified Aether vision models (up to 4K)',
      '1,000 credits / month premium computation',
      'Advanced manual aesthetic overrides',
      'Core TypeScript / Python SDK access',
    ],
    cta: 'Acquire Intelligence',
    isPopular: false,
    accentColor: '#3b82f6'
  },
  {
    id: 'tier-studio',
    name: 'STUDIO PLUS',
    price: '$199',
    period: '/month',
    description: 'Engineered specifically for luxury studios, agencies, and high-velocity engineering groups.',
    features: [
      'Infinite generation credits',
      '8K High-definition spatial vision outputs',
      'Full Multi-Modal Agent orchestrator access',
      'Dedicated private inference nodes',
      'Custom style seed training models',
      'VIP priority developer rendering support',
    ],
    cta: 'Empower Your Studio',
    isPopular: true,
    accentColor: '#8b5cf6'
  },
  {
    id: 'tier-enterprise',
    name: 'SECURE CORE',
    price: 'Custom',
    period: '',
    description: 'Bespoke deployments for international companies requiring air-gapped security and customized hardware clusters.',
    features: [
      'Fully isolated local tenant clusters',
      'Zero-retention data sharing guidelines',
      'In-house fine-tuning pipelines',
      'Custom hardware clusters allocation',
      'Bespoke service level agreements (SLAs)',
      '24/7 dedicated engineering team onboarding',
    ],
    cta: 'Deploy Custom Engine',
    isPopular: false,
    accentColor: '#06b6d4'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-compute',
    category: 'Technology',
    question: 'How is sub-second generation speed accomplished?',
    answer: 'We deploy a custom model pipeline leveraging distributed speculative decoding and highly streamlined attention maps. This reduces the number of inference hops per token dramatically, delivering text layouts and image structures in less than 350ms.'
  },
  {
    id: 'faq-privacy',
    category: 'Security',
    question: 'Is my input material or source telemetry used for AI model training?',
    answer: 'Absolutely not. We guarantee total obsidian privacy. All uploaded design systems, codebases, guidelines, and input tokens are strictly processed in isolated, sandboxed runtime memories that are terminated immediately after delivery.'
  },
  {
    id: 'faq-seeds',
    category: 'Aesthetics',
    question: 'Can we enforce our company’s exact brand aesthetic rules?',
    answer: 'Yes. In the Studio tier, you can lock down deterministic aesthetic seeds. You can upload 10-15 reference design images or components to train customized latent spaces, guaranteeing that all agent actions match your visual direction perfectly.'
  },
  {
    id: 'faq-agents',
    category: 'Automation',
    question: 'How do the multi-agent systems interact with real codebases?',
    answer: 'Our agent orchestrations communicate securely through Git webhooks or system APIs utilizing specialized tooling agents. They read schema constraints, compile drafts, and verify local compilation before pushing pull requests for human review.'
  }
];
