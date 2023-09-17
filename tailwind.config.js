/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bordergray': '#D2D2D2',
        'primary': '#E2342D',
        'secondary': '#004197'
      }
    },
  },
  plugins: [require("daisyui")],
}