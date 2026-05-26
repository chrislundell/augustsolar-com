import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { LocalBusinessJsonLd, WebSiteJsonLd } from '@/components/seo/json-ld';
import { GA4 } from '@/components/analytics/ga4';
import { Cookiebot } from '@/components/analytics/cookiebot';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.longName} — ${siteConfig.hero}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'solar panel installation',
    'battery storage',
    'residential solar',
    'home solar',
    'solar energy',
    'energy storage',
    'solar battery backup',
    'energy independence',
    'North Carolina solar',
    'Raleigh solar'
  ],
  authors: [{ name: 'August Solar', url: siteConfig.url }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.longName} — ${siteConfig.hero}`,
    description: siteConfig.description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'August Solar — Residential Solar & Battery Storage'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.longName} — ${siteConfig.hero}`,
    description: siteConfig.description,
    images: ['/opengraph-image']
  },
  alternates: {
    canonical: siteConfig.url
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: '#f59e0b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Cookiebot />
        <link rel="preconnect" href="https://consent.cookiebot.com" />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-sol-500 focus:px-4 focus:py-2 focus:text-dusk-950 focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <GA4 />
      </body>
    </html>
  );
}
