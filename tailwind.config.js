/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./doorecruit_site.jsx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#0A0A0A',
          900: '#111111',
          800: '#1C1C1C',
          700: '#2A2A2A',
          50: '#FAFAF8',
          amber: '#DFA33A',
          'amber-light': '#F2C87A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
