import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function Eyebrow({ children, className, light }: EyebrowProps) {
  return (
    <p className={cn(light ? 'eyebrow-light' : 'eyebrow', className)}>
      {children}
    </p>
  );
}
