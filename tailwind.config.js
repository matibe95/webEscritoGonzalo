/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : 'var(--color-primary)',
        'secondary' : 'var(--color-secondary)',
        'background-fill' : 'var(--color-background-fill)',
        'baseColor' : 'var(--color-text-base)',
        'accent' : 'var(--color-accent)',
        'contrast' : 'var(--color-contrast)',
      },
      screens: {
        'movil-m': '320px',
        'movil-s': '375px',
        'movil-l': '425px',
      },
    },
  },
  plugins: [],
}

