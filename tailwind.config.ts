import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tinta: '#1E2A32',
        pergaminho: '#F7F4EE',
        latao: '#A8842C',
        argila: '#8C4A32',
        grafite: '#5A6670'
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-source)', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
