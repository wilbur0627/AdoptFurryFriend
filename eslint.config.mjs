// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt(
  // Your custom configs here
  prettierRecommended,
  {
    files: [
      "**/pages/**/*.{js,ts,vue}",
      "**/components/**/*.{js,ts,vue}",
      "**/layouts/**/*.{js,ts,vue}",
      "**/app.{js,ts,vue}",
      "**/error.{js,ts,vue}",
      "**/.*.js",
    ],
    rules: {
      "prettier/prettier": "error",
      "vue/multi-word-component-names": "off",
    },
  },
);
