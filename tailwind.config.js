module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "4rem",
    },
    fontFamily: {
      my_font: ["Rubik", "sans-serif"],
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
        primary: "#1967d2",
        secondary: "#dbe6f7",
        white: "#fff",
        black: "#3c3c3c",
        green: "#00ca99",
      },

      boxShadow: {
        sm: "1px 5px 26px 5px",
        xs: "0px 0px 25px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
