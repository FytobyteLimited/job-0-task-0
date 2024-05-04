/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        dimgray: "#737373",
        whitesmoke: "#f5f5f5",
        lightgray: "#d4d4d4",
        gray: {
          100: "#262626",
          200: "#171717",
          300: "rgba(255, 255, 255, 0.27)",
        },
        darkslategray: {
          100: "#4a4a4a",
          200: "#404040",
        },
        darkslateblue: "#224192",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "9980xl": "9999px",
        "13xl": "32px",
        "25xl": "44px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      "41xl": "60px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
