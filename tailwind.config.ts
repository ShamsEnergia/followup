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
        shams: {
          green: "#6ED064",
          teal: "#14A2AD",
          blue: "#1871BB",
          ink: "#15323b",
          muted: "#5b6f76",
          line: "#cdd8db",
          zebra: "#f2f8f9",
          soft: "#dbe6ea",
          card: "#ffffff",
          bg: "#eef2f4",
        }
      }
    },
  },
  plugins: [],
};
export default config;
