const off = 0;
const error = 2;

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/react',
  ],
  plugins: ['import', 'jsx-a11y', 'prettier', 'react'],
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
