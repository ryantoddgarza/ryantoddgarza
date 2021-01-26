const off = 0;
const error = 2;

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['react', 'jsx-a11y', 'import'],
  settings: {
    'import/resolver': {
      'babel-module': {},
      'alias': {
        map: [
          ['@components', './src/components'],
          ['@resources', './src/resources'],
          ['@styles', './src/styles'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
    'react': {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'import/prefer-default-export': off,
    'quote-props': [error, 'consistent'],
  },
};
