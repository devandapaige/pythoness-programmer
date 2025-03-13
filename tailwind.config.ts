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
            h1: {
              color: '#442b48',
            },
            h2: {
              color: '#442b48',
            },
            h3: {
              color: '#442b48',
            },
            h4: {
              color: '#442b48',
            },
            strong: {
              color: '#442b48',
            },
            a: {
              color: '#32d24d', // brand-green-accent
              '&:hover': {
                color: '#2e3d2a', // brand-green-dark
              },
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