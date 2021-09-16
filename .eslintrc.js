module.exports = {
  extends: ['@bitpas/eslint-config'],
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['src/components/Post/Post.tsx'],
      rules: {
        'no-console': 'off',
        'react/no-danger': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
