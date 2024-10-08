// Recommendations to improve code readability and clarity

const UNUSED_IGNORE_PATTERN = '^_';

/** @type { Record<string,import('eslint').Linter.RuleEntry> } */
export default {
  camelcase: ['warn'],

  // use shorthand operators (`a = a + 1` --> `a += 1`)
  'operator-assignment': ['warn', 'always'],

  // prefer template strings over string concatenation
  'prefer-template': ['warn'],

  // constructors usually don't have side effects
  'no-new': ['warn'],

  'no-magic-numbers': ['off'],

  // useless and unused code {{{

  'no-lone-blocks': ['warn'],

  'no-unreachable': ['warn'],
  'no-unused-vars': [
    'warn',
    {
      vars: 'all',
      varsIgnorePattern: UNUSED_IGNORE_PATTERN,
      args: 'all',
      argsIgnorePattern: UNUSED_IGNORE_PATTERN,
      ignoreRestSiblings: true,
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: UNUSED_IGNORE_PATTERN,
    },
  ],
  'no-unused-expressions': ['warn'],
  'no-unused-labels': ['warn'],
  'no-extra-label': ['warn'],
  'no-useless-call': ['warn'],
  'no-useless-catch': ['warn'],
  'no-useless-concat': ['warn'],
  'no-useless-escape': ['warn'],
  'no-useless-return': ['warn'],
  'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
  'no-useless-computed-key': ['warn'],
  'no-useless-constructor': ['warn'],
  'no-useless-rename': ['warn'],

  // `parseInt()` with literals
  'prefer-numeric-literals': ['warn'],

  // `return await f()` is equivalent to `return f()`
  // NOTE: not really. see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/return-await.mdx
  'no-return-await': ['off'],

  // }}}

  // conditions {{{

  'no-lonely-if': ['warn'],
  'no-duplicate-case': ['warn'],
  'no-constant-condition': ['warn', { checkLoops: false }],
  'no-unmodified-loop-condition': ['warn'],
  yoda: ['warn', 'never', { exceptRange: true }],
  'no-self-compare': ['warn'],
  'no-self-assign': ['warn'],
  'no-compare-neg-zero': ['warn'],

  // }}}

  // loops {{{

  'for-direction': ['warn'],

  'no-await-in-loop': ['off'],

  // }}}

  // syntactically such code is correct (see the ESLint documentation), but
  // is very unintuitive
  'no-unsafe-finally': ['warn'],

  // functions {{{

  // suggest function names everywhere except when they can't be inferred by
  // the language because this simplifies debugging
  // 'func-names': ['warn', 'as-needed'],

  'func-names': ['off'],
  // prefer intended function declaration syntax over assigning to variables
  // (hello @ShubaShaba)
  'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

  'no-extra-bind': ['warn'],

  'n/handle-callback-err': ['warn'],

  // }}}

  // objects {{{

  'object-shorthand': ['warn', 'always'],
  'prefer-destructuring': [
    'warn',
    {
      VariableDeclarator: { array: false, object: true },
      AssignmentExpression: { array: false, object: false },
    },
    { enforceForRenamedProperties: false },
  ],
  'no-empty-pattern': ['warn'],
  'dot-notation': ['warn', { allowKeywords: true }],

  'accessor-pairs': ['warn', { enforceForClassMembers: true }],

  // }}}

  // regular expressions {{{

  'prefer-regex-literals': ['warn'],
  'no-regex-spaces': ['warn'],

  // }}}

  // imports and exports {{{

  'no-duplicate-imports': ['warn'],
  'sort-imports': [
    'warn',
    {
      // don't sort whole `import` statements
      ignoreDeclarationSort: true,
      // sort imported identifiers inside curly braces
      ignoreMemberSort: false,
    },
  ],

  // }}}
};
