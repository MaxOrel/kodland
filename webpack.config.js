const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },
    mode: 'development',
    devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
    target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        hot: true,
        port: 3000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|webp|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    },
                    'postcss-loader',
                    "sass-loader"]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                    'postcss-loader']
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    esModule: false,
                    sources: {
                        list: [
                            {
                                attribute: 'srcset',
                                type: 'src',
                            },
                            {
                                attribute: 'src',
                                type: 'src',
                            },
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        roots: [path.resolve(__dirname, './src/images')],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ]
};