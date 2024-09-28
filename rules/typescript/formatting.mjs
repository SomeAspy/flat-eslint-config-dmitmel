// Again, just like in the file '../formatting.js` here I try to replicate
// the style of Prettier. Fortunately I can reference a ton of rules from the
// ruleset in that file.

import rulesJS from '../formatting.mjs';

/** @type { import("eslint").Linter.Config['rules'] } */
export default {
  '@typescript-eslint/member-delimiter-style': [
    'warn',
    {
      multiline: { delimiter: 'semi', requireLast: true },
      singleline: { delimiter: 'semi', requireLast: false },
    },
  ],

  '@typescript-eslint/type-annotation-spacing': [
    'warn',
    {
      before: rulesJS['key-spacing'][1].beforeColon,
      after: rulesJS['key-spacing'][1].afterColon,
    },
  ],

  // upgraded versions of the built-in rules {{{
};
