module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /*'prettier/prettier': 'error',
    'no-duplicate-imports': 0,
    'react/jsx-filename-extension': 0,
    'react/sort-comp': 0,
    'global-require': 0,
    'comma-dangle': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    curly: ['error', 'all'],
    'react/prop-types': 0,
    'no-param-reassign': 1,
    'no-shadow': 1,
    'no-unused-vars': 1,
    'consistent-return': 1,
    'no-use-before-define': 1,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],*/
  },
};
