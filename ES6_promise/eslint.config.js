// eslint.config.js
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  overrides: [
    {
      files: ['*.js'],
      languageOptions: {
        globals: {
          // Define global variables here, if any
          node: 'readonly',
        },
      },
      plugins: ['node'],
      rules: {
        // Add or modify rules here
        'node/no-missing-import': 'error',
      },
    },
  ],
});
