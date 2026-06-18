import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#10171C",
          2: "#182127",
          3: "#202B32",
        },
        paper: "#F4F5F2",
        surface: "#FBFBF9",
        line: {
          DEFAULT: "#DBDFD9",
          dark: "#27323A",
        },
        slate: {
          DEFAULT: "#5C6A72",
          soft: "#8A969D",
        },
        verified: "#1E7A5E",
        caution: "#B07A1E",
        flag: "#A6402F",
        brass: "#9C8A55",
      },
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      maxWidth: {
        desk: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
