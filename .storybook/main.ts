import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  viteFinal: async prevConfig => {
    return mergeConfig(prevConfig, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          "@app": path.resolve(__dirname, "../src/app"),
          "@pages": path.resolve(__dirname, "../src/pages"),
          "@widgets": path.resolve(__dirname, "../src/widgets"),
          "@features": path.resolve(__dirname, "../src/features"),
          "@entities": path.resolve(__dirname, "../src/entities"),
          "@shared": path.resolve(__dirname, "../src/shared"),
        },
      },
    });
  },
};

export default config;
