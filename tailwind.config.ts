import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Soft Lime 팔레트 (#9CCC65)
        lime: {
          50: "hsl(88, 50%, 95%)",
          100: "hsl(88, 50%, 90%)",
          200: "hsl(88, 50%, 80%)",
          300: "hsl(88, 50%, 70%)",
          400: "hsl(88, 50%, 60%)",
          500: "hsl(88, 50%, 50%)", // #9CCC65 base
          600: "hsl(88, 50%, 40%)",
          700: "hsl(88, 50%, 30%)",
          800: "hsl(88, 50%, 20%)",
          900: "hsl(88, 50%, 10%)",
          950: "hsl(88, 50%, 5%)",
        },

        // Coral Orange 팔레트 (#FF7043)
        coral: {
          50: "hsl(14, 100%, 95%)",
          100: "hsl(14, 100%, 90%)",
          200: "hsl(14, 100%, 80%)",
          300: "hsl(14, 100%, 70%)",
          400: "hsl(14, 100%, 60%)",
          500: "hsl(14, 100%, 50%)", // #FF7043 base
          600: "hsl(14, 100%, 40%)",
          700: "hsl(14, 100%, 30%)",
          800: "hsl(14, 100%, 20%)",
          900: "hsl(14, 100%, 10%)",
          950: "hsl(14, 100%, 5%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
