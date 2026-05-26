import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata = {
  title: 'Why August Solar — 20+ Years Experience, Honest Installation',
  description:
    'August Solar brings over 20 years of combined experience to every residential solar and battery storage installation. Senior-certified installers. No subcontractors. Honest assessments.',
  alternates: { canonical: '/why-august' }
};

const values = [
  {
    title: 'We are honest about fit.',
    body: 'Not every home is right for solar. If your roof orientation, shading, or energy use makes solar a poor investment, we will tell you that on the assessment — before you spend a dollar. We would rather lose a sale than have a customer regret their decision.'
  },
  {
    title: 'No subcontractors.',
    body: 'Every installation is done by our own team. We do not call a crew from a staffing app and send them to your roof. The people we send are our employees, trained on our standards, covered by our warranty. That matters when something needs fixing six years from now.'
  },
  {
    title: 'We handle everything.',
    body: 'Permits, utility interconnection, HOA approvals, inspection scheduling — we manage the entire process. You should not have to make a single call to the power company. Most customers are activated without ever dealing with a single piece of paperwork.'
  },
  {
    title: 'Full-system for life.',
    body: 'Solar panels are a 25-year investment. Most companies sell you the system and move on. We stay. Annual maintenance plans, priority service, and a team that knows your specific installation — because we installed it.'
  },
  {
    title: 'Storage is our specialty.',
    body: 'Anyone can install solar panels. Battery storage is where the real energy independence lives, and it is also where most installers cut corners. We are fully certified on the major battery platforms and size every storage system around your specific backup needs — not a one-size-fits-all package.'
  }
];

const credentials = [
  'NABCEP Certified Installers',
  'Licensed Electrical Contractors',
  'Tesla Powerwall Certified',
  'Enphase Platinum Installer',
  'SolarEdge Preferred Installer',
  'Franklin Electric Certified',
  'BBB Accredited Business',
  'Fully Bonded and Insured'
];

export default function WhyAugustPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Why August', url: '/why-august' }
        ]}
      />

      {/* Hero */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-12">
            {/* Sun emblem */}
            <div className="flex justify-center lg:col-span-4 lg:justify-start">
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-sol-500 shadow-elevated">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  aria-hidden="true"
                  className="h-32 w-32 text-dusk-950"
                >
                  <circle cx="40" cy="40" r="16" fill="currentColor" />
                  <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="2" opacity="0.3" fill="none" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                    const rad = (deg * Math.PI) / 180;
                    const x1 = 40 + 28 * Math.cos(rad);
                    const y1 = 40 + 28 * Math.sin(rad);
                    const x2 = 40 + 38 * Math.cos(rad);
                    const y2 = 40 + 38 * Math.sin(rad);
                    return (
                      <line
                        key={deg}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-8">
              <Eyebrow>Why August Solar</Eyebrow>
              <h1 className="heading-xl mt-3">
                Experts who care about your outcome.
              </h1>
              <div className="mt-7 space-y-5 text-lg text-dusk-600 leading-relaxed">
                <p>
                  August Solar was built around a simple belief: homeowners
                  deserve honest advice about solar, not a sales pitch. The solar
                  industry is full of companies optimized for installation volume.
                  We are optimized for homeowners who made a 25-year investment
                  and need to know it was the right one.
                </p>
                <p>
                  Our team brings over 20 years of combined installation
                  experience to every job. We have seen what happens when systems
                  are undersized, when batteries are poorly configured, when
                  roofs were not properly assessed before panels went up. We
                  build the safeguards into every project from the first visit.
                </p>
                <p>
                  We cover the full system — panels, storage, monitoring, and
                  long-term support — because energy independence is not a
                  product you buy once. It is a relationship you maintain. We are
                  here for the full 25 years.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: 'primary', size: 'lg' })}
                >
                  Get your free quote
                </Link>
                <Link
                  href="/solar-storage"
                  className={buttonVariants({ variant: 'outline-dark', size: 'lg' })}
                >
                  See what we install
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-sol-50 py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="heading-md mt-3">
              Five things that are non-negotiable.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-sol-200 bg-paper p-7 shadow-card"
              >
                <h3 className="font-display text-lg font-bold text-dusk-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-dusk-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Credentials */}
      <section className="bg-dusk-950 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow light>Credentials</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold text-paper sm:text-4xl leading-tight">
                Certified on every<br />platform we install.
              </h2>
              <p className="mt-5 text-lg text-dusk-300 leading-relaxed">
                We do not sell products we are not certified to install and
                service. Every credential on this list is current, maintained,
                and required by us — not by the manufacturer.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: 'primary', size: 'lg' })}
                >
                  Schedule your assessment
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {credentials.map((cred) => (
                  <div
                    key={cred}
                    className="flex items-center gap-3 rounded-lg border border-dusk-800 bg-dusk-900 px-5 py-4"
                  >
                    <span className="h-2 w-2 flex-none rounded-full bg-sol-400" />
                    <span className="text-sm font-medium text-paper">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-paper py-24 sm:py-32">
        <Container size="narrow" className="text-center">
          <Eyebrow>Ready to start</Eyebrow>
          <h2 className="heading-lg mt-3">
            One conversation. Honest numbers. No pressure.
          </h2>
          <p className="body-lg mt-5 mx-auto max-w-lg">
            Schedule your free home assessment. We will tell you exactly what
            solar can do for your specific home, your specific energy use, and
            your specific goals — including if solar is not the right fit.
          </p>
          <div className="mt-9">
            <Link
              href="/contact"
              className={buttonVariants({ variant: 'primary', size: 'xl' })}
            >
              Get your free quote
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
