import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "var(--color-canvas-bg)",
          alt: "var(--color-surface-tint)",
          surface: "var(--color-surface-card)",
        },
        academic: {
          green: {
            DEFAULT: "var(--color-academic-green)",
            light: "var(--color-academic-green-light)",
            dark: "var(--color-academic-green-dark)",
          },
        },
        earth: {
          sand: "var(--color-earth-sand)",
          ochre: "var(--color-earth-ochre)",
        },
        saffron: {
          gold: {
            DEFAULT: "var(--color-saffron-gold)",
            light: "var(--color-saffron-gold-light)",
            dark: "var(--color-saffron-gold-dark)",
          },
        },
        charcoal: {
          DEFAULT: "var(--color-text-primary)",
          muted: "var(--color-text-secondary)",
          subtle: "var(--color-text-subtle)",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      boxShadow: {
        subtle: "var(--shadow-subtle)",
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
      },
    },
  },
  plugins: [],
};
export default config;
