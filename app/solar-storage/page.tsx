import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/json-ld';

export const metadata = {
  title: 'Solar Panels & Battery Storage Installation | August Solar NC',
  description:
    'August Solar installs residential solar panel systems and battery storage. One company for solar design, installation, batteries, monitoring, and maintenance in North Carolina.',
  alternates: { canonical: '/solar-storage' }
};

const services = [
  {
    id: 'solar',
    label: 'Solar Panel Systems',
    headline: 'Premium panels. Maximum production. 25-year peace of mind.',
    description:
      'We design and install residential solar systems using top-tier panels selected for your specific roof, orientation, and local climate. Every system is custom-engineered for your home — not a catalog configuration dropped on your roof.',
    points: [
      'Custom system design based on your actual energy usage',
      'Premium monocrystalline panels from tier-1 manufacturers',
      'Roof assessment and structural verification before any installation',
      'Micro-inverter and string inverter options based on your roof',
      'Full electrical work from panels to main panel — no subcontractors',
      'Permit filing, utility interconnection, and inspection management',
      '25-year production warranty on all panels'
    ],
    specs: ['Monocrystalline', 'Micro-inverters', 'String inverters', 'SolarEdge', 'Enphase', 'SunPower']
  },
  {
    id: 'storage',
    label: 'Battery Storage Systems',
    headline: 'True energy independence. Day and night.',
    description:
      'A solar system without storage only works when the sun is shining. Add a battery and you own your energy around the clock. Your home keeps running during outages, you power your night with solar you generated that afternoon, and you pull from the grid only when it makes financial sense.',
    points: [
      'Home battery systems sized for your actual backup needs',
      'Automatic grid failover — switches in milliseconds, you never notice',
      'Whole-home or essential-loads backup configurations',
      'Time-of-use optimization to avoid peak grid rates',
      'Stacked battery configurations for extended backup duration',
      'Compatible with new installs and most existing solar systems',
      'Battery management system with real-time monitoring'
    ],
    specs: ['Tesla Powerwall', 'Enphase IQ Battery', 'Franklin WH', 'SolarEdge Energy Bank', 'Generac PWRcell']
  },
  {
    id: 'monitoring',
    label: 'System Monitoring',
    headline: 'See exactly what your system is doing. Every day.',
    description:
      'Your solar and battery system generates data every second. We set up monitoring that puts that data in your hands — production, consumption, battery state, and grid usage — in a clear mobile app. And our team monitors your system on the back end so we catch issues before you do.',
    points: [
      'Real-time production and consumption monitoring',
      'Mobile app with daily, monthly, and lifetime performance',
      'Battery state-of-charge tracking',
      'Grid import and export reporting',
      'Automated alerts for underperformance',
      'August Solar back-end monitoring with proactive service',
      'Annual performance review included for all customers'
    ],
    specs: ['Enphase Enlighten', 'SolarEdge mySolarEdge', 'Tesla app', 'Generac PWRview', 'eGauge']
  },
  {
    id: 'maintenance',
    label: 'Maintenance & Support',
    headline: 'We will be here for the life of your system.',
    description:
      'A solar system is a 25-year investment. Most require very little maintenance — but some require it eventually. Our team has 20+ years of combined experience, which means we have seen what breaks, why it breaks, and how to prevent it. We offer annual maintenance plans and priority service for all August Solar customers.',
    points: [
      'Annual inspection and cleaning service',
      'Inverter health check and firmware updates',
      'Battery performance testing',
      'Roof penetration and seal inspection',
      'Priority scheduling for August Solar customers',
      'Workmanship warranty on all installation labor',
      'System expansion and upgrade consultation'
    ],
    specs: ['All brands serviced', 'Residential', 'Emergency service', 'Annual plans']
  }
];

export default function SolarStoragePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Solar + Storage', url: '/solar-storage' }
        ]}
      />
      {services.map((svc) => (
        <ServiceJsonLd
          key={svc.id}
          name={svc.label}
          description={svc.description}
          url={`/solar-storage#${svc.id}`}
        />
      ))}

      {/* Hero */}
      <section className="bg-dusk-950 pb-16 pt-20 sm:pb-20 sm:pt-28">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow light>Solar + Storage</Eyebrow>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-paper sm:text-6xl">
              One system.<br />
              <span className="text-sol-400">Complete energy freedom.</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-dusk-300">
              Solar panels and battery storage designed, installed, and
              supported by one team. August Solar covers every part of the
              system for the life of your home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={buttonVariants({ variant: 'primary', size: 'lg' })}
              >
                Get a free quote
              </Link>
              <Link
                href="/why-august"
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                About August Solar
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      {services.map((svc, idx) => {
        const isAlt = idx % 2 === 1;
        return (
          <section
            key={svc.id}
            id={svc.id}
            className={isAlt ? 'bg-sol-50 py-20 sm:py-28' : 'bg-paper py-20 sm:py-28'}
          >
            <Container>
              <div className="grid gap-12 lg:grid-cols-12">
                {/* Left: label, headline, specs */}
                <div className="lg:col-span-4">
                  <p className="eyebrow">{svc.label}</p>
                  <h2 className="mt-3 font-display text-2xl font-bold text-dusk-900 sm:text-3xl leading-tight">
                    {svc.headline}
                  </h2>
                  <div className="mt-8">
                    <p className="eyebrow mb-3">Equipment we install</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.specs.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-dusk-100 bg-paper px-3 py-1 text-xs font-medium text-dusk-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: description, points */}
                <div className="lg:col-span-8">
                  <p className="text-lg text-dusk-600 leading-relaxed">
                    {svc.description}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {svc.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-base text-dusk-700 leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sol-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="bg-dusk-950 py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-paper sm:text-5xl leading-tight">
              Ready to see what<br />
              <span className="text-sol-400">your home can do?</span>
            </h2>
            <p className="mt-6 text-xl text-dusk-300 leading-relaxed">
              Schedule a free in-home assessment. We will design a system for
              your actual roof, your actual energy use, and your actual goals.
              No obligation. Honest numbers.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className={buttonVariants({ variant: 'primary', size: 'xl' })}
              >
                Get your free quote
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
