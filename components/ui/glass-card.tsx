import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'medium' | 'strong' | 'warm';
  hover?: boolean;
}

export default function GlassCard({ 
  children, 
  className, 
  variant = 'medium',
  hover = true 
}: GlassCardProps) {
  const variants = {
    light: 'glass-light',
    medium: 'glass-card',
    strong: 'glass-strong',
    warm: 'glass-warm'
  };

  return (
    <div
      className={cn(
        'rounded-lg transition-all duration-300',
        variants[variant],
        hover && 'hover:shadow-xl hover:shadow-black/10 hover:scale-[1.02]',
        className
      )}
    >
      {children}
    </div>
  );
}