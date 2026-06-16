import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error inside ErrorBoundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-8 border border-red-500/20 bg-red-500/5 rounded-3xl text-center select-none font-sans max-w-xl mx-auto my-12">
          <h3 className="text-sm font-black text-red-500 uppercase tracking-widest mb-3">Section Rendering Error</h3>
          <p className="text-xs text-[var(--fg)]/60 leading-relaxed font-medium">
            Failed to render this section. This could be due to missing database entries or structural mutations.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
