module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:storybook/recommended"
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: "detect"
    },
    // Tells eslint how to resolve imports
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".ts", ".js", ".jsx", ".tsx", ".json"]
      },
      node: {
        paths: ["./src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.
    // e.g. "@typescript-eslint/explicit-function-return-type": "off"
  },
  overrides: [
    {
      files: ["**/__mocks__/*", "**/*.{test,tests}.{ts,tsx}", "**/*.stories.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-explicit-any": 0
      }
    }
  ]
};
