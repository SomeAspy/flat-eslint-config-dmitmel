import n from 'eslint-plugin-n';

/** @type { import("eslint").Linter.Config[] } */
export default [
  n.configs['flat/recommended'],
  {
    rules: {
      'n/hashbang': ['off'], // deprecation of n/shebang https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/hashbang.md
    },
  },
];
