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
      colors: Object.fromEntries(
        Object.entries(colors.light).map(([key, value]) => {
          if (typeof value === "object") {
            return [
              key,
              Object.fromEntries(
                Object.entries(value).map(([keyNested]) => {
                  if (keyNested === "DEFAULT") {
                    return [keyNested, `rgba(var(--${key}), <alpha-value>)`];
                  }
                  return [
                    keyNested,
                    `rgba(var(--${key}-${keyNested}), <alpha-value>)`
                  ];
                })
              )
            ];
          } else {
            return [key, `rgba(var(--${key}), <alpha-value>)`];
          }
        })
      ),
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
