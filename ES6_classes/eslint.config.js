// eslint.config.js
module.exports = {
    extends: ['eslint:recommended'], // Inherits the recommended ESLint rules
    parserOptions: {
      ecmaVersion: 2021, // Enables ECMAScript 2021 features
      sourceType: 'module', // Allows the use of import/export syntax
    },
    env: {
      browser: true, // Define global variables available in the browser
      node: true, // Define global variables available in Node.js
      es2021: true, // Enable ECMAScript 2021 globals
    },
    rules: {
      // Customize rules for your project
      'no-trailing-spaces': 'error', // Example rule to disallow trailing spaces
      'no-unused-vars': 'warn', // Warn about unused variables
      'eqeqeq': 'error', // Enforce strict equality (===)
      "arrow-parens": ["error", "as-needed"],
      "lines-between-class-members": ["error", "never"],
    },
  };
  