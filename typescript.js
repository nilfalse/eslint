// @ts-check

/** @type import('typescript-eslint').ConfigWithExtends */
export default {
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '[iI]gnored', argsIgnorePattern: '^_' },
    ],

    'no-void': ['error', { allowAsStatement: true }],

    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNever: true },
    ],
  },
};
