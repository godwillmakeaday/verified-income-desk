import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0C2D4A",
          900: "#08233B",
          800: "#0C2D4A",
          700: "#143A5C",
        },
        clinical: {
          blue: "#1567B2",
          blueDark: "#0F5694",
          blueSoft: "#EAF2FA",
          green: "#1E8657",
          greenSoft: "#E8F3EC",
          red: "#B42318",
          redSoft: "#FBEEEC",
          amber: "#9A5B0B",
          amberSoft: "#FBF1E3",
        },
        ink: "#15212B",
        slate: {
          DEFAULT: "#54677A",
          soft: "#7C8A98",
        },
        offwhite: "#F6F4EF",
        line: "#E3E8ED",
        lineSoft: "#EEF1F4",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display": ["clamp(2.4rem, 5vw, 3.9rem)", { lineHeight: "1.04", letterSpacing: "-0.018em" }],
        "h1": ["clamp(2rem, 3.6vw, 2.85rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "h2": ["clamp(1.55rem, 2.4vw, 2.05rem)", { lineHeight: "1.16", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1200px",
        prose: "720px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        lg: "10px",
        xl: "14px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(12, 45, 74, 0.04), 0 1px 1px rgba(12, 45, 74, 0.03)",
        cardHover: "0 8px 28px -10px rgba(12, 45, 74, 0.18)",
        header: "0 1px 0 rgba(227, 232, 237, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
