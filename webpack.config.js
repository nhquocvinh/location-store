const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry: [
    './src/index',
  ],

  devtool: 'source-map',
  target: 'web',
  output: {
    path: path.resolve('public'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: './src',
    historyApiFallback: true,
  },

  plugins: [
    new CleanWebpackPlugin([
      'public',
    ], {
      root: __dirname,
      verbose: true,
      dry: false,
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      favicon: './assets/images/favicon.ico',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new webpack.optimize.AggressiveMergingPlugin(),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  module: {

    rules: [

      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              optipng: {
                optimizationLevel: 7,
              },
              mozjpeg: {
                quality: 65,
              },
              gifsicle: {
                interlaced: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
    ],

  },
};
