const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
/* const MiniCssExtractPlugin = require('mini-css-extract-plugin') */
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /(?!test\.)\.ts$/,
                use: ['babel-loader', 'ts-loader'],
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'test'), path.resolve(__dirname, 'node_modules') ]
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            /* {
                test: /\.(woff|woff2)$/i,
                use: {
                    loader: 'url-loader',
                },
            }, */
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins:[   new HtmlWebpackPlugin({template:'./src/template.html'}), 
                new ESLintPlugin({extensions: ['ts']})   
            ]  
}