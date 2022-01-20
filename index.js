module.exports = {
  // eslint-configs
  extends: ['airbnb', 'plugin:prettier/recommended'],
  // eslint-plugins
  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks', 'react-redux', 'redux-saga'],
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
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', 'jsx'] }],
    radix: 'off',
  },
};
