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
        'dvd': "url('https://thumbs.gfycat.com/BackJitteryCuttlefish-size_restricted.gif')",
      },
    },
  },
  plugins: [],
}
