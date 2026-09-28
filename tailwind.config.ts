import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        taxi: {
          yellow: "#FFCC00",
          black: "#222222",
          gray: "#F4F4F4",
          white: "#FFFFFF",
        }
      },
    },
  },
  plugins: [],
};
export default config;
