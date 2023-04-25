/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  'import/no-anonymous-default-export': 'off',
  'no-param-reassign': 'warn',
  'no-console': [
    'warn',
    {
      allow: ['warn', 'error']
    }
  ],
  'import/order': [
    'warn',
    {
      groups: ['external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always'
    }
  ]
}
