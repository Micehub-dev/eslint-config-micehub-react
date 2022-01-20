module.exports = {
  // eslint-configs
  extends: ['airbnb', 'plugin:prettier/recommended'],
  // eslint-plugins
  plugins: ['import'],
  // enabling/disabling/changing level of rules
  rules: {
    'class-methods-use-this': 'off',
    'import/first': 0,
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
        trailingComma: 'all',
        endOfLine: 'crlf',
      },
    ],
    radix: 'off',
  },
};
