const path = require('path');

module.exports = [
  {
    entry: './src/jquery-anything-clickable.js',
    externals: { jquery: 'jQuery' },
    mode: "production",
    output: {
      filename: 'jquery-anything-clickable.min.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      globalObject: 'this'
    }
  }
];