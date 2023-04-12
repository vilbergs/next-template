const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.slate,
        secondary: colors.yellow,
        neutral: colors.gray,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
