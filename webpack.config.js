const webpack = require('webpack'),
UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [__dirname + '/src/core.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bgv.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    }
                }
            }
        ]
    },
    plugins: [
        // new webpack.ProvidePlugin({jQuery: 'jquery', $: 'jquery', "window.jQuery": "jquery", "window.$": "jquery"}),
        new UglifyJSPlugin({sourceMap: false})
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js']
    }
};
