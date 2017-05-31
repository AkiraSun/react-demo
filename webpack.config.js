/**
 * Created by panca on 16/8/14.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },

     /*--devtool eval --progress --colors --content-base build*/
    devServer: {
        inline: true,
        port: 8181,
        disableHostCheck: true
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {
              test: /\.css?$/,
              loaders : [
                'style-loader',
                'css-loader'
              ]
            },
            {
              test: /\.scss?$/,
              loaders : [
                'style-loader',
                'css-loader',
                'sass-loader?{"sourceMap":true}'
              ],
              include: __dirname
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/,
              loader: 'url',
              query: {limit: 10240}
            },
            // Process JS with Babel.
            // 按需加载antd css
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                plugins: [
                  ['import', [{ libraryName: "antd", style: 'css' }]],
                ],
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true
              }
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
