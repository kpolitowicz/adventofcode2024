/** @type {import('esLint').Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier"],
  env: {
    node: true,
    es2021: true,
  },
  overrides: [
    {
      files: ["*.test.js"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
    },
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
