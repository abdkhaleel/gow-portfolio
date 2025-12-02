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
        gow: {
          bg: "#0c0e12",       // Dark Slate (Not pure black)
          card: "#161b22",     
          red: "#982828",      // Kratos Red
          gold: "#c8aa6e",     // Rune Gold
          blue: "#688594",     // Icy Blue
          text: "#e8e6e3",     // Bone White
          muted: "#6f7682",    // Gray
        },
      },
      fontFamily: {
        heading: ["var(--font-cinzel)"],
        body: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};
export default config;