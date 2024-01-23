const path = require('path');  // CommonJS

module.exports = { // configuracao do web pack
    mode: 'development',  // Modo de trabalho, developmet ou production
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),  // Arquivo de entrada
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'] // Tem que instalar eles no npm
        }]
    },
    devtool: 'source-map'
};  