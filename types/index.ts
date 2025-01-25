export interface SectionProps {
  className?: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export interface LoadingFallbackProps {
  height: string;
  className?: string;
}
