// @ts-check

import jest from 'eslint-plugin-jest';

/** @type import('typescript-eslint').ConfigWithExtends */
export default {
  plugins: { jest },
  settings: { jest: { version: 29 } },
  ...jest.configs['flat/recommended'],
  rules: {
    ...jest.configs['flat/recommended'].rules,
    '@typescript-eslint/require-await': 'off',
  },
};
