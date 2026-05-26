import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/utils';

export const metadata = {
  title: 'Get a Free Solar Quote — August Solar, North Carolina',
  description:
    'Schedule your free home solar assessment with August Solar. We visit your home, assess your roof and energy use, and give you honest numbers. No obligation, no pressure.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Get a Quote', url: '/contact' }
        ]}
      />

      {/* Hero */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left: headline + what to expect */}
            <div className="lg:col-span-6">
              <Eyebrow>Free home assessment</Eyebrow>
              <h1 className="heading-xl mt-3">
                Honest numbers.<br />
                <span className="text-sol-600">No pressure.</span>
              </h1>
              <p className="body-lg mt-5">
                We visit your home, assess your roof and energy usage, and
                tell you exactly what a solar and storage system can do for
                you. Including if it is not the right fit.
              </p>

              {/* What to expect */}
              <div className="mt-10 space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dusk-400">
                  What happens next
                </p>
                {[
                  {
                    num: '1',
                    title: 'We contact you within one business day.',
                    body: 'After you reach out, a member of our team calls or emails to schedule a convenient time for your home assessment.'
                  },
                  {
                    num: '2',
                    title: 'In-home assessment. About one hour.',
                    body: 'We evaluate your roof, shading, electrical panel, and energy usage. We answer every question you have — no time limit.'
                  },
                  {
                    num: '3',
                    title: 'You receive a custom proposal.',
                    body: 'A full system design with production estimates, savings projections, financing options, and a clear price — no vague ranges.'
                  },
                  {
                    num: '4',
                    title: 'Your decision. Zero commitment.',
                    body: 'Take the proposal and think it over. Talk to other installers. We are confident in our numbers and we do not use pressure tactics.'
                  }
                ].map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sol-500 font-display text-sm font-bold text-dusk-950">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-display text-base font-semibold text-dusk-900">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm text-dusk-600 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: contact cards */}
            <div className="lg:col-span-6 lg:pt-4">
              <div className="rounded-2xl border border-dusk-100 bg-sol-50 p-8 shadow-elevated">
                <h2 className="font-display text-2xl font-bold text-dusk-900">
                  Start your free assessment
                </h2>
                <p className="mt-3 text-base text-dusk-600 leading-relaxed">
                  Reach out through any of the options below. We respond to
                  every inquiry within one business day.
                </p>

                <div className="mt-8 space-y-5">
                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.email}?subject=Free Solar Assessment Request`}
                    className="group flex items-start gap-5 rounded-xl border border-sol-200 bg-paper p-5 shadow-card transition-all hover:border-sol-400 hover:shadow-elevated"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-sol-100">
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-sol-700" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-dusk-900 group-hover:text-sol-700">
                        Email us
                      </p>
                      <p className="mt-0.5 text-sm text-dusk-500">
                        {siteConfig.email}
                      </p>
                      <p className="mt-1 text-xs text-dusk-400">
                        We respond within one business day
                      </p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5 rounded-xl border border-dusk-100 bg-paper p-5 shadow-card transition-all hover:border-sol-300 hover:shadow-elevated"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-dusk-100">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-dusk-700" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-dusk-900 group-hover:text-sol-700">
                        Connect on LinkedIn
                      </p>
                      <p className="mt-0.5 text-sm text-dusk-500">
                        August Solar
                      </p>
                      <p className="mt-1 text-xs text-dusk-400">
                        Message us directly
                      </p>
                    </div>
                  </a>
                </div>

                {/* Quick note */}
                <div className="mt-8 rounded-lg bg-dusk-950 px-5 py-4">
                  <p className="text-sm text-paper font-medium">
                    Free assessment. No obligation.
                  </p>
                  <p className="mt-1 text-xs text-dusk-300 leading-relaxed">
                    We do not charge for home assessments. You will receive a
                    complete, detailed proposal at no cost. You decide what to
                    do with it.
                  </p>
                </div>
              </div>

              {/* Serving note */}
              <div className="mt-6 rounded-xl border border-dusk-100 bg-paper p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dusk-400 mb-3">
                  Service area
                </p>
                <p className="text-sm text-dusk-600 leading-relaxed">
                  August Solar serves homeowners across North Carolina,
                  including Raleigh, Durham, Chapel Hill, Cary, Wake Forest,
                  Apex, Fuquay-Varina, and surrounding communities.
                  Not sure if we cover your area? Just ask.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ teaser */}
      <section className="bg-sol-50 py-16 sm:py-20">
        <Container size="tight">
          <div className="text-center">
            <Eyebrow>Have more questions?</Eyebrow>
            <h2 className="heading-md mt-3">We answered the most common ones.</h2>
            <p className="body-base mt-4 mx-auto max-w-md">
              Costs, warranties, storage, outages — read the FAQ on the home
              page or ask us directly on the assessment call.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#how-it-works"
                className={buttonVariants({ variant: 'primary', size: 'lg' })}
              >
                See how it works
              </Link>
              <Link
                href="/solar-storage"
                className={buttonVariants({ variant: 'outline-dark', size: 'lg' })}
              >
                Explore solar + storage
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
