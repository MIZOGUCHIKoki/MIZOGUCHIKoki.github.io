import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    ignores: [
      "build/",
      "dist/",
      "node_modules/"]
  },
  // Reactの設定
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React 17+ では JSX 利用時に React の import は不要
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  }
);