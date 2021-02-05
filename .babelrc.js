module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    '@babel/plugin-transform-destructuring',
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@resources': './src/resources',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
