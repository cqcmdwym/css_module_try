const path = require('path');

module.exports = {
    entry: './src',
    output: {
        path: path.join(__dirname,'build'),
        filename: 'bundle.js',
    },
};