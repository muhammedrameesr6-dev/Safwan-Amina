/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alex': ['"Alex Brush"', 'cursive'],
        'vibes': ['"Great Vibes"', 'cursive'],
        'amiri': ['"Amiri"', 'serif'],
        'cinzel': ['"Cinzel"', 'serif'],
        'serif': ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        gold: {
          light: '#f5d58f',
          DEFAULT: '#dfba73',
          dark: '#b88f42',
          deep: '#8f6a2b',
        },
        emerald: {
          darkest: '#031812',
          darker: '#041c16',
          dark: '#05241c',
          surface: '#05261e',
          button: '#072920',
          accent: '#0b3a2d',
        },
        ivory: '#fdfbf7',
      },
      zIndex: {
        '35': '35',
        '60': '60',
      }
    },
  },
  plugins: [],
}
