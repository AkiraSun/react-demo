var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

// var mainExtract = new ExtractTextPlugin('bundle1.css', { allChunks: true })
// var assistExtract = new ExtractTextPlugin('bundle.css', { allChunks: true })

module.exports = {
  entry: {
    bundle: path.resolve(APP_PATH, 'index.jsx'),
    //vendor: ['react', 'redux', 'react-router-redux', 'react-redux'],
    antd: [
      'antd/lib/table',
      'antd/lib/button',
      'antd/lib/icon',
      'antd/lib/form',
      'antd/lib/tag',
      'antd/lib/popconfirm',
      'antd/lib/select',
      'antd/lib/menu',
      'antd/lib/anchor',
      'antd/lib/modal',
      'antd/lib/input',
      'antd/lib/badge',
      'antd/lib/pagination',
    ]
  },
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  // resolve: {
  //   extensions: ['', '.js']
  // },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // mainExtract,
    // assistExtract,
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['antd', 'vendor'],
      minChunks: Infinity
    })
  ],
  module: {
    loaders: [
      {
      test: /\.js$/,
      loaders: [
        'babel-loader'
        // 'eslint-loader'
      ],
      exclude: /node_modules/,
    },
    // {
    //   test: /\.jsx$/,
    //   loaders: [
    //     'babel',
    //     'eslint-loader'
    //   ],
    //   exclude: /node_modules/,
    // },
    // {
    //   test: /\.css$/,
    //   loader: assistExtract.extract('style', ['css', 'autoprefixer'])
    // },
    // {
    //   test: /\.scss$/,
    //   loader: mainExtract.extract('style', ['css', 'autoprefixer', 'sass'])
    // },
    {
      test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
      loader: 'file-loader'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'url',
      query: { limit: 10240 }
    }, ]
  },
};
