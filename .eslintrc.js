const off = 0;
const error = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'prettier'],
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
  settings: {
    'import/resolver': {
      'babel-module': {},
      'alias': {
        map: [
          ['@components', './src/components'],
          ['@resources', './src/resources'],
          ['@styles', './src/styles'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
