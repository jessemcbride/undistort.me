module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        "-1": "-1",
      },
    },
  },
  variants: {},
  plugins: [],
};
