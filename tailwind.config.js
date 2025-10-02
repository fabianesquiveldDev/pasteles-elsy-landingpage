/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': {
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
        }
      }
    },
  },
  plugins: [],
}
