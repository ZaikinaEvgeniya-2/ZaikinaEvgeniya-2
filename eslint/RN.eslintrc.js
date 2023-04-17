module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['@react-native-community', 'eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-native', 'simple-import-sort'],
  rules: {
    semi: 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    'react-native/react-native': true,
  },
  overrides: [
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react$', '^react-*', 'prop-types', 'styled-components', '^@'],

              ['ui-kit', '^(@|components)(/.*|$)', '^[a-z]'],

              ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

              // Side effect imports
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
  ],
}
