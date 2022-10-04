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
        inter: "'Inter', sans-serif",
        cascadia: '"CascadiaCode"',
      },
      colors: {
        "do-blue-dark": "#081b4b",
        "do-blue-dark2": "#3c4a6e",
        "do-blue-dark3": "rgb(36, 51, 90)",
        "do-blue-dark4": "rgb(0, 44, 155)",
        "do-blue-medium": "rgb(0, 44, 155)",
        "do-blue-light": "rgb(0, 105, 255)",
        "do-hover-navbar2": "rgb(227, 232, 244)",
        "do-white2": "#f9fafe",
      },
      padding: {
        75: "19rem",
      },
    },
  },
  plugins: [],
};
