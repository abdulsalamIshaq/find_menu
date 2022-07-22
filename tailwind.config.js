/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral,
        primary: '#FFFAF2',
        secondary: '#5C2219',
        dutchWhite: '#ECD9BE',
        category: '#FFB08E',
        chineseBlack: '#121212',
        desertSand: '#F0D4AC',
      }
    },
    fontFamily: {
      'editorial': ['"PP Editorial New"'],
      'satoshi': ['"Satoshi"']
    }
  },
  plugins: [],
}
