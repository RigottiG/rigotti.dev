/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)"],
        mono: ["var(--font-montserrat)"],
      }
    },
  },
  plugins: [],
}
