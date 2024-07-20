import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: { DEFAULT: "#e2e8f0", stronger: "#cbd5e1" },
        input: "#e2e8f0",
        ring: "#2563eb",
        background: {
          DEFAULT: "#ffffff",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155"
        },
        foreground: "#030c24",
        primary: {
          DEFAULT: "#1982FD",
          foreground: "#f8fafc",
          800: "#1e40af",
          700: "#1d4ed8",
          500: "#3b82f6",
          400: "#60a5fa",
          300: "#93c5fd"
        },
        secondary: {
          DEFAULT: "#F0F4F7",
          foreground: "#0f172a",
          stronger: "#E6EDF2",
          strong: "#DFE6EB"
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#f8fafc"
        },
        success: {
          DEFAULT: "#16cc53",
          foreground: "#f8fafc"
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b"
        },
        accent: {
          DEFAULT: "#EDF1F5",
          foreground: "#0f172a",
          stronger: "#E6EAED"
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#020817"
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#020817"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
