import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "coverage/**",
      "build/**",
      "public/**",
    ],
  },
  ...coreWebVitals,
  ...typescript,
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: [
      "**/*.config.js",
      "**/*.config.mjs",
      "**/*.config.ts",
      "jest.config.js",
      "jest.setup.js",
      "postcss.config.js",
      "scripts/**/*.js",
    ],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;
