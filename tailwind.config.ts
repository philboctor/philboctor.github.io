import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#202326",
        muted: "#626a72",
        line: "#d9dee4",
        paper: "#f7f4ee",
        accent: "#2f6f9f",
        mist: "#e8eef1",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(31, 43, 51, 0.14)",
        card: "0 16px 45px rgba(31, 43, 51, 0.08)",
        cardHover: "0 24px 70px rgba(31, 43, 51, 0.16)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
