module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    container: {
      padding: "2rem",
    },
    screens: {
      tablet: "768px",
      // => @media (min-width: 640px) { ... }

      laptop: "992px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1200px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: "#00214A",
        secondary:'#707070',
        white: "#fff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
