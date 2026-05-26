import Script from 'next/script';

export function Cookiebot() {
  const cbid = process.env.NEXT_PUBLIC_COOKIEBOT_ID ?? '25ce0a77-3f87-45dc-89c7-f0c013826cc7';
  if (!cbid) return null;

  return (
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid={cbid}
      data-blockingmode="auto"
      strategy="beforeInteractive"
    />
  );
}
