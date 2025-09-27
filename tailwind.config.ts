import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            dark: '#2e3d2a',
            accent: '#32d24d',
            hyperlink: '#156624',
          },
          cream: '#f4f1d3',
          purple: {
            light: '#ebd9fd',
            accent: '#d8b9f7',
            dark: '#442b48',
          },
          blue: '#00a6fb',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
        display: ['var(--font-norwester)', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.015em',
      },
      keyframes: {
        'fade-in-out': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '10%': { opacity: '1', transform: 'translateY(0)' },
          '90%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in-out': 'fade-in-out 2s ease-in-out',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#442b48', // brand-purple-dark
            fontFamily: '"Open Sans", sans-serif',
            fontOpticalSizing: 'auto',
            fontStyle: 'normal',
            fontVariationSettings: '"wdth" 100',
            h1: {
              color: '#442b48',
              fontWeight: '400',
              fontFamily: 'var(--font-display)',
            },
            h2: {
              color: '#442b48',
              fontWeight: '400',
              fontFamily: 'var(--font-display)',
            },
            h3: {
              color: '#442b48',
              fontWeight: '400',
              fontFamily: 'var(--font-display)',
            },
            h4: {
              color: '#442b48',
              fontWeight: '400',
              fontFamily: 'var(--font-display)',
            },
            p: {
              fontFamily: '"Open Sans", sans-serif',
              fontOpticalSizing: 'auto',
              fontStyle: 'normal',
              fontVariationSettings: '"wdth" 100',
            },
            strong: {
              color: '#442b48',
              fontWeight: '600',
              fontFamily: '"Open Sans", sans-serif',
            },
            a: {
              color: '#32d24d', // brand-green-accent
              '&:hover': {
                color: '#2e3d2a', // brand-green-dark
              },
            },
            code: {
              color: '#442b48',
              backgroundColor: 'rgba(68, 43, 72, 0.1)',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
            pre: {
              backgroundColor: '#442b48',
              color: '#f4f1d3',
            },
            blockquote: {
              borderLeftColor: '#32d24d',
              color: '#442b48',
            },
          },
        },
        invert: {
          css: {
            color: '#f4f1d3',
            fontFamily: '"Open Sans", sans-serif',
            fontOpticalSizing: 'auto',
            fontStyle: 'normal',
            fontVariationSettings: '"wdth" 100',
            h1: {
              color: '#f4f1d3',
            },
            h2: {
              color: '#f4f1d3',
            },
            h3: {
              color: '#f4f1d3',
            },
            h4: {
              color: '#f4f1d3',
            },
            p: {
              fontFamily: '"Open Sans", sans-serif',
              fontOpticalSizing: 'auto',
              fontStyle: 'normal',
              fontVariationSettings: '"wdth" 100',
            },
            strong: {
              color: '#f4f1d3',
              fontFamily: '"Open Sans", sans-serif',
            },
            a: {
              color: '#32d24d',
              '&:hover': {
                color: '#f4f1d3',
              },
            },
            code: {
              color: '#f4f1d3',
              backgroundColor: 'rgba(244, 241, 211, 0.1)',
            },
            pre: {
              backgroundColor: '#2e3d2a',
              color: '#f4f1d3',
            },
            blockquote: {
              borderLeftColor: '#32d24d',
              color: '#f4f1d3',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config 