import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          xl: "1180px",
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        brown: "hsl(var(--brown))",
        "muted-brown": "hsl(var(--muted-brown))",
        secondary: "hsl(var(--secondary))",
        "muted-secondary": "hsl(var(--muted-secondary))",
        "light-green": "hsl(var(--light-green))",
      },
    },
  },
  plugins: [],
} satisfies Config;
