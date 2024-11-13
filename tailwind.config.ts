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
        primary:{
          DEFAULT: "#c6e1ff",
          dark: "#00002a",
        },
        background: "#001",
      },
    },
  },
  plugins: [],
};
export default config;
