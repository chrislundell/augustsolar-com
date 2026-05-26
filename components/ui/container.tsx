import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'tight' | 'narrow';
}

export function Container({
  size = 'default',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        size === 'default' && 'container',
        size === 'tight' && 'container-tight',
        size === 'narrow' && 'container-narrow',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'default' | 'tight' | 'narrow';
  background?: 'paper' | 'warm' | 'dark' | 'sky' | 'dusk';
}

export function Section({
  size,
  background = 'paper',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'section-padding',
        background === 'paper' && 'bg-paper',
        background === 'warm' && 'bg-sol-50',
        background === 'dark' && 'bg-dusk-950 text-paper',
        background === 'sky' && 'bg-sky-50',
        background === 'dusk' && 'bg-dusk-900 text-paper',
        className
      )}
      {...props}
    >
      <Container size={size}>{children}</Container>
    </section>
  );
}
