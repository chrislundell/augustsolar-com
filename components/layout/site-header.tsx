import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Wordmark } from '@/components/brand/wordmark';

const navLinks = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Solar + Storage', href: '/solar-storage' },
  { label: 'Why August', href: '/why-august' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-dusk-100 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <Container className="flex h-32 items-center justify-between">
        <Link href="/" aria-label="August Solar home">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dusk-500 transition-colors hover:text-dusk-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className={buttonVariants({ variant: 'primary', size: 'md' })}
        >
          Get a free quote
        </Link>
      </Container>
    </header>
  );
}
