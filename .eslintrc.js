module.exports = {
  extends: ['@bitpas/eslint-config'],
  env: {
    browser: true,
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.jsx', 'json'],
      },
    },
  },
  overrides: [
    {
      files: ['gatsby-node.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: [
        'src/components/Portfolio/index.jsx',
        'src/components/Post/index.jsx',
      ],
      rules: {
        'react/no-danger': 'off',
      },
    },
  ],
};
