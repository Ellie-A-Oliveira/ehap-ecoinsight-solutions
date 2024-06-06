import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3195CA",
        secondary: "#111111",
        success: "#296938",
        black: "#000000",
        white: "#ffffff",
        gray: "#ABABAB",
      },
    },
  },
  plugins: [],
};
export default config;
