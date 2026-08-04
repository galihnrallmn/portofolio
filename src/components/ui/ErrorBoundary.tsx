import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-4xl font-bold">Something went wrong.</h1>

          <button
            onClick={() => window.location.reload()}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
