import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface FlexProps {
  children: ReactNode;
  className?: string;
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: {
    sm?: { direction?: FlexProps['direction']; align?: FlexProps['align']; justify?: FlexProps['justify'] };
    md?: { direction?: FlexProps['direction']; align?: FlexProps['align']; justify?: FlexProps['justify'] };
    lg?: { direction?: FlexProps['direction']; align?: FlexProps['align']; justify?: FlexProps['justify'] };
  };
}

const directionClasses = {
  row: 'flex-row',
  col: 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'col-reverse': 'flex-col-reverse'
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
  stretch: 'items-stretch'
};

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly'
};

const gapClasses = {
  none: 'gap-0',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12'
};

export default function Flex({
  children,
  className,
  direction = 'row',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  gap = 'none',
  responsive
}: FlexProps) {
  const responsiveClassNames = responsive ? [
    responsive.sm?.direction && `sm:${directionClasses[responsive.sm.direction]}`,
    responsive.sm?.align && `sm:${alignClasses[responsive.sm.align]}`,
    responsive.sm?.justify && `sm:${justifyClasses[responsive.sm.justify]}`,
    responsive.md?.direction && `md:${directionClasses[responsive.md.direction]}`,
    responsive.md?.align && `md:${alignClasses[responsive.md.align]}`,
    responsive.md?.justify && `md:${justifyClasses[responsive.md.justify]}`,
    responsive.lg?.direction && `lg:${directionClasses[responsive.lg.direction]}`,
    responsive.lg?.align && `lg:${alignClasses[responsive.lg.align]}`,
    responsive.lg?.justify && `lg:${justifyClasses[responsive.lg.justify]}`
  ].filter(Boolean) : [];

  return (
    <div
      className={cn(
        'flex',
        directionClasses[direction],
        alignClasses[align],
        justifyClasses[justify],
        wrap && 'flex-wrap',
        gapClasses[gap],
        ...responsiveClassNames,
        className
      )}
    >
      {children}
    </div>
  );
}