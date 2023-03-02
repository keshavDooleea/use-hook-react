import { Component, ReactElement } from "react";

interface Props {
  children: ReactElement;
  fallback?: ReactElement;
}

interface State {
  hasError: boolean;
  error: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: string): State {
    return { hasError: true, error };
  }

  public render(): ReactElement | undefined {
    if (this.state.hasError) {
      return this.state.error ? (
        <p>Erreur: {this.state.error}</p>
      ) : (
        this.props.fallback
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
