import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { FaqJsonLd } from '@/components/seo/json-ld';

export const metadata = {
  title: 'August Solar — Residential Solar & Battery Storage Nationwide',
  description:
    'August Solar installs residential solar and battery storage across the United States. Power your home by day. Storage keeps the life you love running by night.',
  alternates: { canonical: '/' }
};

// ── SVG icons ─────────────────────────────────────────────────────────────────

function SunRaysIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <circle cx="32" cy="32" r="14" fill="currentColor" opacity="0.9" />
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.25" fill="none" />
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1" opacity="0.12" fill="none" strokeDasharray="4 4" />
      {[0,45,90,135,180,225,270,315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 32 + 22 * Math.cos(rad);
        const y1 = 32 + 22 * Math.sin(rad);
        const x2 = 32 + 30 * Math.cos(rad);
        const y2 = 32 + 30 * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"
          />
        );
      })}
    </svg>
  );
}

function BatteryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <rect x="6" y="16" width="46" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <rect x="52" y="24" width="6" height="16" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="10" y="20" width="22" height="24" rx="2" fill="currentColor" opacity="0.8" />
      <line x1="32" y1="28" x2="28" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="28" y1="36" x2="34" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="34" y1="36" x2="30" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <path d="M8 32L32 10L56 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 27V54H50V27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="38" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      {/* Solar panels on roof */}
      <rect x="20" y="22" width="9" height="6" rx="1" fill="currentColor" opacity="0.5" />
      <rect x="31" y="22" width="9" height="6" rx="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <path
        d="M32 10C20 10 10 20 10 32C10 44 20 54 32 54C40 54 47 50 51 44C46 45 40 44 36 40C30 34 29 25 32 18C31 15 31 12 32 10Z"
        fill="currentColor" opacity="0.8"
      />
      <circle cx="46" cy="16" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="54" cy="26" r="2" fill="currentColor" opacity="0.25" />
      <circle cx="52" cy="10" r="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

// ── Lifestyle moment icons ────────────────────────────────────────────────────

function CoffeeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect x="6" y="16" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M28 20h4a4 4 0 010 8h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 16V12M17 16V12M22 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="34" x2="28" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <path d="M8 24l3-8h18l3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="5" y="24" width="30" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="32" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="28" cy="32" r="3" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="18" x2="18" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="22" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LaptopIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect x="6" y="10" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 28h34l-3 4H6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <rect x="10" y="14" width="20" height="10" rx="1" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

function TVIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect x="4" y="8" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="8" y="12" width="24" height="14" rx="1" fill="currentColor" opacity="0.2" />
      <path d="M14 30v4M20 30v4M26 30v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="34" x2="30" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <path d="M5 16C10 10 14 8 20 8s10 2 15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 21c3-3 6-5 11-5s8 2 11 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 26c2-2 4-3 7-3s5 1 7 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="31" r="2.5" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 5L6 11v10c0 9 6 16 14 19 8-3 14-10 14-19V11L20 5z"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
      />
      <path d="M13 20l5 5 9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── FAQ data ──────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'How much does solar installation cost?',
    a: 'Every home is different. System size, roof orientation, and local incentives all affect the number. Most homeowners see payback in 6–10 years and lock in savings for 25+ years. The best way to get your number is a free in-home assessment — no obligation.'
  },
  {
    q: 'Do I need battery storage with solar?',
    a: 'You can go solar without storage, but we strongly recommend pairing them. Without a battery, your solar system shuts off when the grid goes down — even if the sun is shining. Storage means you keep the lights on, the fridge running, and everything you love powered through any outage.'
  },
  {
    q: 'How long does installation take?',
    a: 'Most residential installs are complete in one day. Permitting and utility interconnection approval typically takes 3–8 weeks depending on your county and utility.'
  },
  {
    q: 'What happens when the power goes out?',
    a: 'Without storage: your solar system shuts down for grid safety — you lose power like everyone else. With a battery system: your home switches to battery power automatically, in milliseconds. Most customers never notice the transition.'
  },
  {
    q: 'Is my roof right for solar?',
    a: 'We assess every home before quoting. Most roof types, angles, and orientations work. We will tell you honestly if your home is not a good solar candidate — we would rather lose a sale than set a customer up for disappointment.'
  },
  {
    q: 'What warranties come with the system?',
    a: '25-year production warranty on panels. 10–12 years on inverters. Battery system manufacturer warranty. Workmanship warranty from August Solar on all installation labor. We will be here for the life of the system.'
  }
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-dusk-950 pb-20 pt-24 sm:pb-28 sm:pt-32">
        {/* Amber sun-glow in upper right */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(251,191,36,0.22) 0%, rgba(245,158,11,0.08) 45%, transparent 70%)'
          }}
        />
        {/* Sky-blue ambient in lower left */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 65%)'
          }}
        />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Eyebrow light>Residential Solar &amp; Battery Storage</Eyebrow>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight tracking-tight text-paper sm:text-6xl lg:text-7xl">
              Power the life
              <br />
              <span className="text-sol-400">you love.</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-dusk-300">
              We install solar panels and battery storage systems for
              homeowners across the United States. Your home runs on the sun.
              Storage keeps everything running when the sun goes down.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={buttonVariants({ variant: 'primary', size: 'xl' })}
              >
                Get your free quote
              </Link>
              <Link
                href="#how-it-works"
                className={buttonVariants({ variant: 'outline', size: 'xl' })}
              >
                How it works
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="bg-sol-500">
        <Container className="py-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: '20+', label: 'Years combined experience' },
              { value: '500+', label: 'Homes powered' },
              { value: '25yr', label: 'Panel warranty' },
              { value: '$0', label: 'Down financing available' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-dusk-950">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs font-medium text-dusk-800">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Simple from start to finish</Eyebrow>
            <h2 className="heading-lg mt-3">
              Three steps to energy independence.
            </h2>
            <p className="body-lg mt-4">
              From our first visit to your first bill reduction — we handle every
              step of the process for you.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                icon: HomeIcon,
                title: 'We visit your home.',
                body: 'One hour. No pressure. We assess your roof, shading, energy usage, and savings potential. You get an honest answer on whether solar makes sense for your home.'
              },
              {
                step: '02',
                icon: SunRaysIcon,
                title: 'We design your system.',
                body: 'A custom solar plus storage system sized for your actual energy use and goals. We walk you through every line of the design and the numbers behind it.'
              },
              {
                step: '03',
                icon: BatteryIcon,
                title: 'We install and activate.',
                body: 'Professional crew. Clean worksite. Most homes are done in one day. We handle all permitting and utility interconnection so you never have to call the power company.'
              }
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-dusk-100 bg-paper p-8 shadow-card"
              >
                <span className="absolute right-6 top-6 font-display text-5xl font-bold text-sol-100 select-none">
                  {item.step}
                </span>
                <item.icon className="h-12 w-12 text-sol-500" />
                <h3 className="mt-5 font-display text-xl font-semibold text-dusk-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-dusk-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Day / Night split section ──────────────────────────────────────── */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Day panel */}
          <div className="bg-sky-50 px-8 py-16 sm:px-16 sm:py-24 lg:py-28">
            <SunRaysIcon className="h-16 w-16 text-sol-500" />
            <h2 className="mt-6 font-display text-3xl font-bold text-dusk-900 sm:text-4xl leading-tight">
              Solar powers<br />your day.
            </h2>
            <p className="mt-5 max-w-md text-lg text-dusk-600 leading-relaxed">
              From first light to sundown, your panels silently generate clean
              energy. Every kilowatt-hour your home generates is one you do not
              buy from the grid — at today&rsquo;s rates or tomorrow&rsquo;s.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                'Morning routine — fully solar-powered',
                'Home office running on the sun',
                'Appliances using clean energy all day',
                'Excess generation credited to your bill'
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-base text-dusk-700">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-sol-500" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Night panel */}
          <div className="bg-dusk-950 px-8 py-16 sm:px-16 sm:py-24 lg:py-28">
            <MoonIcon className="h-16 w-16 text-sol-400" />
            <h2 className="mt-6 font-display text-3xl font-bold text-paper sm:text-4xl leading-tight">
              Storage powers<br />
              <span className="text-sol-400">your night.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-dusk-300 leading-relaxed">
              When the sun sets, your battery system takes over — automatically,
              in milliseconds. No switches to flip. The things you love keep
              running. Including when the grid goes down.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                'Movie night on stored solar energy',
                'EV charged overnight from your battery',
                'Power outage? You never notice',
                'Pull from the grid only when you choose'
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-base text-dusk-300">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-sol-400" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Life you love grid ────────────────────────────────────────────── */}
      <section className="bg-sol-50 py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What&rsquo;s running right now</Eyebrow>
            <h2 className="heading-lg mt-3">
              Your solar system is working. Right now.
            </h2>
            <p className="body-lg mt-4">
              While you read this, a solar home somewhere is generating clean
              energy. Here is what that energy powers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: CoffeeIcon,
                title: 'Morning coffee',
                body: 'Hot coffee every morning, zero grid cost. Your panels start generating before you roll out of bed.'
              },
              {
                icon: CarIcon,
                title: 'EV charging',
                body: 'Wake up to a full charge every day. Your battery charges your car overnight — from solar you generated that afternoon.'
              },
              {
                icon: LaptopIcon,
                title: 'Home office',
                body: 'Video calls, cloud uploads, second monitors — all day, all in. Working from home costs you nothing extra.'
              },
              {
                icon: TVIcon,
                title: 'Movie night',
                body: 'Friday nights unplugged from the grid. Storage power means the movie keeps playing even if the neighborhood goes dark.'
              },
              {
                icon: WifiIcon,
                title: 'Everything connected',
                body: 'Wi-Fi routers, smart home devices, tablets, game consoles — all the things your household runs on, running on solar.'
              },
              {
                icon: ShieldIcon,
                title: 'Outage? What outage?',
                body: 'Battery backup switches on in milliseconds. Your neighbors lose power. You pour a second cup of coffee.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-sol-200 bg-paper p-7 shadow-card"
              >
                <item.icon className="h-10 w-10 text-sol-500" />
                <h3 className="mt-4 font-display text-lg font-semibold text-dusk-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-dusk-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Services overview ─────────────────────────────────────────────── */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What we install</Eyebrow>
            <h2 className="heading-lg mt-3">Everything your home needs.</h2>
            <p className="body-lg mt-4">
              We are a full-system installer. Solar panels, batteries, monitoring,
              and ongoing service — one company for the full 25 years.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Solar Panel Systems',
                body: 'Premium panels selected for your roof and climate. Designed for maximum production, minimum footprint, and 25+ years of reliable generation.',
                href: '/solar-storage#solar',
                accent: 'text-sol-500'
              },
              {
                title: 'Battery Storage',
                body: 'Home battery systems that give you real energy independence. Store your solar, power your night, protect your home from outages.',
                href: '/solar-storage#storage',
                accent: 'text-sky-600'
              },
              {
                title: 'System Monitoring',
                body: 'A mobile app that shows you exactly what your system is generating and using — in real time, every day.',
                href: '/solar-storage#monitoring',
                accent: 'text-ember-500'
              },
              {
                title: 'Maintenance & Support',
                body: '20+ years of combined experience means we know what breaks and how to prevent it. Annual checkups and priority service for all August Solar customers.',
                href: '/solar-storage#maintenance',
                accent: 'text-dusk-500'
              }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-dusk-100 bg-paper p-8 shadow-card transition-all hover:-translate-y-0.5 hover:border-sol-300 hover:shadow-elevated"
              >
                <h3 className={`font-display text-xl font-semibold ${item.accent}`}>
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-dusk-600 leading-relaxed">{item.body}</p>
                <p className="mt-5 text-sm font-semibold text-dusk-900 group-hover:underline">
                  Learn more
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-dusk-950 py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow light>Common questions</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold text-paper sm:text-4xl leading-tight">
              Straight answers.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-dusk-800 bg-dusk-900 p-7"
              >
                <h3 className="font-display text-lg font-semibold text-paper">
                  {faq.q}
                </h3>
                <p className="mt-3 text-base text-dusk-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-sol-500 py-24 sm:py-32">
        {/* Subtle warm radial */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)'
          }}
        />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-dusk-950 sm:text-5xl leading-tight">
              Ready to start saving?
            </h2>
            <p className="mt-5 max-w-lg text-xl text-dusk-800 leading-relaxed">
              Most homeowners see their first bill reduction within 30 days of
              activation. Schedule your free home assessment — no commitment, no
              pressure, just honest numbers.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={buttonVariants({ variant: 'dark', size: 'xl' })}
              >
                Get your free quote
              </Link>
              <Link
                href="/why-august"
                className="inline-flex h-14 items-center gap-2 px-8 text-base font-semibold text-dusk-900 underline-offset-4 hover:underline"
              >
                Why August Solar
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
