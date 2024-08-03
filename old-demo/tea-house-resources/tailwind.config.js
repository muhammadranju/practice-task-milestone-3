/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        bgGradient:
          "linear-gradient(180.00deg, rgb(244, 244, 244),rgba(244, 244, 244, 0) 100%)",
      }),
    },
  },
  plugins: [],
};
