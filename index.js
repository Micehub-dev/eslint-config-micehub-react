module.exports = {
  // eslint-configs
  extends: ['airbnb', 'plugin:prettier/recommended'],
  // eslint-plugins
  plugins: ['simple-import-sort'],
  // enabling/disabling/changing level of rules
  rules: {
    'class-methods-use-this': 'off',
    'import/imports-first': 0,
    'import/order': 'warn',
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'prettier/prettier': [
      'error',
      // configure Prettier for ESLint
      {
        useTabs: false,
        tabWidth: 2,
        arrowParens: 'avoid',
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'crlf',
      },
    ],
    radix: 'off',
  },
};
