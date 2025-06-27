import React, { Component } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-md w-full space-y-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Something went wrong</h1>
            <p className="text-muted-foreground">
              We're sorry, but an unexpected error occurred. Please try refreshing the page or contact support if the problem persists.
            </p>
            <div className="pt-4">
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="mr-2"
              >
                Refresh Page
              </Button>
              <Button onClick={this.handleReset}>Try Again</Button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left text-sm">
                <summary className="cursor-pointer text-muted-foreground">Error details</summary>
                <pre className="mt-2 p-3 bg-muted/50 rounded-md overflow-auto text-xs">
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Add display name for better debugging
ErrorBoundary.displayName = 'ErrorBoundary';
