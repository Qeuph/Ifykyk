import { type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends (class extends Object {
  state: State;
  props: Props;
  constructor(props: Props) {
    super();
    this.props = props;
    this.state = { hasError: false };
  }
  setState(state: Partial<State> | ((prev: State) => State)) {
    if (typeof state === 'function') {
      this.state = (state as (prev: State) => State)(this.state);
    } else {
      this.state = { ...this.state, ...state };
    }
  }
  render(): ReactNode { return null; }
} as new (props: Props) => { state: State; props: Props; render(): ReactNode }) {
  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-luxury-black flex items-center justify-center p-6">
          <div className="max-w-md text-center">
            <h1 className="font-display text-3xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-zinc-400 text-sm mb-6">
              Our systems encountered an unexpected error. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-white hover:bg-zinc-200 text-luxury-black font-mono text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
