import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts,css,scss}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        alt: ['var(--font-alt)'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
      }
    },
  },
  plugins: [],
};

export default config;
