export interface Capability {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  stats: string;
  codeSnippet: string;
  accentColor: string;
}

export interface DemoPreset {
  id: string;
  type: 'image' | 'text' | 'workflow';
  title: string;
  prompt: string;
  steps: string[];
  durationMs: number;
  output: {
    imageUrl?: string;
    textLength?: number;
    textContent?: string;
    nodesCount?: number;
    connectionsCount?: number;
    automatedSteps?: Array<{ name: string; status: 'completed' | 'active' | 'pending' }>;
  };
}

export interface UseCase {
  id: string;
  category: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  visualHighlight: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  chip: string;
  iconName: string;
  interactiveMetric?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarSeed: string;
  accentColor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  isPopular: boolean;
  accentColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
