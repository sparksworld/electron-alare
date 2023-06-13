module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // 'plugin:node/recommended',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        endOfLine: 'auto',
      },
    ],
    'react/display-name': 1,
    'no-unused-vars': 1,
    '@typescript-eslint/no-var-requires': 0,
  },
}
