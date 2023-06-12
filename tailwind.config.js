/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

const BASE = 16 // your base size
const rem = (px, key = px) => ({ [key]: `${px / BASE}rem` })

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      // fontSize: {
      //   ...rem(18),
      // },
    },
  },
  plugins: [],
}
