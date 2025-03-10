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
    },
  },
  plugins: [],
}

export default config 