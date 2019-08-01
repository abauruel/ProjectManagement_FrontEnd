const { override, fixBabelImports } = require('customize-cra');

const rootImport = [
  'root-import',
  {
    rootPathPrefix: '~',
    rootPathSuffix: 'src',
  },
];

module.exports = override(fixBabelImports(rootImport));
