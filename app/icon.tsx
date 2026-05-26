import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: '#f59e0b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Sun circle */}
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            background: '#080b22',
            position: 'absolute'
          }}
        />
        {/* Ray lines using box-shadow workaround: just use a letter mark */}
        <span
          style={{
            fontFamily: 'serif',
            fontSize: 18,
            fontWeight: 900,
            color: '#080b22',
            lineHeight: 1
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size }
  );
}
