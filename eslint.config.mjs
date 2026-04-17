import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import storybook from "eslint-plugin-storybook";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "storybook-static/**", "next-env.d.ts"],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierRecommended,
  ...storybook.configs["flat/recommended"],
  {
    rules: {
      "react/display-name": "off",
    },
  },
];

export default eslintConfig;
