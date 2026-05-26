import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        // Warm amber — solar energy, sunlight
        sol: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03'
        },
        // Deep navy — night sky, battery storage
        dusk: {
          50: '#f0f2fc',
          100: '#dde3f8',
          200: '#bbc6f1',
          300: '#90a0e6',
          400: '#6477d6',
          500: '#4758c3',
          600: '#3643a8',
          700: '#2b368b',
          800: '#1d246c',
          900: '#11154a',
          950: '#080b22'
        },
        // Clear sky blue — daytime, openness
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        },
        // Sunset orange — accent, urgency, CTA
        ember: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12'
        },
        paper: '#fefdfb',
        ink: '#080b22'
      },
      fontFamily: {
        display: ['Avenir', 'Avenir Next', 'Century Gothic', 'Trebuchet MS', 'sans-serif'],
        sans: ['Avenir', 'Avenir Next', 'Century Gothic', 'Trebuchet MS', 'sans-serif'],
        avenir: ['Avenir', 'Avenir Next', 'Century Gothic', 'Trebuchet MS', 'sans-serif']
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
        xs: ['0.75rem', { lineHeight: '1.1rem' }],
        sm: ['0.875rem', { lineHeight: '1.35rem' }],
        base: ['1.0625rem', { lineHeight: '1.65rem' }],
        lg: ['1.1875rem', { lineHeight: '1.8rem' }],
        xl: ['1.375rem', { lineHeight: '1.9rem' }],
        '2xl': ['1.625rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.3rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.7rem' }],
        '5xl': ['3.25rem', { lineHeight: '3.5rem' }],
        '6xl': ['4rem', { lineHeight: '4.2rem' }],
        '7xl': ['5rem', { lineHeight: '5.1rem' }]
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem'
      },
      maxWidth: {
        prose: '68ch',
        narrow: '54ch'
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem'
      },
      boxShadow: {
        card: '0 1px 2px rgba(8,11,34,0.04), 0 4px 16px rgba(8,11,34,0.06)',
        elevated: '0 2px 4px rgba(8,11,34,0.05), 0 12px 32px rgba(8,11,34,0.09)',
        glow: '0 0 20px rgba(245,158,11,0.35), 0 0 60px rgba(245,158,11,0.12)'
      }
    }
  },
  plugins: []
};

export default config;
