import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      animation: {
        blob: "blob 6s infinite",
      },
      keyframes: {
        blob:{
          "0%": {
            transform: "translate(0) sclae(1)", 
          },
          "30%": {
            transform: "translate(20px, 20px) scale(1.2)"
          },
          "50%": {
            transform: "translate(10px, 10px) scale(1.5)"
          },
          "100%": {
            transform: "translate(0) scale(1)"
          }
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "50px"
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
