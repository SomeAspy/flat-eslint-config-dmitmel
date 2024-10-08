import rulesJS from '../formatting.mjs'; // no newline to align rest of file past L6
/** @type { import("eslint").Linter.Config['rules'] } */
export default {
  camelcase: ['off'],
  '@typescript-eslint/naming-convention': [
    /** @ts-ignore - @type { 'warn' | 'off' | 'error' } */
    rulesJS.camelcase[0],
    {
      selector: 'default',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
      filter: {
        regex: '^[a-zA-Z_$][a-zA-Z0-9_$]*$',
        match: true,
      },
    },
  ],

  // imports {{{

  // unfortunately I have to work with nw.js where it isn't possible to import
  // Node.js modules via the ES6 syntax
  '@typescript-eslint/no-require-imports': ['off'], // disallows the `require()` function entirely
  '@typescript-eslint/no-var-requires': ['off'], // only disallows using the returned value of `require()`

  '@typescript-eslint/consistent-type-imports': ['off'],

  // }}}

  // types and type annotations {{{

  '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],

  // https://microsoft.github.io/TypeScript-New-Handbook/everything/#interface-vs-alias
  // https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases
  // https://pawelgrzybek.com/typescript-interface-vs-type/
  '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

  '@typescript-eslint/consistent-indexed-object-style': ['off'],

  // see notes in https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#when-not-to-use-it
  // basically this rule creates more friction than helps
  '@typescript-eslint/typedef': ['off'],

  // }}}

  // classes {{{

  '@typescript-eslint/class-literal-property-style': ['off'],

  '@typescript-eslint/member-ordering': ['off'],

  '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'explicit' }],

  // }}}
};
