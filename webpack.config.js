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
        port: 8181
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
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
