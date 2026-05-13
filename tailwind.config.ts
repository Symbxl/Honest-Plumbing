import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: {
          50: "#ffffff",
          100: "#f0fdfa",
          200: "#ccfbf1",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          soft: "#2c2c2c",
          muted: "#5a5a5a",
        },
        forest: {
          DEFAULT: "#134e4a",
          deep: "#042f2e",
          light: "#115e59",
        },
        copper: {
          DEFAULT: "#2dd4bf",
          light: "#5eead4",
          deep: "#0d9488",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fadeIn 1s ease-out both",
        "slide-in": "slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
