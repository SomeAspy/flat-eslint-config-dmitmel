import rules from './formatting.mjs';

/** @type { import("eslint").Linter.Config['rules'] } */
export default {
  'stylistic/object-curly-spacing': ['off'],
  '@babel/object-curly-spacing': rules['object-curly-spacing'],

  'stylistic/semi': ['off'],
  '@babel/semi': rules.semi,
};
