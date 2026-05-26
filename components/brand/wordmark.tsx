import { cn } from '@/lib/utils';

interface WordmarkProps {
  className?: string;
  light?: boolean;
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Sun circle */}
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      {/* Rays */}
      <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark({ className, light }: WordmarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <SunIcon
        className={cn('h-7 w-7 flex-none', light ? 'text-sol-400' : 'text-sol-500')}
      />
      <span className="leading-none">
        <span
          className={cn(
            'font-display text-xl font-bold tracking-tight',
            light ? 'text-paper' : 'text-dusk-900'
          )}
        >
          August
        </span>
        <span
          className={cn(
            'ml-1.5 font-sans text-xl font-medium',
            light ? 'text-sol-300' : 'text-dusk-600'
          )}
        >
          Solar
        </span>
      </span>
    </span>
  );
}
