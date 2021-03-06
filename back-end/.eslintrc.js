module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'func-names': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-debugger': 2,
    'import/extensions': 0,
    'no-unused-expressions': 'error',
    'no-useless-return': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-unresolved': 'off',
  },
};
