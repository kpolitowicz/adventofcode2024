/** @type {import('esLint').Linter.Config} */
module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['*.test.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
  ],
};