module.exports = {
  extends: ['@bitpas/eslint-config'],
  env: {
    browser: true,
  },
  overrides: [
    {
      files: [
        'src/components/Post/index.jsx',
      ],
      rules: {
        'react/no-danger': 'off',
      },
    },
  ],
};
