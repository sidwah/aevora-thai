import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'glass' | 'gradient';
  decorativeElements?: boolean;
}

const backgroundClasses = {
  default: 'bg-primary-cream',
  glass: 'bg-section',
  gradient: 'bg-warm-gradient'
};

export default function PageWrapper({
  children,
  className,
  background = 'default',
  decorativeElements = true
}: PageWrapperProps) {
  return (
    <div className={cn('relative min-h-screen', backgroundClasses[background], className)}>
      {/* Decorative Background Elements */}
      {decorativeElements && (
        <div className="fixed inset-0 -z-10">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-section" />
          
          {/* Floating decorative elements for glass to blur */}
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-brown/8 blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent-gold/6 blur-3xl animate-float [animation-delay:2s]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-secondary-warm-brown/5 blur-3xl animate-float [animation-delay:4s]" />
          
          {/* Texture overlay */}
          <div className="absolute inset-0 bg-glass-decoration" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}