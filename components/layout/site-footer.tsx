import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Wordmark } from '@/components/brand/wordmark';
import { siteConfig } from '@/lib/utils';

const links = {
  Company: [
    { label: 'Why August Solar', href: '/why-august' },
    { label: 'Solar + Storage', href: '/solar-storage' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Get a Quote', href: '/contact' }
  ],
  Services: [
    { label: 'Solar Panel Installation', href: '/solar-storage#solar' },
    { label: 'Battery Storage', href: '/solar-storage#storage' },
    { label: 'System Monitoring', href: '/solar-storage#monitoring' },
    { label: 'Maintenance Plans', href: '/solar-storage#maintenance' }
  ],
  Contact: [
    { label: 'Get a free quote', href: '/contact' },
    { label: siteConfig.email, href: `mailto:${siteConfig.email}` }
  ]
};

export function SiteFooter() {
  return (
    <footer className="border-t border-dusk-100 bg-dusk-950 text-paper">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark light />
            <p className="mt-4 max-w-xs text-sm text-dusk-300 leading-relaxed">
              Solar panels and battery storage for homeowners who want energy
              independence. Power the life you love — day and night.
            </p>
            <p className="mt-4 text-xs text-dusk-500">
              Serving North Carolina and surrounding areas.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="lg:col-span-2">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-dusk-400">
                {group}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-dusk-300 hover:text-sol-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-dusk-800 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-dusk-500">
            &copy; {new Date().getFullYear()} August Solar. All rights reserved.
          </p>
          <p className="text-xs text-dusk-600">
            Clean energy for a cleaner future.
          </p>
        </div>
      </Container>
    </footer>
  );
}
