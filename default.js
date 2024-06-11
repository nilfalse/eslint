// @ts-check

import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

/** @type import('typescript-eslint').ConfigWithExtends[] */
export default [
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        ecmaFeatures: { jsx: true },
      },
    },
  },
  prettierConfig,

  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    plugins: {
      import: importPlugin,
      react,
    },
  },

  {
    rules: {
      'import/order': [
        'error',
        { alphabetize: { order: 'asc' }, 'newlines-between': 'always' },
      ],
      'no-unused-vars': [
        'error',
        { varsIgnorePattern: '[iI]gnored', argsIgnorePattern: '^_' },
      ],
      curly: 'error',
      'default-case': 'error',
    },
  },
];
