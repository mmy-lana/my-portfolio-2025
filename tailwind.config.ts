// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // 👈 good!
  content: [
    './src/**/*.{html,ts}',      // ✅ your templates + TS
    './src/**/*.{css,scss}',     // ✅ this is what was missing
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
