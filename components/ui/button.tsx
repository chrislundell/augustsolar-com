import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sol-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary amber — main CTA on light backgrounds
        primary:
          'bg-sol-500 text-dusk-950 hover:bg-sol-400 active:bg-sol-600 shadow-card',
        // Dark navy — main CTA on amber/light backgrounds
        dark:
          'bg-dusk-900 text-paper hover:bg-dusk-800 active:bg-dusk-950 shadow-card',
        // Outline on dark backgrounds
        outline:
          'bg-transparent text-paper border border-paper/30 hover:border-sol-400 hover:text-sol-300',
        // Outline on light backgrounds
        'outline-dark':
          'bg-transparent text-dusk-900 border border-dusk-200 hover:border-sol-500 hover:text-sol-700',
        // Ghost
        ghost: 'text-dusk-800 hover:bg-sol-50 hover:text-dusk-900',
        // Link style
        link: 'text-sol-700 underline-offset-4 hover:underline'
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-base'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
