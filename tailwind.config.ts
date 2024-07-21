import type { Config } from "tailwindcss";
import { colors } from "./colors";

function hexToRgb(hex: string): string {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const int = parseInt(hex, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;

  return `${r}, ${g}, ${b}`;
}

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "rgba(var(--background), <alpha-value>)",
          50: "rgba(var(--background-50), <alpha-value>)",
          100: "rgba(var(--background-100), <alpha-value>)",
          200: "rgba(var(--background-200), <alpha-value>)",
          300: "rgba(var(--background-300), <alpha-value>)",
          400: "rgba(var(--background-400), <alpha-value>)",
          500: "rgba(var(--background-500), <alpha-value>)",
          600: "rgba(var(--background-600), <alpha-value>)",
          700: "rgba(var(--background-700), <alpha-value>)",
          800: "rgba(var(--background-800), <alpha-value>)",
          900: "rgba(var(--background-900), <alpha-value>)",
          950: "rgba(var(--background-950), <alpha-value>)"
        },
        foreground: "rgba(var(--foreground), <alpha-value>)",
        card: {
          DEFAULT: "rgba(var(--card), <alpha-value>)",
          foreground: "rgba(var(--card-foreground), <alpha-value>)"
        },
        popover: {
          DEFAULT: "rgba(var(--popover), <alpha-value>)",
          foreground: "rgba(var(--popover-foreground), <alpha-value>)"
        },
        primary: {
          DEFAULT: "rgba(var(--primary), <alpha-value>)",
          foreground: "rgba(var(--primary-foreground), <alpha-value>)",
          lighter: "rgba(var(--primary-lighter), <alpha-value>)",
          light: "rgba(var(--primary-light), <alpha-value>)"
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary), <alpha-value>)",
          foreground: "rgba(var(--secondary-foreground), <alpha-value>)",
          stronger: "rgba(var(--secondary-stronger), <alpha-value>)",
          strong: "rgba(var(--secondary-strong), <alpha-value>)"
        },
        muted: {
          DEFAULT: "rgba(var(--muted), <alpha-value>)",
          foreground: "rgba(var(--muted-foreground), <alpha-value>)"
        },
        accent: {
          DEFAULT: "rgba(var(--accent), <alpha-value>)",
          foreground: "rgba(var(--accent-foreground), <alpha-value>)",
          stronger: "rgba(var(--accent-stronger), <alpha-value>)"
        },
        success: {
          DEFAULT: "rgba(var(--success), <alpha-value>)",
          foreground: "rgba(var(--success-foreground), <alpha-value>)"
        },
        destructive: {
          DEFAULT: "rgba(var(--destructive), <alpha-value>)",
          foreground: "rgba(var(--destructive-foreground), <alpha-value>)"
        },
        border: {
          DEFAULT: "rgba(var(--border), <alpha-value>)",
          stronger: "rgba(var(--border-stronger), <alpha-value>)"
        },
        input: "rgba(var(--input), <alpha-value>)",
        ring: "rgba(var(--ring), <alpha-value>)",
        chart1: "rgba(var(--chart-1), <alpha-value>)",
        chart2: "rgba(var(--chart-2), <alpha-value>)",
        chart3: "rgba(var(--chart-3), <alpha-value>)",
        chart4: "rgba(var(--chart-4), <alpha-value>)",
        chart5: "rgba(var(--chart-5), <alpha-value>)"
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
  plugins: [
    require("tailwindcss-animate"),
    function ({ addBase, theme }) {
      addBase(
        Object.fromEntries(
          [":root", ".dark"].map((theme) => {
            const themeVariable = theme === ":root" ? "light" : "dark";
            return [
              theme,
              Object.fromEntries(
                Object.entries(colors[themeVariable]).flatMap(
                  ([key, value]) => {
                    if (typeof value === "object") {
                      return Object.entries(value).map(
                        ([keyNested, valueNested]) => {
                          if (keyNested === "DEFAULT") {
                            return [`--${key}`, hexToRgb(valueNested)];
                          }
                          return [
                            `--${key}-${keyNested}`,
                            hexToRgb(valueNested)
                          ];
                        }
                      );
                    } else {
                      return [[`--${key}`, hexToRgb(value)]];
                    }
                  }
                )
              )
            ];
          })
        )
      );
    }
  ]
};

export default config;
