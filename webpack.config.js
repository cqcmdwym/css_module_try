const path = require('path');

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
                use: [
                    { loader: 'style-loader' }, 
                    { loader: 'css-loader' }],
                include: __dirname + '/src'
            }
        ],
    }
};