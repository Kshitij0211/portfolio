/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.{html}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "sunset", "cmyk",],
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated'),
    require('tailwindcss-intersect')
  ],
}