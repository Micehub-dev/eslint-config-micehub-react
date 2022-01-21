module.exports = {
  // eslint-configs
  extends: ['airbnb'],
  // eslint-plugins
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', 'react-redux', 'redux-saga'],
  // enabling/disabling/changing level of rules
  rules: {
    'class-methods-use-this': 'off',
    'import/first': 0,
    'import/order': 'warn',
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', 'jsx'] }],
    radix: 'off',
  },
};
