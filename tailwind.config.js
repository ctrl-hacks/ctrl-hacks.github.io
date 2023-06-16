/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      'space-grotesk': ['Space Grotesk', 'Open Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

