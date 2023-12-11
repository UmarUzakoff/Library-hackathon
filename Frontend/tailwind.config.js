/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue1: "#164863",
        blue2: "#427D9D",
        blue3: "#9BBEC8",
        blue4: "#DDF2FD"
      },
      container: {
        center: true,
      },
    },
    fontFamily: {
      'roboto': ['Roboto Mono'],
      'montserrat': ['Montserrat']
    }
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
});
