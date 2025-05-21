module.exports = {
  prefix: "",
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    maxWidth: {
      "1/20": "5%",
      "1/10": "10%",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      fit: "fit-content",
      1: "100%",
      1200: "1200px",
      800: "800px",
      600: "600px",
    },
    maxHeight: {
      480: "480px",
    },
    extend: {
      colors: {
        "primary-color": "#666699",
        "secondary-color": "#583E75",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
