// eslint.config.js
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  overrides: [
    {
      files: ['*.js'],
      languageOptions: {
        globals: {
          node: 'readonly',
        },
      },
      plugins: ['node'],
      rules: {
        'node/no-missing-import': 'error',
      },
    },
  ],
});