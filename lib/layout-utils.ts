import { cn } from './utils';

// Spacing utility generator
export const spacing = {
  section: {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20 lg:py-24', 
    lg: 'py-20 sm:py-24 lg:py-32',
    xl: 'py-24 sm:py-32 lg:py-40'
  },
  container: {
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12'
  }
};

// Container size utility
export const containers = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-none'
};

// Glass effect utility
export const glassEffects = {
  light: 'glass-light',
  medium: 'glass-medium',
  strong: 'glass-strong',
  card: 'glass-card',
  panel: 'glass-panel'
};

// Grid responsive utilities
export const gridResponsive = {
  mobile1: 'grid-cols-1',
  mobile2: 'grid-cols-2', 
  tablet2: 'sm:grid-cols-2',
  tablet3: 'sm:grid-cols-3',
  desktop3: 'lg:grid-cols-3',
  desktop4: 'lg:grid-cols-4'
};

// Helper function to combine layout classes
export function createLayoutClasses(options: {
  container?: keyof typeof containers;
  spacing?: keyof typeof spacing.section;
  glass?: keyof typeof glassEffects;
  grid?: string[];
  className?: string;
}) {
  const classes = [];
  
  if (options.container) {
    classes.push(containers[options.container]);
  }
  
  if (options.spacing) {
    classes.push(spacing.section[options.spacing]);
  }
  
  if (options.glass) {
    classes.push(glassEffects[options.glass]);
  }
  
  if (options.grid) {
    classes.push(...options.grid);
  }
  
  return cn(...classes, options.className);
}

// Responsive image utility
export function getResponsiveImageSizes(sizes?: string) {
  return sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
}

// Section background utility
export const sectionBackgrounds = {
  default: 'bg-primary-cream',
  glass: 'bg-section',
  hero: 'bg-hero-gradient',
  white: 'bg-secondary-white',
  transparent: 'bg-transparent'
};

// Breakpoint utilities
export const breakpoints = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// Media query helper
export function createMediaQuery(breakpoint: keyof typeof breakpoints) {
  return `@media (min-width: ${breakpoints[breakpoint]})`;
}