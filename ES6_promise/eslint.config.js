// eslint.config.js
import eslint from 'eslint';

const { ESLint } = eslint; // ESLint package

export default {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
  },
};
