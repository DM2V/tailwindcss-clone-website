/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    /* container: {
      padding: "1.4rem",
    }, */
    extend: {
      fontFamily: {
        sans: "'Work Sans', sans-serif",
        cascadia: '"CascadiaCode"',
      },
      colors: {
        "do-blue-dark": "#081b4b",
        "do-blue-medium": "rgb(0, 44, 155)",
        "do-blue-light": "rgb(0, 105, 255)",
      },
    },
  },
  plugins: [],
};
