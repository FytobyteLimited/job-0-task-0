import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-background": "url('/header-bg.png')",
      },
      colors: {
        "primary-dark": "#171717",
        "primary-blue": "#224192",
      },
    },
  },
  plugins: [],
};
export default config;
