import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#080b22',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Amber radial glow — the sun */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(251,191,36,0.35) 0%, rgba(245,158,11,0.12) 45%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        {/* Secondary sky-blue glow */}
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -40,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 65%)',
            pointerEvents: 'none'
          }}
        />

        {/* Amber accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 50%, #f97316 100%)'
          }}
        />

        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              background: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span style={{ fontSize: 22, fontWeight: 900, color: '#080b22', fontFamily: 'serif', lineHeight: 1 }}>A</span>
          </div>
          <span style={{ fontSize: 32, fontWeight: 700, color: '#fefdfb', fontFamily: 'serif', letterSpacing: '-0.02em' }}>
            August
            <span style={{ fontFamily: 'sans-serif', fontWeight: 400, color: '#fcd34d', marginLeft: 8 }}>Solar</span>
          </span>
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: '#fefdfb',
            fontFamily: 'serif',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: 820,
            marginBottom: 20
          }}
        >
          Power the life you love.
        </div>

        <div
          style={{
            fontSize: 24,
            color: '#93c5fd',
            fontFamily: 'sans-serif',
            fontWeight: 400,
            lineHeight: 1.5,
            maxWidth: 700
          }}
        >
          Residential Solar &amp; Battery Storage &mdash; North Carolina
        </div>
      </div>
    ),
    { ...size }
  );
}
