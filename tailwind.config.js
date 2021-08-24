module.exports = {
  purge: {
    content: ["./src/**/*.vue"],
    options: {
      safelist: [
        /^tw-text-.+/,
        /^tw-items-.+/,
        /^tw-self-.+/,
        /^tw-font-.+/,
        /^tw-bg-.+/,
        /^tw-border-.+/,
        /^tw-w-1\/.+/
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  prefix: "tw-",
  theme: {
    colors: {
      primary: "#0C325B",
      secondary: "#08E193",
      white: "#ffffff",
      positive: "#01F859",
      negative: "#FF0000",
      orange: "#FF6B00",
      blue: "#2790D4",
      green: "#00CD77",
      eDark: "#1A243F"
    },
    fontFamily: {
      "op-sans": "Open Sans",
      roboto: "Roboto"
    },
    fontSize: {
      xs: "35px",
      sm: "40px",
      md: "50px",
      lg: "60px",
      xl: "70px",
      xxl: "110px"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
