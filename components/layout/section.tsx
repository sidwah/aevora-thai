import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Container from './container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'none' | 'cream' | 'white' | 'glass-light' | 'glass-medium';
  id?: string;
  as?: 'section' | 'div' | 'main' | 'article' | 'aside';
}

const spacingClasses = {
  none: '',
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16 lg:py-20',
  lg: 'py-16 sm:py-20 lg:py-24',
  xl: 'py-20 sm:py-24 lg:py-32'
};

const backgroundClasses = {
  none: '',
  cream: 'bg-primary-cream',
  white: 'bg-secondary-white',
  'glass-light': 'glass-light',
  'glass-medium': 'glass-medium'
};

export default function Section({
  children,
  className,
  containerSize = 'lg',
  spacing = 'md',
  background = 'none',
  id,
  as: Component = 'section'
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        'relative w-full',
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </Component>
  );
}