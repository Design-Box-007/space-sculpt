import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D72638",
        secondary: "#222222"

      },
      fontFamily: {
        poppins: "var(--font-poppins)"
      }
    },
  },
  plugins: [],
} satisfies Config;
