import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <section className="bg-paper py-32">
      <Container size="narrow" className="text-center">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-sol-500">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold text-dusk-900 sm:text-5xl">
          Page not found.
        </h1>
        <p className="mt-5 text-lg text-dusk-600 leading-relaxed">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
            Go home
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: 'outline-dark', size: 'lg' })}>
            Get a quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
