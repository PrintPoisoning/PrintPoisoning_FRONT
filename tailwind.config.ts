import type { Config } from "tailwindcss";

interface TailwindSizeMap {
  [key: string]: string;
}

const generateSize = (name: string) => {
  const sizes: TailwindSizeMap = {};

  for (let i = 1; i <= 100; i += 1) {
    sizes[`${name}${i}`] = `${i * 0.1}rem`;
  }

  return sizes;
};

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.stories.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.stories.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        layout: "var(--max-width-global_layout)",
      },

      colors: {
        background: "var(--background)",

        transparent_10: "var(--transparent_10)",
        transparent_30: "var(--transparent_30)",
        transparent_50: "var(--transparent_50)",
        transparent_90: "var(--transparent_90)",

        black: "var(--color_black)",

        gray_900: "var(--color_gray_900)",
        gray_700: "var(--color_gray_700)",
        gray_500: "var(--color_gray_500)",
        gray_300: "var(--color_gray_300)",

        toast_alert: "var(--color_toast_alert)",
        toast_warning: "var(--color_toast_warning)",
        toast_danger: "var(--color_toast_danger)",
        toast_safe: "var(--color_toast_safe)",
      },

      zIndex: {
        modal: "500",
        toast: "600",
      },

      fontSize: generateSize("size"),
      borderRadius: generateSize("radius"),

      boxShadow: {
        layout_shadow: "0 0 3rem 3rem rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
