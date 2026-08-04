import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

import importX from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  {
    ignores: ["dist", "coverage", "node_modules"],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      globals: globals.browser,
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "import-x": importX,
      "unused-imports": unusedImports,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "react/react-in-jsx-scope": "off",

      "react-hooks/rules-of-hooks": "error",

      "react-hooks/exhaustive-deps": "warn",

      "react-refresh/only-export-components": "off",

      "unused-imports/no-unused-imports": "error",

      "@typescript-eslint/no-unused-vars": "off",

      "import-x/order": [
        "warn",
        {
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
          },
        },
      ],
    },
  },
  {
    files: ["src/hooks/useStableCallback.ts"],
    rules: {
      "react-hooks/exhaustive-deps": "off",
    },
  },
];
