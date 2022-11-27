/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(240, 38%, 20%)",
        GrayishBlue: "hsl(240, 18%, 77%)",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
