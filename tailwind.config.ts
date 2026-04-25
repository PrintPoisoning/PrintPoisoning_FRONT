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
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.stories.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        layout: "var(--max-width-global_layout)",
      },

      colors: {
        primary: {
          DEFAULT: "var(--primary-main)",
          main: "var(--primary-main)",
          light: "var(--primary-light)",
          lightness: "var(--primary-lightness)",
          dark: "var(--primary-dark)",
        },
        text: {
          main: "var(--text-main)",
          sub: "var(--text-sub)",
          mute: "var(--text-mute)",
          disabled: "var(--text-disabled)",
        },
        surface: {
          paper: "var(--surface-paper)",
          cream: "var(--surface-cream)",
          soft: "var(--surface-soft)",
          line: "var(--surface-line)",
        },
        accent: {
          blush: "var(--accent-blush)",
          yellow: "var(--accent-yellow)",
        },
        semantic: {
          success: "var(--semantic-success)",
          warning: "var(--semantic-warning)",
          danger: "var(--semantic-danger)",
        },
      },

      zIndex: {
        modal: "500",
        toast: "600",
      },

      spacing: {
        1: "var(--sp-1)",
        2: "var(--sp-2)",
        3: "var(--sp-3)",
        4: "var(--sp-4)",
        5: "var(--sp-5)",
        6: "var(--sp-6)",
        8: "var(--sp-8)",
        10: "var(--sp-10)",
        12: "var(--sp-12)",
        16: "var(--sp-16)",
      },

      fontSize: generateSize("size"),

      borderRadius: {
        ...generateSize("radius"),
        xs: "var(--r-xs)",
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        pill: "var(--r-pill)",
      },

      fontFamily: {
        sans: ["var(--ff-ui)"],
        hand: ["var(--ff-hand)"],
      },

      boxShadow: {
        layout_shadow: "0 0 3rem 3rem rgba(0, 0, 0, 0.1)",
        1: "var(--sh-1)",
        2: "var(--sh-2)",
        3: "var(--sh-3)",
        shelf: "var(--sh-shelf)",
      },

      backgroundImage: {
        skeleton: "linear-gradient(120deg, #e6e6e6, #e6e6e6, #f0f0f0, #e6e6e6, #e6e6e6)",
      },

      animation: {
        login_up_down_4s: "login_up_down 4s infinite ease-in-out",
        login_up_down_6s: "login_up_down 6s infinite ease-in-out",
        login_up_down_8s: "login_up_down 8s infinite ease-in-out",

        skeleton: "skeleton 2s infinite linear",
        loading_spinner: "loading_spinner 1s infinite ease",
      },

      keyframes: {
        login_up_down: {
          "0%": { transform: "translateY(-1rem)" },
          "50%": { transform: "translateY(1rem)" },
          "100%": { transform: "translateY(-1rem)" },
        },

        skeleton: {
          "0%": { transform: "translateX(-100%)" },
          "50%, 100%": { transform: "translateX(100%)" },
        },

        loading_spinner: {
          from: { transform: "rotate(0turn)" },
          to: { transform: "rotate(1turn)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
