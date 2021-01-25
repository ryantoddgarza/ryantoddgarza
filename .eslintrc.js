const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    babelOptions: {
      configFile: '.babelrc.js',
    },
  },
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['react', 'import'],
  settings: {
    'react': {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.jsx', 'json'],
      },
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
    'function-paren-newline': [error, 'consistent'],
    'global-require': off,
    'implicit-arrow-linebreak': off,
    'import/no-deprecated': warn,
    'import/no-dynamic-require': off,
    'import/no-webpack-loader-syntax': off,
    'import/prefer-default-export': off,
    'indent': [
      error,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/anchor-is-valid': off,
    'jsx-a11y/click-events-have-key-events': error,
    'jsx-a11y/heading-has-content': off,
    'jsx-a11y/href-no-hash': off,
    'jsx-a11y/label-has-for': off,
    'jsx-a11y/label-has-associated-control': off,
    'jsx-a11y/mouse-events-have-key-events': off,
    'jsx-a11y/no-autofocus': off,
    'max-len': [
      error,
      150,
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': warn,
    'no-lonely-if': off,
    'no-multiple-empty-lines': [error, { max: error, maxEOF: error }],
    'no-implicit-coercion': error,
    'no-shadow': off,
    'no-underscore-dangle': off,
    'no-unused-vars': [
      error,
      { args: 'after-used', ignoreRestSiblings: false },
    ],
    'object-curly-newline': [error, { consistent: true }],
    'prefer-spread': off,
    'quote-props': [error, 'consistent'],
    'react/jsx-filename-extension': [error, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-target-blank': error,
    'react/no-typos': error,
    'react/no-unescaped-entities': off,
  },
  overrides: [
    {
      files: ['gatsby-node.js'],
      rules: {
        'import/no-extraneous-dependencies': off,
      },
    },
    {
      files: [
        'src/components/Portfolio/index.jsx',
        'src/components/Post/index.jsx',
      ],
      rules: {
        'react/no-danger': off,
      },
    },
  ],
};
