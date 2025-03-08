import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["node_modules/**"], // Ignore dependencies
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "max-params": ["warn", 3], // Warn if a function has more than 3 parameters
      "no-duplicate-imports": "error", // Prevent duplicate imports
      "complexity": ["warn", { "max": 5 }], // Warn if function complexity is too high
      "max-lines": ["warn", 200], // Warn if file is too long
      "max-statements": ["warn", 10], // Warn if function has too many statements
      "no-restricted-syntax": [
        "warn",
        {
          "selector": "CallExpression[callee.name='eval']",
          "message": "Do not use eval().",
        },
      ],
    },
  },
];
