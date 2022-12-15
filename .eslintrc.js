module.exports = {
  extends: ['@bitpas'],
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
