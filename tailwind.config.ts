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

        main: "var(--color_main)",

        gray_900: "var(--color_gray_900)",
        gray_700: "var(--color_gray_700)",
        gray_500: "var(--color_gray_500)",
        gray_400: "var(--color_gray_400)",
        gray_300: "var(--color_gray_300)",

        kakao_main: "var(--color_kakao_main)",

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

      fontFamily: {
        jalnan: "var(--font-jalnan)",
      },

      boxShadow: {
        layout_shadow: "0 0 3rem 3rem rgba(0, 0, 0, 0.1)",
      },

      animation: {
        login_up_down_4s: "login_up_down 4s infinite ease-in-out",
        login_up_down_6s: "login_up_down 6s infinite ease-in-out",
        login_up_down_8s: "login_up_down 8s infinite ease-in-out",
      },

      keyframes: {
        login_up_down: {
          "0%": { transform: "translateY(-1rem)" },
          "50%": { transform: "translateY(1rem)" },
          "100%": { transform: "translateY(-1rem)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
