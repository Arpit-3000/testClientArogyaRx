const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@lib': path.resolve(__dirname, 'src/lib'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@services': path.resolve(__dirname, 'src/services')
  })
);
