// @type {import('tailwindcss').Config} 

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#FFFDE9',
          500: '#FFE500',
          900: '#5C5200',
          950: '#292400',
        },
      },
      animation: {
      }
    },
  },
  plugins: [],
}
