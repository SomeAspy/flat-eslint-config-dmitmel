import prettierConfig from '../prettier.config.mjs';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type { Record<string,import('eslint').Linter.RuleEntry> } */
export default {
  'prettier/prettier': ['warn', prettierConfig],
  ...eslintConfigPrettier.rules,
};
