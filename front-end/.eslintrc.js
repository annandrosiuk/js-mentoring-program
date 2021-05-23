module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-console': 'off',
    'no-debugger': 2,
    'func-names': 'off',
    'import/extensions': 0,
    'no-unused-expressions': 'error',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-var-requires': 'off',
  },
};
