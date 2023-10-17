const { type } = require('os');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
