const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const production = process.env.NODE_ENV === 'production' || false;

module.exports = {
    entry: ['./src/jquery-anything-clickable.js'],
    mode: 'production',
    output: {
        filename: production ? 'jquery-anything-clickable.min.js' : 'jquery-anything-clickable.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this',
        library: 'Clickable',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    optimization: {
        minimize: production,
        minimizer: [
          new TerserPlugin({ })
        ]
    }
};
