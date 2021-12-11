module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["PT Sans", "sans"],
    },
    extend: {
      width: {
        400: "400px",
      },
      height: {
        600: "600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
