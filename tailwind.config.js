/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        base: '#0B0B0C',
        "elevation-1": '#121212',
        "elevation-2": '#151515'
      }
    },
  },
  plugins: [],
}
