'use client';

import { cn } from '@/lib/utils';

interface BackgroundElementsProps {
  variant?: 'default' | 'hero' | 'minimal' | 'decorative';
  animated?: boolean;
  className?: string;
}

export default function BackgroundElements({ 
  variant = 'default', 
  animated = true,
  className 
}: BackgroundElementsProps) {
  const baseClasses = "fixed inset-0 -z-10 pointer-events-none";
  
  if (variant === 'minimal') {
    return (
      <div className={cn(baseClasses, className)}>
        <div className="absolute inset-0 bg-primary-cream" />
        <div className="absolute inset-0 bg-glass-decoration opacity-30" />
      </div>
    );
  }
  
  if (variant === 'hero') {
    return (
      <div className={cn(baseClasses, className)}>
        {/* Hero gradient background */}
        <div className="absolute inset-0 bg-hero-gradient" />
        
        {/* Large floating elements for hero sections */}
        <div className={cn(
          "absolute top-10 left-10 h-96 w-96 rounded-full bg-primary-brown/6 blur-3xl",
          animated && "animate-float"
        )} />
        <div className={cn(
          "absolute bottom-10 right-10 h-80 w-80 rounded-full bg-accent-gold/8 blur-3xl",
          animated && "animate-float [animation-delay:3s]"
        )} />
        <div className={cn(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-secondary-warm-brown/4 blur-3xl",
          animated && "animate-float [animation-delay:6s]"
        )} />
        
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-glass-decoration opacity-40" />
      </div>
    );
  }
  
  if (variant === 'decorative') {
    return (
      <div className={cn(baseClasses, className)}>
        {/* Main background */}
        <div className="absolute inset-0 bg-section" />
        
        {/* Multiple decorative elements */}
        <div className={cn(
          "absolute top-0 left-1/4 h-72 w-72 rounded-full bg-primary-brown/8 blur-2xl",
          animated && "animate-float"
        )} />
        <div className={cn(
          "absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent-gold/6 blur-2xl",
          animated && "animate-float [animation-delay:2s]"
        )} />
        <div className={cn(
          "absolute top-1/3 right-1/3 h-48 w-48 rounded-full bg-secondary-warm-brown/5 blur-xl",
          animated && "animate-float [animation-delay:4s]"
        )} />
        <div className={cn(
          "absolute bottom-1/3 left-1/3 h-56 w-56 rounded-full bg-primary-brown/4 blur-2xl",
          animated && "animate-float [animation-delay:6s]"
        )} />
        
        {/* Subtle geometric patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary-brown/10 rounded-lg rotate-45 blur-sm" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-accent-gold/15 rounded-full blur-sm" />
        
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-glass-decoration opacity-50" />
      </div>
    );
  }
  
  // Default variant
  return (
    <div className={cn(baseClasses, className)}>
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-section" />
      
      {/* Floating decorative elements */}
      <div className={cn(
        "absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-brown/8 blur-3xl",
        animated && "animate-float"
      )} />
      <div className={cn(
        "absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent-gold/6 blur-3xl",
        animated && "animate-float [animation-delay:2s]"
      )} />
      <div className={cn(
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-secondary-warm-brown/5 blur-3xl",
        animated && "animate-float [animation-delay:4s]"
      )} />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-glass-decoration" />
    </div>
  );
}