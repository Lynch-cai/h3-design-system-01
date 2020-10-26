const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase : './dist',
        open: true,
        host: '0.0.0.0',
        useLocalIp: true
    },
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin([
                {from: 'static'}
        ]),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, '../src/index.html')
        // }),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, '../src/sign-up.html')
        // })
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/views/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'sign-up.html',
            template: 'src/views/sign-up.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'password-forget.html',
            template: 'src/views/password-forget.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    }
}
