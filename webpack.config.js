var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/react-timeline.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'ReactTimeline.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    }
}