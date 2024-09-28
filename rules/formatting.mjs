// Formatting, I'm trying to imitate the style of Prettier here

import prettierConfig from '../prettier.config.mjs';

/** @type { Record<string,import('eslint').Linter.RuleEntry> } */
export default {
  curly: ['warn', 'multi-line', 'consistent'],

  'stylistic/indent': [
    'warn',
    prettierConfig.useTabs ? 'tab' : prettierConfig.tabWidth,
    { SwitchCase: 1 },
  ],
  'stylistic/no-tabs': ['warn', { allowIndentationTabs: prettierConfig.useTabs }],

  'stylistic/quotes': [
    'warn',
    prettierConfig.singleQuote ? 'single' : 'double',
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],

  'stylistic/semi': ['warn', prettierConfig.semi ? 'always' : 'never'],
  'stylistic/semi-style': prettierConfig.semi ? ['off'] : ['warn', 'first'],

  'stylistic/max-len': [
    'warn',
    {
      code: prettierConfig.printWidth,
      tabWidth: prettierConfig.tabWidth,
      ignoreUrls: true,
    },
  ],
  'stylistic/quote-props':
    prettierConfig.quoteProps === 'as-needed' || prettierConfig.quoteProps === 'consistent'
      ? ['warn', prettierConfig.quoteProps]
      : ['off'],
  'stylistic/jsx-quotes': [
    'warn',
    prettierConfig.jsxSingleQuote ? 'prefer-single' : 'prefer-double',
  ],
  'stylistic/comma-dangle':
    prettierConfig.trailingComma === 'none'
      ? ['warn', 'never']
      : prettierConfig.trailingComma === 'es5' || prettierConfig.trailingComma === 'all'
        ? ['warn', 'always-multiline']
        : ['off'],
  'stylistic/object-curly-spacing': ['warn', prettierConfig.bracketSpacing ? 'always' : 'never'],
  'stylistic/arrow-parens':
    prettierConfig.arrowParens === 'avoid'
      ? ['warn', 'as-needed']
      : prettierConfig.arrowParens === 'always'
        ? ['warn', 'always']
        : ['off'],
  'stylistic/array-bracket-newline': ['warn', 'consistent'],
  'stylistic/array-bracket-spacing': ['warn', 'never'],
  'stylistic/array-element-newline': ['warn', 'consistent'],
  'stylistic/block-spacing': ['warn', 'always'],
  'stylistic/brace-style': ['warn', '1tbs'],
  'stylistic/comma-spacing': ['warn', { before: false, after: true }],
  'stylistic/computed-property-spacing': [
    'warn',
    'never',
    {
      enforceForClassMembers: true,
    },
  ],
  'stylistic/dot-location': ['warn', 'property'],
  'stylistic/eol-last': ['warn', 'always'],
  'stylistic/func-call-spacing': ['warn', 'never'],
  'stylistic/function-call-argument-newline': ['warn', 'consistent'],
  'stylistic/function-paren-newline': ['warn', 'multiline-arguments'],
  'stylistic/key-spacing': [
    'warn',
    {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    },
  ],
  'stylistic/keyword-spacing': ['warn', { before: true, after: true }],
  'stylistic/linebreak-style': ['warn', 'unix'],
  'stylistic/lines-between-class-members': ['off'],
  // while this _technically_ is a syntax error IMO, it is handled by
  // Prettier, therefore I didn't put this rule into `syntax-errors.js`
  'stylistic/multiline-ternary': ['warn', 'always-multiline'],
  'stylistic/new-parens': ['error', 'always'],
  'stylistic/no-extra-parens': [
    'warn',
    'all',
    {
      nestedBinaryExpressions: false,
      ignoreJSX: 'all',
      enforceForArrowConditionals: false,
    },
  ],
  'stylistic/no-extra-semi': 'warn',
  'stylistic/no-floating-decimal': 'warn',
  'stylistic/no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
  'stylistic/no-multi-spaces': ['off', { ignoreEOLComments: true }],
  'stylistic/no-multiple-empty-lines': ['warn', { max: 1 }],
  'stylistic/no-trailing-spaces': ['warn'],
  'stylistic/no-whitespace-before-property': ['warn'],
  'stylistic/object-curly-newline': ['warn', { consistent: true }],
  'stylistic/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
  'stylistic/operator-linebreak': ['warn'],
  'stylistic/padded-blocks': ['warn', 'never'],
  'stylistic/semi-spacing': ['warn', { before: false, after: true }],
  'stylistic/space-before-blocks': ['warn', 'always'],
  'stylistic/space-before-function-paren': [
    'warn',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  'stylistic/space-in-parens': ['warn', 'never'],
  'stylistic/space-infix-ops': ['warn'],
  'stylistic/space-unary-ops': ['warn', { words: true, nonwords: false }],
  'stylistic/switch-colon-spacing': ['warn', { before: false, after: true }],
  // same thing as with `new-parens`
  'stylistic/template-tag-spacing': ['error', 'never'],

  'arrow-body-style': ['warn', 'as-needed'],
  'stylistic/arrow-spacing': ['warn', { before: true, after: true }],
  // again, "syntax error", see `new-parens`
  'stylistic/generator-star-spacing': [
    'error',
    {
      before: false,
      after: true,
      anonymous: 'neither',
      method: { before: true, after: false },
    },
  ],
  'stylistic/no-confusing-arrow': ['warn', { allowParens: true }],
  'stylistic/rest-spread-spacing': ['warn', 'never'],
  'stylistic/template-curly-spacing': ['warn', 'never'],
  'stylistic/wrap-iife': ['warn', 'inside', { functionPrototypeMethods: true }],
  // see `generator-star-spacing` and `new-parens`
  'stylistic/yield-star-spacing': ['error', 'after'],
};
