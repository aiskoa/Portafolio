/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'dvd': "url('https://media.tenor.com/stKjYPvgKDgAAAAC/dvd-old.gif')",
      },
    },
  },
  plugins: [],
}
