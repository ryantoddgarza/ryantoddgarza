module.exports = {
  extends: ['@bitpas/eslint-config'],
  env: {
    browser: true,
  },
  rules: {
    'no-console': 'warn',
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/no-danger': 'warn',
      },
    },
  ],
};
