const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [{ loader: 'babel-loader' }],
                include: __dirname + '/src',
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
                include: __dirname + '/src'
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};