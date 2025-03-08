import featureEnvyRule from "./eslint-custom-rules/feature-envy.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "max-params": ["warn", 3],
      "no-duplicate-imports": "error",
      "complexity": ["warn", { "max": 5 }],
      "max-lines": ["warn", 200],
      "max-statements": ["warn", 10],
      "no-restricted-syntax": [
        "warn",
        {
          selector: "CallExpression[callee.name='eval']",
          message: "Do not use eval().",
        },
      ],
      "custom-rules/feature-envy": featureEnvyRule, // Include the custom rule
    },
  },
];