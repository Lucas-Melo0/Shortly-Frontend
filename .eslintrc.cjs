module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react-hooks/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
  },
};
