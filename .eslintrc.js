module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 'prefer-template': 0,
    // 'react/no-children-prop': [0],
    // 'linebreak-style': 0
  },
  use: [{
    loader: require.resolve('eslint-loader'),
    options: {
        formatter: eslintFormatter,
        eslintPath: require.resolve('eslint'),
        emitWarning: true
    },
}],
};
