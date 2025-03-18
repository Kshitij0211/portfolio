/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.{html}"
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%" : { transform: "translateY(0)" },
          "50%" : { transform: "translateY(-10px)" },
          "100%" : { transform: "translateY(0)"}
        }
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "corporate", "sunset", "cmyk",],
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated'),
    require('tailwindcss-intersect')
  ],
}