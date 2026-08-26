/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./doorecruit_site.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        secondary: '#764ba2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
