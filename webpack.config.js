'use strict';

var webpack = require('webpack');
var path    = require('path');
var plugins = [new webpack.NoErrorsPlugin()];

module.exports = {
    entry: {
        main: './src/js/app.js'
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name]-bundle.js'
    },
    resolve: {
        alias: {
            components: path.resolve('./src/js/components'),
            actions: path.resolve('./src/js/actions'),
            css: path.resolve('./src/css'),
            modules: path.resolve('./src/js/modules'),
            constants: path.resolve('./src/js/constants'),
            pages: path.resolve('./src/js/pages'),
            store: path.resolve('./src/js/store')
        }
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ]
    },
    plugins: plugins
};
