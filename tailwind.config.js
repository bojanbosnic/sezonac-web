module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    container: {
      padding: "4rem",
    },
    fontFamily: {
      my_font: ['Montserrat', 'sans-serif'],
    },
    screens: {
      xl: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1010px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      colors: {
        primary: "#00214A",
        secondary: "#707070",
        white: "#fff",
        dark: "rgb(0 0 0 / 93%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
