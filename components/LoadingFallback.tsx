interface LoadingFallbackProps {
  height: string;
}

export default function LoadingFallback({ height }: LoadingFallbackProps) {
  return (
    <div 
      style={{ 
        height, 
        width: '100%',
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%',
        animation: 'pulse 1.5s ease-in-out infinite'
      }}
    />
  );
}

// Add this to your global CSS

