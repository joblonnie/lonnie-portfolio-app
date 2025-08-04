import type { Config } from "tailwindcss";

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
        // Mocha 팔레트를 CSS 변수로 정의
        mocha: {
          50: "hsl(var(--mocha-50))",
          100: "hsl(var(--mocha-100))",
          200: "hsl(var(--mocha-200))",
          300: "hsl(var(--mocha-300))",
          400: "hsl(var(--mocha-400))",
          500: "hsl(var(--mocha-500))", // #A47864
          600: "hsl(var(--mocha-600))",
          700: "hsl(var(--mocha-700))",
          800: "hsl(var(--mocha-800))",
          900: "hsl(var(--mocha-900))",
          950: "hsl(var(--mocha-950))",
        },

        // Cannoli Cream 팔레트를 CSS 변수로 정의
        cannoli: {
          50: "hsl(var(--cannoli-50))",
          100: "hsl(var(--cannoli-100))",
          200: "hsl(var(--cannoli-200))",
          300: "hsl(var(--cannoli-300))",
          400: "hsl(var(--cannoli-400))",
          500: "hsl(var(--cannoli-500))", // #F1F0E2
          600: "hsl(var(--cannoli-600))",
          700: "hsl(var(--cannoli-700))",
          800: "hsl(var(--cannoli-800))",
          900: "hsl(var(--cannoli-900))",
          950: "hsl(var(--cannoli-950))",
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
} satisfies Config;

export default config;
