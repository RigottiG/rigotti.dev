/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        mono: ['var(--font-montserrat)'],
      },
      gridTemplateRows: {
        layout: 'auto minmax(600px, 1fr) auto',
      },
    },
  },
  plugins: [],
}
