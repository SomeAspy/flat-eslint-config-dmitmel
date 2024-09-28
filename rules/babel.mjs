import rulesTypeErrors from './type-errors.mjs';
import rulesSyntaxErrors from './syntax-errors.mjs';
import rulesRecommendations from './recommendations.mjs';

/** @type { import("eslint").Linter.Config['rules'] } */
export default {
  'new-cap': ['off'],
  '@babel/new-cap': rulesTypeErrors['new-cap'],

  'no-invalid-this': ['off'],
  '@babel/no-invalid-this': rulesSyntaxErrors['no-invalid-this'],

  'no-unused-expressions': ['off'],
  '@babel/no-unused-expressions': rulesRecommendations['no-unused-expressions'],
};
