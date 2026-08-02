/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#F8D7DA',
        blushDeep: '#F3BFC6',
        cream: '#FFF9F6',
        purple: '#8B5FBF',
        purpleDeep: '#5B3A8E',
        ink: '#2A2130',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
